import { type } from 'express/lib/response';
import mongoose from 'mongoose';
var Schema = mongoose.Schema
// 标签
var TagSchema = Schema({
    name: {
        type: String,
        required: true
    },
    code:{
        type: String,
        required: true
    },
    color: String,
    createTime: {
        type: Date,
        default: Date.now
    }
})

const Tag = mongoose.model('tag', TagSchema, "tag")

export default Tag;
