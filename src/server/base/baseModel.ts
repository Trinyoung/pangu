/*
 * @Author: your name
 * @Date: 2020-12-11 09:17:52
 * @LastEditTime: 2020-12-11 10:13:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pangu\server\base\baseModel.ts
 */
import db from '../../db/mongo';
import { Schema } from 'mongoose';
// import * as mongoosePaginate from 'mongoose-paginate';
// import * as uniqueValidator from 'mongoose-unique-validator';
// import { User } from './userInterface';

const xxxxSchema = new Schema({
    createdAt: { type: Number },
    is_deleted: { type: Number, required: true, enum: [0, 1], default: 0 },
    createdBy: { type: Number }
});

export const xxxxModel = db('reader', xxxxSchema);