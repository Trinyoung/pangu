/*
 * @Author: your name
 * @Date: 2020-12-11 14:24:49
 * @LastEditTime: 2020-12-15 20:26:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pangu\src\server\module\service.ts
 */
import { BaseService } from '../base/baseService';
import { XxxxInterface } from './interface';
import { xxxxModel } from './model';
export class XxxxService extends BaseService<XxxxInterface> {
    constructor() {
        super(xxxxModel)
    }
}

export const xxxx_service = new XxxxService();