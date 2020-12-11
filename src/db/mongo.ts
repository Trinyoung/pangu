/*
 * @Author: your name
 * @Date: 2020-12-11 09:51:50
 * @LastEditTime: 2020-12-11 09:51:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pangu\src\db\mongo.ts
 */
import * as mongoose from 'mongoose';
const DB_URL = "mongodb://127.0.0.1/process";
let connectTimes = 0;
const connect = function () {
	connectTimes++;
	if (connectTimes > 5) {
		console.error(`connect mongodb connectTimes > 5`);
		setTimeout(() => {
			process.exit(1);
		}, 2000);
		return;
	}
	mongoose.set('useCreateIndex', true)
	mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false });
	mongoose.connection.on("connected", () => {
		console.info('connect mongodb successfully');
	});
	mongoose.connection.on("error", (error) => {
		console.error("connect mongodb failed", error);
	});
};
 //加上这个
// mongoose.connect(db, { useNewUrlParser: true })
connect();
mongoose.connection.on('disconnected', function () {
	connect();
});

export default mongoose.model;