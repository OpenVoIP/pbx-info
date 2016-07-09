/**
 * Created by tqcenglish on 3/8/16.
 */
module.exports = {
    hhmmss: function HHMMSS(time) {
        var sec_num = parseInt(time, 10); // don't forget the second param
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        var time = hours + ':' + minutes + ':' + seconds;
        return time;
    },

    formatBytes: function formatBytes(bytes, decimals) {
        if (bytes == 0) return '0 Byte';
        var k = 1024;
        var dm = decimals + 1 || 3;
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    },
    shell: function shell(cmd, callback) {
        var exec = require('child_process').exec;
        exec(cmd, function (error, stdout, stderr) {
            if (error) {
                return callback(error);
            }

            if (stderr) {
                return callback(new Error(stderr));
            }
            callback(null, stdout);
        });
    }
}
;
