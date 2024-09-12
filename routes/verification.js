
import express from 'express';
const router = express.Router();
import { generateCode } from "../utils/sign";
import { sendVerificationEmail, sendVerificationMobile } from "../utils/verification";
import User from '../model/user';
const jwt = require('../jwt');
import redis from '../redis';
router.post('/sign', async (req, res) => {
    const { user } = req.body;
    const code = generateCode(6); // 生成6位验证码
    // 存储验证码到session或数据库
    // req.session.verificationCode = code;
    try {
        if (user.email) {
            redis.set(user.email, code, {EXPIRE: 60 * 2}); // 存储验证码
            await sendVerificationEmail(user.email, code);
        } else if (user.mobile) {
            redis.set(user.mobile, code, {EXPIRE: 60 * 2}); // 存储验证码
            await sendVerificationMobile(user.mobile, code);
        }
        res.send({
            success: true,
            message: '验证码已经发送，请查收！',
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
});

router.post('/verify', jwt.verify, (req, res) => {
    const { key, code } = req.body;
    // const sessionCode = req.session.verificationCode;
    const verifyCode = redis.get(key);
    if (code === verifyCode) {
        res.send({
            success: true,
            message: '验证成功！'
        });
    } else {
        res.send({
            success: false,
            message: '验证码错误！'
        });
    }
});

router.post('/verifyAndUpdate', jwt.verify, async (req, res) => {
    const { code, user } = req.body;
    // const sessionCode = req.session.verificationCode;
    let verifyCode = await redis.get(user.email || user.mobile);
    if (code === verifyCode) {
        const userId = req._userId;
        const users = await User.find(user);
        if (users && users.length > 0) {
            return res.json({
                success: false,
                message: '该账号已绑定！'
            });
        }
        User.findByIdAndUpdate(userId, user).then((data) => {
            res.json({
                success: true,
                message: '绑定成功！',
                data: data
            });
        }).catch(err => {
            res.json({
                success: false,
                message: '绑定失败！'
            });
        })
    } else {
        res.send({
            success: false,
            message: '验证码错误或者超时！'
        });
    }
});

router.post('/verifyAndUpdatePassword', async (req, res) => {
    const { code, user } = req.body;
    // const sessionCode = req.session.verificationCode;
    let verifyCode = await redis.get(user.email || user.mobile);
    if (code === verifyCode) {
        let query = {};
        if (user.email) {
            query.email = user.email;
        } else if (user.mobile) {
            query.mobile = user.mobile;
        }
        User.findOneAndUpdate(query, { password: user.password }).then((data) => {
            res.json({
                success: true,
                message: '更新成功！'
            });
        }).catch(err => {
            res.json({
                success: false,
                message: '更新失败！'
            });
        })
    } else {
        res.send({
            success: false,
            message: '验证码错误！'
        });
    }
});

export default router;