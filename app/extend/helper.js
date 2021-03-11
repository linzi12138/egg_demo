const [CODE_SUCCESS, CODE_ERROR] = [200, 500];
const [MSG_SUCCESS,MSG_ERROR] = ['操作成功','操作失败'];

module.exports = {
	/**
	 * [success description]
	 * @param  {[type]} ctx  [ctx]
	 * @param  {[type]} data [响应数据]
	 * @param  {[type]} code [状态码，不传默认等于CODE_SUCCESS]
	 * @param  {[type]} msg  [响应信息，不传默认等于MSG_SUCCESS]
	 * @return {[type]} 
	 */
	success(ctx,data,code,msg){
		console.log(code,msg)
		ctx.body = {
			code:code||CODE_SUCCESS,
			msg:msg||MSG_SUCCESS,
			data
		}
	},
	/**
	 * [fail description]
	 * @param  {[type]} ctx  [ctx]
	 * @param  {[type]} msg  [响应信息，不传默认等于MSG_ERROR]
	 * @param  {[type]} code [状态码，不传默认等于CODE_ERROR]
	 * @return {[type]} 
	 */
	fail(ctx,msg,code){
		ctx.body = {
			code:code||CODE_ERROR,
			msg:msg||MSG_ERROR
		}
	}
}