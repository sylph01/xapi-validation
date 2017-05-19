"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
var factory_1 = require("../factory");
exports.default = rulr_1.restrictToSchema({
    usageType: rulr_1.required(factory_1.iri),
    display: rulr_1.required(factory_1.languageMap),
    description: rulr_1.optional(factory_1.languageMap),
    contentType: rulr_1.required(factory_1.imt),
    length: rulr_1.required(factory_1.integerValue),
    sha2: rulr_1.required(factory_1.stringValue),
    fileUrl: rulr_1.optional(factory_1.iri),
});
