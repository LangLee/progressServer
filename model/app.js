import mongoose from 'mongoose';
var Schema = mongoose.Schema
// 标签
var AppSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    icon:{
        type: String
    },
    theme: String,
    createTime: {
        type: Date,
        default: Date.now
    },
    url: {
        type: String,
        required: true
    },
    inner: {
        type: Boolean,
        default: false
    }, 
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    description: {
        type: String
    }
})

const App = mongoose.model('app', AppSchema, "app")

export default App;
