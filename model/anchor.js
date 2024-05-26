import mongoose from 'mongoose';
var Schema = mongoose.Schema

// 书籍
var anchorSchema = Schema({
    itemIndex: Number,
    level: Number,
    originalLevel: Number,
    pos: Number,
    textContent: String
})

const Anchor = mongoose.model('anchor', anchorSchema, 'anchor')

export default Anchor;
