import express from 'express';
const router = express.Router();
import Group from '../model/group'
import Book from '../model/book'
import User from '../model/user'
const jwt = require('../jwt');
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
const getAllGroupAndBooks = async (userId, defaultGroup=true) => {
    let groups = await Group.find({ author: userId }).select('name').sort({ createTime: 'asc' }).exec().then((data)=> {
        let groups = data && data.map(({_id, name})=>({id:_id, name}));
        if (defaultGroup) {
            groups.splice(0, 0, {id: 'default', name: '默认', readonly: true});
        }
        return groups;
    }).catch(err => {
        return { success: false, message: err };
    });
    return Book.find({ author: userId }).select('title createTime category type url').sort({ createTime: 'desc' }).exec()
        .then(data => {
            let groupBooks={};
            if (data && data.length) {
                data.map((book) => {
                    let { _id, title, createdTime, category='default', type, url } = book || {};
                    if (!groupBooks || !groupBooks[category]) {
                        groupBooks[category] = [];
                    }
                    groupBooks[category].push({ id: _id, title, createdTime, category, type, url });
                })
            }
            groups.forEach(group => {
                group.books = groupBooks[group.id];
            })
            return {
                success: true,
                data: groups
            };
        }).catch(err => {
            return { success: false, message: err };
        });
}
const getAppAllGroupAndBooks = async (appId, userId, defaultGroup=true) => {
    let groups = await Group.find({ appId, author: userId }).select('name').sort({ createTime: 'asc' }).exec().then((data)=> {
        let groups = data && data.map(({_id, name})=>({id:_id, name}));
        if (defaultGroup) {
            groups.splice(0, 0, {id: 'default', name: '默认', readonly: true});
        }
        return groups;
    }).catch(err => {
        return { success: false, message: err };
    });
    return Book.find({ appId, author: userId }).select('title createTime category type url appId').sort({ createTime: 'desc' }).exec()
        .then(data => {
            let groupBooks={};
            if (data && data.length) {
                data.map((book) => {
                    let { _id, title, createdTime, category='default', type, url } = book || {};
                    if (!groupBooks || !groupBooks[category]) {
                        groupBooks[category] = [];
                    }
                    groupBooks[category].push({ id: _id, title, createdTime, category, type, url });
                })
            }
            groups.forEach(group => {
                group.books = groupBooks[group.id];
            })
            return {
                success: true,
                data: groups
            };
        }).catch(err => {
            return { success: false, message: err };
        });
}
//获取分组和图书
router.get('/getGroupAndBooks', jwt.verify, async (req, res) => {
    let userId = req._userId;
    let result = await getAllGroupAndBooks(userId);
    res.json(result);
})
router.get('/getAppGroupAndBooks', jwt.verify, async (req, res) => {
    let userId = req._userId;
    let appId = req.headers.appid;
    let result = await getAppAllGroupAndBooks(appId, userId, false);
    res.json(result);
})
// 获取门户和图书
router.get('/getPortalAndBooks', jwt.verify, async (req, res) => {
    let userId = await User.findOne({name: 'admin'}).exec().then((data)=>data.id);
    let result = await getAllGroupAndBooks(userId, false);
    let editable = userId === req._userId;
    let {success, data} = result;
    if (success) {
        res.json({success: true, data: { editable, portals: data }});
    } else {
        res.json(result);
    }
})
//创建分组
router.post('/createGroup', jwt.verify, (req, res) => {
    let { name } = req.body || {};
    let userId = req._userId;
    let appId = req.headers.appid;
    Group.create({ name, author: userId, appId }).then((data) => {
        if (data) {
            res.json({
                success: true,
                data: data
            });
        } else {
            res.json({ success: false, message: '创建失败！' });
        }
    })
});
// 更新分组
router.post('/updateGroup', jwt.verify, (req, res) => {
    let { id, name } = req.body || {};
    if (!id) {
        res.json({ success: false, message: '更新失败！' });
    };
    Group.findByIdAndUpdate(id, { $set: { name } }).exec().then((data) => {
        if (data) {
            res.json({
                success: true,
                data: data
            });
        } else {
            res.json({ success: false, message: '更新失败！' });
        }
    });
});
// 删除分组
router.post('/removeGroup', jwt.verify, (req, res) => {
    let { id } = req.body || {};
    Group.findByIdAndDelete(id).then((data) => {
        if (data) {
            res.json({
                success: true,
                message: '删除成功！',
                data: data
            });
        } else {
            res.json({ success: false, message: '删除失败！' });
        }
    });
});

export default router;