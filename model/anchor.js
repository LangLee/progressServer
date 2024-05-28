import mongoose from 'mongoose';
const Schema = mongoose.Schema

// 目录
const AnchorSchema = Schema({
    id: String,
    itemIndex: Number,
    level: Number,
    originalLevel: Number,
    pos: Number,
    textContent: String
})

const Anchors = [AnchorSchema];
const Anchor = mongoose.model('anchor', AnchorSchema, 'anchor')

export default Anchor;
export {AnchorSchema, Anchors}
