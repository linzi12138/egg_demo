'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    const res = await app.mysql.select('article');
    await ctx.render('index.html', { res }); //渲染模板
  }
  //登陆
  async login() {
    const { ctx, app } = this;
    const { username, password } = ctx.request.body;
    if (!username || !password) {
      ctx.helper.fail(ctx,'用户名或密码不能为空')
    } else {
    	//查询用户是否存在
      const res = await app.mysql.get('user', { username });
      if (res) {
        if (password !== res.password) {
          ctx.helper.fail(ctx,'用户名或密码错误')
        } else {
        	//使用jwt插件生成token，app.config.jwt.secret是自定义密钥，在config.default.js
          const token = app.jwt.sign({
            userId: res.userId,
          }, app.config.jwt.secret)
          ctx.helper.success(ctx,token)
        }
      }
    }
  }
}

module.exports = HomeController;