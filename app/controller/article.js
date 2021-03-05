const Controller = require('egg').Controller;

class ArticleController extends Controller {
	async create(){
		const {ctx} = this;
		const res = await ctx.service.article.create(ctx.request.body);
		ctx.helper.success(ctx,res)
	}
	async query(){
		const {ctx,app} = this;
		const {id} = ctx.params;
		const res = await app.mysql.get('article',{id});
		ctx.helper.success(ctx,res)
	}
	async update(){
		const {ctx,app} = this;
		const res = await app.mysql.update('article',ctx.request.body);
		ctx.helper.success(ctx,res)
	}
}

module.exports = ArticleController;