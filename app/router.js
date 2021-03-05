'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.get('/', controller.home.index);
  router.post('/login', controller.home.login);

  //********** 使用jwt中间件进行路由鉴权
  router.post('/article/create', controller.article.create);
  router.get('/article/:id', controller.article.query);
  router.put('/article/update', controller.article.update);
};