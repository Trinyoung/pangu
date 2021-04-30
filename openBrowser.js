/*
 * @Author: your name
 * @Date: 2020-12-11 14:54:42
 * @LastEditTime: 2021-04-30 10:02:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pangu\openBrowser.js
 */
var child_process = require("child_process");

var url = "http://127.0.0.1",
      port=8080,
      cmd = '';
// console.log(process.platform,'------------------------>');
switch (process.platform) {
    case 'win32':
        // console.log('=====================><==================')
        cmd = 'start';
        break;

    case 'linux':
        cmd = 'xdg-open';
        break;

    case 'darwin':
        cmd = 'open';
        break;
}

child_process.exec(cmd + ' ' + url + ':' + port);