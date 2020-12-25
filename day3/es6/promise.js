
//es6的promise
if (true) {
    let getpwd = (name) => {
        return new Promise(
            (resovle, reject) => {
                setTimeout(() => {
                    if (name == '张三') {
                        reject(`${name}这是异常信息`)
                    } else {
                        resovle(`${name}成功了`)
                    }
                }, 1000);
            }
        );
    }

    let p1 = getpwd('里斯');
    let p = getpwd('张三');


    let pAll = Promise.all([p1, p])

    pAll.catch((error) => {
        //console.log(`捕獲到了異常信息${error}`);
    })

    pAll.then(
        result => {
            console.log(`${result}`);
        },
        err => {
            console.log(`${err}`);
        }
    )

}