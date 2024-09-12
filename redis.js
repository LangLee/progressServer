const redis = require('redis') // 引入 redis

// 创建客户端
const redisClient = redis.createClient()


// 监听错误信息
redisClient.on('err', err => {
    console.log('redis client error: ', err)
})
// 创建连接，是个 promise
redisClient.connect(process.env.REDIS_PORT || 6379, process.env.REDIS_HOST || '127.0.0.1').then(() => {
    console.log('redis connected')
}).catch(err => {
    console.log('redis connect error: ', err)
})

export default redisClient;