#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const commander = require("commander");
const rdx_init_1 = require("./rdx-init");
const VERSION = '0.0.1';
console.log(`redux-cli v. ${VERSION} - redux boilerplate generator`);
const cli = commander
    .version(`${VERSION}`, '-v, --version')
    .description('redux boilerplate generator');
cli.command('init')
    .alias('i')
    .description('initialize current folder with redux-cli config')
    .option('-y, --ytoall', 'answer "yes" to all questions')
    .action(rdx_init_1.default);
cli.parse(process.argv);
if (cli.args.length === 0)
    cli.help();
//# sourceMappingURL=rdx.js.map