import mongoose from 'mongoose';
var Schema = mongoose.Schema

// 书籍
var bookSchema = Schema({
    type:Boolean,
    name:String,
    image:String,
    description:String,
    author:String,
    content:String,
})

const Book = mongoose.model('book', bookSchema, "book")

export default Book;
