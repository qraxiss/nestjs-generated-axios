"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setApiConfig = void 0;
const OpenAPI_1 = require("./core/OpenAPI");
const setApiConfig = (config) => {
    Object.assign(OpenAPI_1.OpenAPI, config);
};
exports.setApiConfig = setApiConfig;
