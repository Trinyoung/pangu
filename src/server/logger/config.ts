/*
 * @Author: your name
 * @Date: 2020-12-11 16:04:12
 * @LastEditTime: 2020-12-15 15:59:15
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \pangu\src\server\logger\config.ts
 */
import * as log4js from 'log4js';

log4js.configure({
	appenders: {
		process: { type: 'console', filename: '../logs/access' },
		error: {
			type: 'file',
			filename: 'logs/process_error',
			alwaysIncludePattern: true,
			pattern: '-yyyy-MM-dd.log',
			layout: {
				type: 'pattern',
				pattern: '[%d] [%p] - %m'
			}
		},
		access: {
			type: 'file',
			filename: 'logs/process_access',
			alwaysIncludePattern: true,
			pattern: '-yyyy-MM-dd.log',
			layout: {
				type: 'pattern',
				pattern: '[%d] [%p] - %m'
			}
		},
	},
	categories: {
		default: { appenders: ['access', 'process'], level: 'debug' },
		err: { appenders: ['error', 'process'], level: 'error' },
		access: { appenders: ['access'], level: 'debug' }
	}
});


export const Logger = log4js.getLogger();