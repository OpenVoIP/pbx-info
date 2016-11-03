/**
 * Created by tqcenglish on 3/8/16.
 */
var pbxInfo = require('../');

// 系统启动时间
console.log("系统启动持续时间 " + pbxInfo.systemInfo.uptime());

// 系统所有内存
console.log("系统所有内存 " + pbxInfo.systemInfo.totalmem());

// 
console.log("系统可用内存 " + pbxInfo.systemInfo.freemem());

// 查看应用启动时间
console.log("应用启动持续时间 " + pbxInfo.webInfo.uptime());

/*
console.log(pbxInfo.diskInfo.rootDiskInfo(function (err, out) {
    if (err) {
        console.log(err);
    } else {
        console.log(out);
    }
}));

console.log(pbxInfo.diskInfo.monitorDiskInfo(function (err, out) {
    if (err) {
        console.log(err);
    } else {
        console.log(out);
    }
}));
*/
