/*
 * @Author: your name
 * @Date: 2020-12-11 08:56:55
 * @LastEditTime: 2020-12-11 14:33:07
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \pangu\src\app.ts
 */
import * as fs from 'fs';
import * as path from 'path';

const result = fs.readFileSync(path.resolve(__dirname, './server/module/moduleModel.ts'));
let text = result.toString();
text = text.replace(/xxxx/g, 'user');
const writeStream = fs.createWriteStream(path.resolve(__dirname, '../output/user.ts'))
writeStream.on('open', () => {
    writeStream.write(text)
});
writeStream.on('error', (err) => {console.log(err)});
writeStream.on('finish', () => {console.log(true)})
console.log(text);

if (process.argv[0]) {
    
}