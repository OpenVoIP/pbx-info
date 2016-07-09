/**
 * Created by tqcenglish on 3/8/16.
 */
"use strict";
var utils = require('./utils');
module.exports = {
    uptime: function () {
        return utils.hhmmss(process.uptime());
    }
};