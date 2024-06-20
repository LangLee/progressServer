import express from 'express';
const router = express.Router();
import Group from '../model/group'
import Book from '../model/book'
const jwt = require('../jwt');
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
//获取分组和图书
router.get('/getGroupAndBooks', jwt.verify, async (req, res) => {
    let userId = req._userId;
    let groups = await Group.find({ author: userId }).select('name').sort({ createTime: 'asc' }).exec().then((data)=> {
        let groups = data && data.map(({_id, name})=>({id:_id, name}));
        groups.splice(0, 0, {id: 'default', name: '默认', readonly: true});
        return groups;
    }).catch(err => {
        res.json({ success: false, message: err });
    });
    Book.find({ author: userId }).select('title createTime category type').sort({ createTime: 'desc' }).exec()
        .then(data => {
            let groupBooks={};
            if (data && data.length) {
                data.map((book) => {
                    let { _id, title, createdTime, category='default', type } = book || {};
                    if (!groupBooks || !groupBooks[category]) {
                        groupBooks[category] = [];
                    }
                    groupBooks[category].push({ id: _id, title, createdTime, category, type });
                })
            }
            groups.forEach(group => {
                group.books = groupBooks[group.id];
            })
            res.json({
                success: true,
                data: groups
            });
        }).catch(err => {
            res.json({ success: false, message: err });
        });
})

//创建分组
router.post('/createGroup', jwt.verify, (req, res) => {
    let { name } = req.body || {};
    let userId = req._userId;
    Group.create({ name, author: userId }).then((data) => {
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