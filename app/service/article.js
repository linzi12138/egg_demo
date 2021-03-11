const Service = require('egg').Service;

class ArticleService extends Service {
  async create(params) {
    const { app } = this;
    
    try {
    	//使用egg自带函数，需要使用await关键字才可以获取到正确返回值，否则返回值是一个Promise对象
      const result = await app.mysql.insert('article', params);
      return result;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}

module.exports = ArticleService;