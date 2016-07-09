/**
 * Created by tqcenglish on 3/8/16.
 */
var utils = require('./utils');
module.exports = {
    rootDiskInfo: function (callback) {
        var rootDiskInfoCmd = "df -h | grep /dev/root";
        utils.shell(rootDiskInfoCmd, function (err, stdout) {
            if (stdout) {
                callback(err, stdout.split(/\s+/));
            } else {
                callback('stdout is empty');
            }
        });
    },
    monitorDiskInfo: function (callback) {
        var monitorDiskInfoCmd = "df -h | grep /var/spool/asterisk/monitor";
        utils.shell(monitorDiskInfoCmd, function (err, stdout) {
            if (stdout) {
                callback(err, stdout.split(/\s+/));
            } else {
                callback('stdout is empty');
            }
        });
    }
};
