/*
 * @Author: your name
 * @Date: 2020-11-30 09:03:52
 * @LastEditTime: 2020-12-15 09:53:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \process2\src\server\tags\router.ts
 */
import * as Router from 'koa-router';
import Controller from './controller';
export default (router: Router) => {
    const controller = new Controller();
    const prefix = 'xxxxs'
    router.get(`/${prefix}/:_id`, controller.getOne.bind(controller));
    router.get(`/${prefix}/list`, controller.getList.bind(controller));
    router.get(`/${prefix}/list/page`, controller.getListByPage.bind(controller));
    router.put(`/${prefix}/:_id`, controller.updateItem.bind(controller));
    router.post(`/${prefix}`, controller.create.bind(controller));
    router.delete(`/${prefix}`, controller.delete.bind(controller));
}