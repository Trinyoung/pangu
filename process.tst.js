/*
 * @Author: your name
 * @Date: 2020-12-11 10:48:24
 * @LastEditTime: 2020-12-11 14:08:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pangu\process.tst.js
 */
// console.log(process.argv);
console.log(process.env.NODE_ENV);
console.log(process.arch)
console.log(process.cwd());
console.log(process.pid, '------------>')
console.log(process.platform, '------------->');
console.log(process.stdout);
console.log(process.title,' --------------------->')
// const readline = require('readline');

// setInterval(()=>{
//     //删除光标所在行
//     readline.clearLine(process.stdout, 0);
//     //移动光标到行首
//     readline.cursorTo(process.stdout, 0,0)

//     process.stdout.write(new Date().toLocaleString(),'utf-8');
// },1000)