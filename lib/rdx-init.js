"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config/config");
function config(command) {
    console.log('initializing project...', command.opts());
    const defaultConfig = new config_1.default();
    console.log('default config:', JSON.stringify(defaultConfig));
}
exports.default = config;
//# sourceMappingURL=rdx-init.js.map