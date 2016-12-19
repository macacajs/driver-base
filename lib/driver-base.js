'use strict';

const errors = require('webdriver-dfn-error-code').errors;


function DriverBase() {
}

DriverBase.prototype.startDevice = function() {
  throw new errors.UnknownError();
};

DriverBase.prototype.stopDevice = function() {
  throw new errors.UnknownError();
};

DriverBase.prototype.whiteList = function() {
  throw new errors.UnknownError();
};

DriverBase.prototype.isProxy = function() {
  throw new errors.UnknownError();
};

DriverBase.prototype.proxyCommand = function() {
  throw new errors.UnknownError();
};

DriverBase.prototype.acceptAlert = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.dismissAlert = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.alertText = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.alertKeys = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.getContext = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.getContexts = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.setContext = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.click = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.getText = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.clearText = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.setValue = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.findElement = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.findElements = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.getAttribute = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.getComputedCss = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.getRect = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.isDisplayed = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.execute = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.getScreenshot = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.getSource = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.title = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.url = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.getUrl = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.forward = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.back = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.refresh = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.getWindow = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.getWindows = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.getWindowSize = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.setWindowSize = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.maximize = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.setWindow = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.deleteWindow = function() {
  throw new errors.NotImplementedError();
};

DriverBase.prototype.handleActions = function() {
  throw new errors.NotImplementedError();
};

module.exports = DriverBase;
