#!/usr/bin/env node
import init from './cli/init/index.js';
const args = process.argv.slice(2);
switch (args[0]) {
    case 'init':
        init(process.argv.slice(3));
        break;
    default:
        console.error(`Invalid command: ${args[0]}`);
        break;
}
