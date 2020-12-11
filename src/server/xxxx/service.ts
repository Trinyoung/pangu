/*
 * @Author: your name
 * @Date: 2020-12-11 14:24:49
 * @LastEditTime: 2020-12-11 15:28:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pangu\src\server\module\service.ts
 */
import { BaseService } from '../base/baseService';
import { xxxxInterface } from './interface';
import { xxxxModel } from './model';
export class xxxxService extends BaseService<xxxxInterface> {
    constructor() {
        super(xxxxModel)
    }
}

export const xxxx_service = new xxxxService();