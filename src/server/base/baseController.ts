/*
 * @Author: your name
 * @Date: 2020-12-11 09:17:19
 * @LastEditTime: 2020-12-11 18:26:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pangu\server\base\baseController.ts
 */

import { ParameterizedContext } from 'koa';
import { BaseService } from './baseService';
import { BaseInterface } from './baseInterface';
import { Logger } from '../logger/config';
import * as _ from 'lodash'
export class BaseController<T extends BaseService<BaseInterface>>{
    constructor(public service: T) {
        this.service = service;
    }

    public async create(ctx: ParameterizedContext) {
        try {
            const { body } = ctx.request;
            const user = ctx.user;
            const result = await this.service.createItem(user.uid, body);
            ctx.body = { code: '000', result };
        } catch (err) {
            Logger.error('create error：', err.message);
            return ctx.body = { code: '999', err };
        }
    }

    public async delete(ctx: ParameterizedContext) {
        try {
            const query = Object.assign(ctx.query, ctx.params, ctx.request.body);
            const user = ctx.user;
            await this.service.updateItem(user._id, { is_deleted: 1 }, query);
            return ctx.body = { code: '000', result: '删除成功' };
        } catch (err) {
            Logger.info('update Error:', err.message);
            return ctx.body = { code: '999', err };
        }

    }

    public async getOne(ctx: ParameterizedContext) {
        try {
            const query = Object.assign({}, ctx.query, ctx.params, ctx.request.body);
            const result = await this.service.getItem(query);
            return ctx.body = { code: '000', result };
        } catch (err) {
            Logger.info('get error:', err.message);
            return ctx.body = { code: '999', err };
        }
    }

    public async getList(ctx: ParameterizedContext) {
        try {
            console.log('get list is here')
            const query = Object.assign({}, ctx.query, ctx.params, ctx.request.body);
            const result = await this.service.getList(query);
            return ctx.body = { code: '000', result };
        } catch (err) {
            Logger.info('get List error:', err.message);
            return ctx.body = { code: '999', err };
        }
    }

    public async getListByPage(ctx: ParameterizedContext) {
        try {
            const params = Object.assign({ page: 1, limit: 10 }, ctx.query, ctx.params, ctx.request.body);
            const query = _.omit(params, ['limit', 'page']);
            const result = await this.service.getListByPage(query, Number(params.limit), Number(params.page));
            return ctx.body = { code: '000', result };
        } catch (err) {
            Logger.info('getListByPage error：', err.message);
            return ctx.body = { code: '999', err };
        }
    }

    public async updateItem(ctx: ParameterizedContext) {
        try {
            const query = Object.assign({}, ctx.params, ctx.query);
            const condition = Object.assign({}, ctx.request.body);
            const result = await this.service.updateItem(ctx.user.uid, condition, query);
            return ctx.body = { code: '000', result }
        } catch (err) {
            Logger.error('update item error：', err.message);
            return ctx.body = { code: '999', err };
        }
    }

    public async findOneAndUpdate(ctx: ParameterizedContext) {
        try {
            const query = Object.assign({}, ctx.params, ctx.query);
            const condition = Object.assign({}, ctx.request.body);
            const result = await this.service.findOneAndUpdateItem(ctx.user._id, query, condition);
            return ctx.body = { code: '000', result };
        } catch (err) {
            Logger.error('update item error：', err.message);
            return ctx.body = { code: '999', err }
        }
    }

    public async getCount(ctx: ParameterizedContext) {
        try {
            const query = Object.assign({}, ctx.params, ctx.query, ctx.request.body);
            const result = await this.service.getCount(query);
            return ctx.body = { code: '000', result };
        } catch (err) {
            Logger.error('getCount error：', err.message);
            return ctx.body = { code: '999', err };
        }
    }
}    