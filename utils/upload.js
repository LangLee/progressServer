
const multer = require('multer');
const iconv = require('iconv-lite');

// 配置 multer 存储  
const storage = multer.diskStorage({  
  destination: function (req, file, cb) {  
    cb(null, 'uploads/'); // 确保这个文件夹存在  
  },  
  filename: function (req, file, cb) {  
    // let originalNameBuffer = Buffer.from(file.originalname);
    // let decodedFilename = iconv.decode(originalNameBuffer, 'gbk');
    file.originalname = Buffer.from(file.originalname, "latin1").toString("utf8");
    cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname);  
  }  
});  
  
const upload = multer({ storage: storage });  

export default upload;
  