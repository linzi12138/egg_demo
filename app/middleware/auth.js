module.exports = (options,app)=>{
	console.log(options)
	return async function (ctx,next) {
		//获取 config.default.js 中自定义的路由白名单
		const authWhiteList = app.config.authWhiteList;
		const url = ctx.url;

		//判断是否需要鉴权
		if (authWhiteList.includes(url)) {
			await next();
		}else {
			let token = ctx.headers.token || '';
			//截取token，因为jwt默认需要前端传token前面加上"Bearer ",这里截取掉
			token = token.substring(7);
			console.log(token)
			try {
				//解析token
				const decode = await app.jwt.verify(token,app.config.jwt.secret);
				//把解析结果保存到ctx对象中
				ctx.state.userinfo = decode;
				await next();
			} catch(e) {
				console.log(e)
				ctx.helper.fail(ctx,'登陆失效',401);
			}
		}
	}
}