/**
 * Created by tqcenglish on 3/8/16.
 */
var pbxInfo = require('../');
console.log(pbxInfo.systemInfo.uptime());
console.log(pbxInfo.systemInfo.totalmem());
console.log(pbxInfo.systemInfo.freemem());

console.log(pbxInfo.webInfo.uptime());


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
