// import Anchor from './anchor';
import mongoose from 'mongoose';
var Schema = mongoose.Schema

// 书籍
var bookSchema = Schema({
    title:{
        type: String,
        required: true,
        default: '新建笔记'
    },
    image:String,
    description:String,
    author:String,
    content: {
        type: String,
        default: ''
    },
    type: String,
    createTime: {
        type: Date,
        default: Date.now
    }
})

const Book = mongoose.model('book', bookSchema, "book")

export default Book;
