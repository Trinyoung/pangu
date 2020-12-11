/*
 * @Author: your name
 * @Date: 2020-12-11 08:56:55
 * @LastEditTime: 2020-12-11 19:27:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pangu\src\app.ts
 */
import * as fs from 'fs';

import * as path from 'path';


export class handleFiles {
    public init ({sqlType, libraryType, withLogger, withCache}, moduleNames?: string[]) {
        if (moduleNames && moduleNames.length > 0) {
            this.createModules(moduleNames);
        }
        if (withLogger) {
            fs.copyFileSync('./server/logger/config.ts', '../output/server/logger/config.ts');
        }
        if (withCache) {
            fs.copyFileSync('./server/db/cacheHelper.ts', '../output/server/db/cacheHelper.ts');
        }
        fs.copyFileSync('./server/app.ts', '../output/server/app.ts');
        fs.copyFileSync('./server/router.ts', '../output/server/router.ts');
        fs.copyFileSync('./server/base/baseController.ts', '../output/server/baseController.ts');
        fs.copyFileSync('./server/base/baseInterface.ts', '../output/server/baseInterface.ts');
        fs.copyFileSync('./server/base/baseService.ts', '../output/server/baseService.ts');
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
    }
    
    private createFiles (buffer, moduleName, bussiness) {
        let text = buffer.toString();
        text = text.replace(/xxxx/g, moduleName);
        const fileStream = fs.createWriteStream(path.resolve(__dirname, `../output/server/${moduleName}/${bussiness}.ts`));
        fileStream.on('open', () => {
            fileStream.write(text)
        });
        fileStream.on('error', (err) => { console.log(err) });
        fileStream.on('finish', () => { console.log(true) })
    }
}