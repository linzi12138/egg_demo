'use strict';

/** @type Egg.EggPlugin */
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
//模板渲染
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};
//token鉴权
exports.jwt = {
  enable: true,
  package: 'egg-jwt',
};