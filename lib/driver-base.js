/* ================================================================
 * driver-base by xdf(xudafeng[at]126.com)
 *
 * first created at : Mon Feb 29 2016 20:05:25 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright  xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

'use strict';

const errors = require('webdriver-dfn-error-code').errors;

function DriverBase() {
}

DriverBase.prototype.startDevice = function() {
  throw errors.UnknownError();
};

DriverBase.prototype.stopDevice = function() {
  throw errors.UnknownError();
};

DriverBase.prototype.whiteList = function() {
  throw errors.UnknownError();
};

DriverBase.prototype.isProxy = function() {
  throw errors.UnknownError();
};

module.exports = DriverBase;
