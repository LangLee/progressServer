// const mongoose = require('mongoose');
import mongoose from 'mongoose';
import User from './user.js';
import App from './app.js';
import md5 from 'md5';
import Group from './group.js';
import apps from '../template/apps.json'
import portals from '../template/portals.json'
import Book from './book.js';
// 创建系统用户
const initAdministrator = async () => {
  try {
    let admin = await User.findOne({name: 'admin'});
    if (admin) {
      console.log('Users already present in the database.');
    } else {
      admin = await User.create({name: 'admin', password: md5('123qwe!@#'), administrator: true})
      console.log('Initial users created!');
    }
    initApplications(admin.id || admin._id);
    initPortals(admin.id || admin._id);
  } catch (error) {
    console.error('Error creating initial data:', error);
  }
};
const initApplications = async (adminId)=>{
  // 初始化应用
  let application  = await App.findOne({author: adminId}).exec();
  // 清除应用
  // await App.deleteMany();
  // application = null;
  if (application) {
    console.log('Applications already present in the database.');
    return;
  } else {
    let insertApps = apps.map((app)=>({...app, author: adminId}))
    await App.insertMany(insertApps).then((data)=>{
      if(data) {
        console.log('Initial applications created!');
      }
    });
  }
}
const initPortals = async (adminId)=>{
  // 初始化传送门
  let portal = await Group.findOne({author: adminId}).exec();
  // 清除传送门
  // await Group.deleteMany({author: adminId});
  // await Book.deleteMany({author: adminId});
  // portal = null;
  if (portal) {
    console.log('Portals already present in the database.');
    return;
  } else {
    let portalApp = await App.findOne({name: 'portal'}).exec();
    let insertPortals = portals.map(({name})=>({name, author: adminId, appId: portalApp._id}))
    await Group.insertMany(insertPortals).then((data)=>{
      if(data) {
        console.log('Initial portals created!');
        portals.forEach((portal)=>{
          let {name} = portal;
          let group = data.find((item)=>item.name===name);
          portal.books.forEach(({title, url})=>{
            Book.create({title, url, author: adminId, category: group._id, type: 'link', appId: portalApp.id})
          })
        })
        console.log('Initial books created!');
      }
    });
  }
}
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/progress');
    console.log('MongoDB Connected');
    await initAdministrator();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
export default connectDB;