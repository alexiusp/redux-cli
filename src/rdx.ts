#!/usr/bin/env node
'use strict';
import * as commander from 'commander';

import init from './rdx-init';

const VERSION = '0.0.1';

console.log(`redux-cli v. ${VERSION} - redux boilerplate generator`);

const cli = commander
  .version(`${VERSION}`, '-v, --version')
  .description('redux boilerplate generator');

cli.command('init')
  .alias('i')
  .description('initialize current folder with redux-cli config')
  .option('-y, --ytoall', 'answer "yes" to all questions')
  .action(init);

cli.parse(process.argv);

if (cli.args.length === 0) cli.help();
