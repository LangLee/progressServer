const redis = require('redis') // 引入 redis
require('dotenv').config()
// 创建Redis客户端
const {REDIS_HOST = '127.0.0.1', REDIS_PORT='6379'} = process.env || {};
console.log('REDIS_HOST: ', REDIS_HOST)
const redisClient = redis.createClient({
    url: `redis://${REDIS_HOST}:${REDIS_PORT}`
  });
// 监听错误信息
redisClient.on('err', err => {
    console.log('redis client error: ', err)
})
// 创建连接，是个 promise
redisClient.connect().then(() => {
    console.log('redis connected')
}).catch(err => {
    console.log('redis connect error: ', err)
})

export default redisClient;