/*
 * @Author: your name
 * @Date: 2020-12-11 14:35:15
 * @LastEditTime: 2020-12-11 14:41:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pangu\src\app.ts
 */
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import route from './router';
import { Logger } from './logger/config';
// import * as mount from 'koa-mount';

const app = new Koa();
app.keys = ['lqy9876'];
const router =  new Router({
	prefix: '/api'
});
route(router);
app
	.use(bodyParser())
	.use(router.routes())
	.use(router.allowedMethods())
	
app.on('err', function (err) {
	console.log(err);
});
try {
	app.listen(9220);
	Logger.info('server is on port: 9220');
} catch (err) {
	Logger.error(`server is crashed:${err.message}`);
}
