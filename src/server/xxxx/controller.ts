/*
 * @Author: your name
 * @Date: 2020-12-11 14:24:43
 * @LastEditTime: 2020-12-11 15:34:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pangu\src\server\module\controller.ts
 */
import { BaseController } from '../base/baseController';
import { xxxxService, xxxx_service } from './service'

export default class xxxxController extends BaseController<xxxxService> {
    constructor() {
        super(xxxx_service)
    }
    
}
 