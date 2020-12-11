/*
 * @Author: your name
 * @Date: 2020-11-30 09:03:52
 * @LastEditTime: 2020-12-11 18:21:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \process2\src\server\tags\router.ts
 */
import * as Router from 'koa-router';
import Controller from './controller';
export default (router: Router) => {
    const controller = new Controller();
    router.get('/xxxxs/:_id', controller.getOne.bind(controller));
    router.get('/xxxxs/list', controller.getList.bind(controller));
    router.get('/xxxxs/list/page', controller.getListByPage.bind(controller));
    router.put('/xxxxs/:_id', controller.updateItem.bind(controller));
    router.post('/xxxxs', controller.create.bind(controller));
    router.delete('/xxxxs', controller.delete.bind(controller));
}