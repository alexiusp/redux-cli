import { Command } from 'commander';
import * as fs from 'fs';
import Config from './config/config';

export default function config(command: Command) {
  console.log('initializing project...', command.opts());
  const defaultConfig = new Config();
  console.log('default config:', JSON.stringify(defaultConfig));
}
