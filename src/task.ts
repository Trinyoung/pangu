/*
 * @Author: your name
 * @Date: 2020-12-11 08:56:55
 * @LastEditTime: 2020-12-15 19:59:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pangu\src\app.ts
 */
import * as fs from 'fs';
import * as path from 'path';
export class HandleFiles {
    public init({ sqlOption, libraryType = '', withLogger, withCache }, moduleNames?: string[]) {
        if (moduleNames && moduleNames.length > 0) {
            this.createModules(moduleNames);
        }
        this.createDBFile(sqlOption);
        fs.mkdirSync('../output/server', { recursive: true });
        if (withLogger) {
            fs.mkdirSync(path.resolve(__dirname, '../output/logger'), { recursive: true });
            this.createFile('./server/logger/config.ts', '../output/logger/config.ts');
        }
        if (withCache) {
            this.createFile('./server/db/cacheHelper.ts', '../output/db/cacheHelper.ts');
        }

        this.createFile('./server/app.ts', '../output/app.ts');
        
        fs.mkdirSync(path.resolve(__dirname, '../output/server/base'), { recursive: true });
        this.createFile('./server/base/baseController.ts', '../output/server/base/baseController.ts');
        this.createFile('./server/base/baseInterface.ts', '../output/server/base/baseInterface.ts');
        this.createFile('./server/base/baseService.ts', '../output/server/base/baseService.ts');
    }

    public createDBFile(sqlOption) {
        fs.mkdirSync(path.resolve(__dirname, `../output/db`), { recursive: true });
        const fileBuffer = fs.readFileSync(path.resolve(__dirname, `./server/db/${sqlOption.type}.ts`));
        let text = fileBuffer.toString();
        text = text.replace(new RegExp('username', 'g'), sqlOption.username);
        text = text.replace(new RegExp('password', 'g'), sqlOption.password);
        text = text.replace(new RegExp('host', 'g'), sqlOption.host);
        text = text.replace(new RegExp('PORT', 'g'), sqlOption.port);
        const fileStream = fs.createWriteStream(path.resolve(__dirname, `../output/db/${sqlOption.type}.ts`));
        fileStream.on('open', () => {
            fileStream.write(text);
        });
    }

    public createModules(moduleNames: string[]) {
        for (let moduleName of moduleNames) {
            const modelFile = fs.readFileSync(path.resolve(__dirname, './server/xxxx/model.ts'));
            const controllerFile = fs.readFileSync(path.resolve(__dirname, './server/xxxx/controller.ts'));
            const serviceFile = fs.readFileSync(path.resolve(__dirname, './server/xxxx/service.ts'));
            const routerFile = fs.readFileSync(path.resolve(__dirname, './server/xxxx/router.ts'));
            
            Promise.all([
                this.createFiles(modelFile, moduleName, 'model'),
                this.createFiles(controllerFile, moduleName, 'controller'),
                this.createFiles(serviceFile, moduleName, 'service'),
                this.createFiles(routerFile, moduleName, 'router')
            ]);
        }
        const appendRouterFile = fs.readFileSync(path.resolve(__dirname, './server/router.ts'));
        this.appendRouter(appendRouterFile, moduleNames)
    }
    public createFile(from, to) {
        const fileBuffer = fs.readFileSync(path.resolve(__dirname, from));
        const fileStream = fs.createWriteStream(path.resolve(__dirname, to));
        let text = fileBuffer.toString();
        fileStream.on('open', () => {
            fileStream.write(text);
        });
    }

    private createFiles(buffer, moduleName, bussiness) {
        let text = buffer.toString();
        text = text.replace(/xxxx/g, moduleName);
        const dir = fs.mkdirSync(path.resolve(__dirname, `../output/server/${moduleName}`), { recursive: true });
        const fileStream = fs.createWriteStream(path.resolve(__dirname, `../output/server/${moduleName}/${bussiness}.ts`));
        fileStream.on('open', () => {
            fileStream.write(text)
        });
        fileStream.on('error', (err) => { console.log(err) });
        fileStream.on('finish', () => { console.log(true) })
    }

    private appendRouter(buffer, moduleNames) {
        let text = buffer.toString();
        for (let moduleName of moduleNames) {
            text = text.replace(/\/\/ [\*]{4}/g, `import ${moduleName}Router from './server/${moduleName}/router'; \n// ****`);
            text = text.replace(/\/\/ [\+]{4}/g, `${moduleName}Router(router); \n    // ++++`);
        }
        const fileStream = fs.createWriteStream(path.resolve(__dirname, `../output/router.ts`));
        fileStream.on('open', () => {
            console.log(text, '--------------------->')
            fileStream.write(text);
        });
        fileStream.on('error', (err) => { console.log(err) });
        fileStream.on('finish', () => { console.log(true) });
    }
}

const projectInit = new HandleFiles();
const sqlOption = {
    username: 'lqy',
    password: '987654321q',
    host: '127.0.0.1',
    port: '6217',
    type: 'mongo'
};
projectInit.init({ sqlOption, withLogger: true, withCache: true }, ['user', 'article', 'comment']);