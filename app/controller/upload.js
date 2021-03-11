const Controller = require('egg').Controller;
const path = require('path');
const fs = require('fs');

class UploadController extends Controller{
	async fileUpload(){
		const {ctx} = this;
		let file = ctx.request.files[0];
		try{
			const data = fs.readFileSync(file.filepath);
			let savePath = path.join('./','uploadFile/'+file.filename);
			const res = fs.writeFileSync(savePath,data);
			ctx.helper.success(ctx,savePath)
		}catch(err){
			console.log(err)
		}
	}
}

module.exports = UploadController;