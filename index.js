"use strict";
exports.__esModule = true;
var extension_1 = require("ts-auto-mock/extension");
extension_1.Provider.instance.provideMethodWithDeferredValue(function (_name, value) {
    return jest.fn().mockImplementation(value);
});
