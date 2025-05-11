import express from 'express';
const router = express.Router();
import Group from '../model/group'
import Book from '../model/book'
import User from '../model/user'
import App from '../model/app'
const jwt = require('../jwt');
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
const getAllGroupAndBooks = async (userId, defaultGroup = true) => {
    let groups = await Group.find({ author: userId }).select('name').sort({ createTime: 'asc' }).exec().then((data) => {
        let groups = data && data.map(({ _id, name }) => ({ id: _id, name }));
        if (defaultGroup) {
            groups.splice(0, 0, { id: 'default', name: '默认', readonly: true });
        }
        return groups;
    }).catch(err => {
        return { success: false, message: err };
    });
    return Book.find({ author: userId }).select('title createTime category type url').sort({ createTime: 'desc' }).exec()
        .then(data => {
            let groupBooks = {};
            if (data && data.length) {
                data.map((book) => {
                    let { _id, title, createdTime, category = 'default', type, url } = book || {};
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
const getAppAllGroupAndBooks = async (appId, userId, defaultGroup = true, share = false) => {
    let query = { appId }
    if (userId) {
        query.author = userId;
    }
    let groups = await Group.find(query).select('name').sort({ createTime: 'asc' }).exec().then((data) => {
        let groups = data && data.map(({ _id, name }) => ({ id: _id, name }));
        if (defaultGroup) {
            groups.splice(0, 0, { id: 'default', name: '未分类', readonly: true });
        }
        return groups;
    }).catch(err => {
        return { success: false, message: err };
    });
    if (share) {
        query.share = share;
    }
    return Book.find(query).select('title createTime category type url appId share').sort({ createTime: 'desc' }).exec()
        .then(data => {
            let groupBooks = {};
            if (data && data.length) {
                data.map((book) => {
                    let { _id, title, createdTime, category = 'default', type, url, share } = book || {};
                    if (!groupBooks || !groupBooks[category]) {
                        groupBooks[category] = [];
                    }
                    groupBooks[category].push({ id: _id, title, createdTime, category, type, url, share });
                })
            }
            groups.forEach(group => {
                group.books = groupBooks[group.id];
            })
            if (share) {
                groups = groups.filter(({ books }) => books && books.length > 0)
            }
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
    let { defaultGroup } = req.query;
    defaultGroup = (defaultGroup === true || defaultGroup === 'true') ? true : false;
    let result = await getAppAllGroupAndBooks(appId, userId, defaultGroup);
    res.json(result);
})
router.get('/getAppShareGroupAndBooks', async (req, res) => {
    let appId = req.headers.appid;
    let app = await App.findById(appId);
    if (!app) {
        return res.json({ success: false, message: '应用不存在！' })
    } else if (!app.published) {
        return res.json({ success: false, message: '应用未发布！' })
    } else if (app.system) {
        return res.json({ success: false, message: '系统应用不能分享！' })
    }
    let result = await getAppAllGroupAndBooks(appId, null, true, true);
    res.json(result);
})
// 获取门户和图书
router.get('/getPortalAndBooks', jwt.verify, async (req, res) => {
    let userId = await User.findOne({ name: 'admin' }).exec().then((data) => data.id);
    let result = await getAllGroupAndBooks(userId, false);
    let editable = userId === req._userId;
    let { success, data } = result;
    if (success) {
        res.json({ success: true, data: { editable, portals: data } });
    } else {
        res.json(result);
    }
})
//创建分组
router.post('/createGroup', jwt.verify, async (req, res) => {
    let { name, appId } = req.body || {};
    let userId = req._userId;
    appId = appId || req.headers.appid;
    if (!appId) {
        let defaultApp = await App.findOne({ name: 'book', inner: true });
        if (defaultApp) {
            appId = defaultApp._id;
        }
    }
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
router.post('/getAppGroups', jwt.verify, (req, res) => {
    let { sort = { createTime: 'desc' } } = req.query;
    let userId = req._userId;
    let appId = req.headers.appid;
    Group.find({ author: userId, appId }).select('name').sort(sort).exec().then((data) => {
        if (data) {
            res.json({
                success: true,
                data: data
            });
        } else {
            res.json({ success: false, message: '获取分类失败！' });
        }
    }).catch(err => {
        res.json({ success: false, message: err });
    });
});
router.get('/getDefaultAppGroups', jwt.verify, async(req, res) => {
    let { sort = { createTime: 'desc' } } = req.query;
    let userId = req._userId;
    let app = await App.findOne({ name: 'book', inner: true });
    if (!app) {
      return res.json({
        success: false,
        message: '没有找到默认应用！'
      })
    } else {
        Group.find({ author: userId, appId: app._id }).select('name').sort(sort).exec().then((data) => {
            if (data) {
                res.json({
                    success: true,
                    data: data
                });
            } else {
                res.json({ success: false, message: '获取分类失败！' });
            }
        }).catch(err => {
            res.json({ success: false, message: err });
        })
    }
});
export default router;