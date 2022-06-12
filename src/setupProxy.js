/*
 * @Author: cos
 * @Date: 2022-06-13 01:19:41
 * @LastEditTime: 2022-06-13 01:20:12
 * @LastEditors: cos
 * @Description:
 * @FilePath: \byte-search\src\setupProxy.js
 */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api/v1', {
      target: 'http://cosine.ren:8080',
      changeOrigin: true,
      ws: true,
      pathRewrite: {
        '^/api/v1': '',
      },
    })
  );
};
