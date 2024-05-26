import jwt from 'jsonwebtoken';
const secretKey = 'elephant'; //密钥

// 生成token
export const sign = (data={}) => {
	return jwt.sign(data, secretKey, {
		expiresIn: 60*60,
	});
};

// 验证token
export const verify = (req, res, next) => {
	let authorization = req.headers.authorization || req.body.token || req.query.token || '';
	let token = '';
	if (authorization.includes('Bearer')) {
		token = authorization.replace('Bearer ', '');
	} else {
		token = authorization;
	}

  jwt.verify(token, secretKey, (error, data) => {
		if (error) {
			res.status(401).send({ success: false, message: '登录信息已失效，请重新登录' });
		} else {
			req._id = data._id;
			next();
		}
	});
};