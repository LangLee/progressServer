import crypto from 'crypto';
const sha256 = (data) => {
    // 创建一个SHA-256哈希对象
    const hash = crypto.createHash('sha256');
    // 更新哈希对象的数据
    hash.update(data);
    // 生成哈希值的十六进制字符串
    return hash.digest('hex');
}
export default sha256;