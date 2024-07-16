// import Anchor from './anchor';
import mongoose from 'mongoose';
var Schema = mongoose.Schema
import { Anchors } from './anchor';
import { BOOK_TYPES } from '../common/constants';
// 书籍
var bookSchema = Schema({
    title:{
        type: String,
        required: true,
        default: '新建笔记'
    },
    image:String,
    description:String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    content: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        enum: BOOK_TYPES
    },
    createTime: {
        type: Date,
        default: Date.now
    },
    updateTime: {
        type: Date,
        default: Date.now
    },
    anchors: Anchors,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'group'
    },
    url: {
        type: String,
        default: ''
    },
    appId: {
        type: Schema.Types.ObjectId,
        ref: 'app'
    },
    share: {
        type: Boolean,
        default: false
    }
})
// bookSchema.virtual('formatCreateTime').get(function() {
//   return this.createTime.toISOString();
// });
 
const Book = mongoose.model('book', bookSchema, "book")

export default Book;
