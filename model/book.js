// import Anchor from './anchor';
import mongoose from 'mongoose';
var Schema = mongoose.Schema
import { Anchors } from './anchor';
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
        enum: ['markdown', 'text', 'drawing', 'todoList']
    },
    createTime: {
        type: Date,
        default: Date.now
    },
    anchors: Anchors,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'group'
    }
})
// bookSchema.virtual('formatCreateTime').get(function() {
//   return this.createTime.toISOString();
// });
 
const Book = mongoose.model('book', bookSchema, "book")

export default Book;
