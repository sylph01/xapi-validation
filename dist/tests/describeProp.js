"use strict";
require("mocha");
var lodash_1 = require("lodash");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (missingValid, description) {
    return function (prop, describer, validData, test) {
        it(description + " " + prop, function () {
            return test(lodash_1.omit(validData, prop), missingValid);
        });
        describe(prop, function () {
            describer(function (value, valid) {
                return test(Object.assign({}, validData, (_a = {}, _a[prop] = value, _a)), valid);
                var _a;
            });
        });
    };
};