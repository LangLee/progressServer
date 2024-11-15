import express from 'express';
const router = express.Router();
import { getHotTops } from '../utils/api';
// const types = ['toutiao', 'weibo', '36kr', 'douyin', 'baidu', 'zhihu', 'bilibili', 'tieba', 'juejin', 'douban-movie', 'jianshu', 'hellogithub']
router.get('/hotTop', async (req, res) => {
    let {
        type
    } = req.query;
    
    let result = await getHotTops(type);
    res.json(result); 
})

export default router;