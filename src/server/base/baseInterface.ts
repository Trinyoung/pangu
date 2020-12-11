/*
 * @Author: your name
 * @Date: 2020-12-11 09:18:03
 * @LastEditTime: 2020-12-11 09:24:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pangu\server\base\baseInterface.ts
 */
import { Document } from "mongoose";

export interface BaseInterface extends Document{
  updatedAt?: number,
  updatedBy?: string,
  is_deleted?: number,
  createdAt?: number,
  createdBy?: string
}

export interface playLoadInterface {
  exp: number,
  username: string
}

export interface populateInterface {
  path: string,
  match?: Object,
  select?: string,
  options?: { limit: number }
}