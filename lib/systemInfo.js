"use strict";
var os = require('os');
var utils = require('./utils');
module.exports = {
    uptime: function () {
        return utils.hhmmss(os.uptime());
    }, totalmem: function () {
        return utils.formatBytes(os.totalmem())
    }, freemem: function () {
        return utils.formatBytes(os.freemem())
    }
};