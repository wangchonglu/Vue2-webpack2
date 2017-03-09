/**
 * 项目的配置文件
 */
var config = {}
if (process.env.NODE_ENV == 'development') {
  config = require('./dev').default
}
if (process.env.NODE_ENV == 'production') {
  config = require('./prod').default
}
export default config