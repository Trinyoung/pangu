/*
 * @Author: your name
 * @Date: 2020-12-11 15:20:08
 * @LastEditTime: 2020-12-11 15:45:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pangu\src\router.ts
 */
/*
 * @Author: your name
 * @Date: 2020-08-11 08:44:09
 * @LastEditTime: 2020-11-27 14:35:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \process2\src\router.ts
 */
import * as Router from 'koa-router';
// import userRouter from './server/user/router';
// import articleRouter from './server/articles/router';
import xxxxRouter from './server/xxxx/router';

export default (router: Router) => {
    xxxxRouter(router);
//   articleRouter(router);
//   tagRouter(router);
}