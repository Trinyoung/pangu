/*
 * @Author: your name
 * @Date: 2020-12-11 14:24:43
 * @LastEditTime: 2020-12-15 20:25:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pangu\src\server\module\controller.ts
 */
import { BaseController } from '../base/baseController';
import { XxxxService, xxxx_service } from './service'

export default class XxxxController extends BaseController<XxxxService> {
    constructor() {
        super(xxxx_service)
    }
    
}
 