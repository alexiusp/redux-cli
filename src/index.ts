#!/usr/bin/env node
'use strict';

import * as commander from 'commander';

console.log('redux-cli init...');
commander.version('0.0.1', '-v, --version').parse(process.argv);
