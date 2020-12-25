/* 
async 将方法定义为异步
await 等待方法执行完成并获取其返回的promise
*/

var fs = require('fs');
var filedir = [];

/* 判断给定路径是否是目录 */
let isDir = path => {
    return new Promise(
        (resolve, reject) => {
            fs.stat(path, (error, stats) => {
                if (error) {
                    console.log(error);
                    reject(error);
                }

                if (stats.isDirectory()) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
        }
    )
}

/* 获取所有文件 */
const getfile =  (path) => {
    return new Promise((resolve, reject) => {
        fs.readdir(path, async (err, data) => {
            if (err) {
                console.log(`异常信息`);
                reject(err);
            } else {
                for (let index = 0; index < data.length; index++) {
                    //console.log(path+'/'+data[index]);
                    filedir.push(path+'/'+data[index]);
                    if (await isDir(path+'/'+data[index])) {
                        await getfile(path+'/'+data[index]);
                    }
                    
                }
                resolve(filedir)
            }
        })
    })
}

/* 入口 */
const main = async () => {
    console.log(`开始`);
    var data = await getfile('/home/ysh/gitwork')
    console.log(data);
    console.log(`结束`);

}

main();

