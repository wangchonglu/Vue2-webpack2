/**
 * 项目的配置文件
 *  dev: 开发版地址
 *  production:线上版地址
 */
var config = require('./dev').default
// if (process.env.CODE_ENV == 'development') {
//     config = require('./dev').default
// }
// if (process.env.CODE_ENV == 'production') {
//     config = require('./prod').default
// }
export default config
