/* eslint valid-jsdoc: "off" */

'use strict';

// const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1614751047678_291';

  // add your middleware config here
  config.middleware = ['auth'];

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'root',
      // 数据库名
      database: 'egg_demo',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  //egg 框架内置了安全系统，默认开启防止 XSS 攻击 和 CSRF 攻击，此处关闭（生产环境不推荐）
  config.security = {
    csrf: false
  };

  //配置默认模板引擎
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks' //左边写成.html后缀，会自动渲染.html文件
    }
  };

  config.jwt = {
    secret: '6666', //自定义token的加密条件字符串，可按各自的需求填写
  };

  config.authWhiteList = ['/login']

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};