const Controller = require('egg').Controller;

class ArticleController extends Controller {
	//同步操作函数async
	async create(){
		const {ctx} = this;
		console.log(ctx.request.body)
		const res = await ctx.service.article.create(ctx.request.body);
		console.log(res)
		if (res) {
			ctx.body = {
				status: 200,
				data: res
			}
		}else {
			ctx.body = {
				status: 500,
				message: '保存出错'
			}
		}
	}
}

module.exports = ArticleController;