import { Command } from 'commander';

export default function config(command: Command) {
    console.log('initializing project...', command.opts());
}
