const [CODE_SUCCESS, CODE_ERROR] = [200, 500];
const [MSG_SUCCESS,MSG_ERROR] = ['操作成功','操作失败'];

module.exports = {
	success(ctx,data,code,msg){
		console.log(code,msg)
		ctx.body = {
			code:code||CODE_SUCCESS,
			msg:msg||MSG_SUCCESS,
			data
		}
	},

	fail(ctx,msg,code){
		ctx.body = {
			code:code||CODE_ERROR,
			msg:msg||MSG_ERROR
		}
	}
}