'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx,app } = this;
    const list = await app.mysql.select('article');
    ctx.body = list;
  }
}

module.exports = HomeController;
