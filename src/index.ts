#!/usr/bin/env node

import * as readline from 'node:readline';

import apiKeyIsSet from './utils/apiKeyIsSet.js';
import ask from './commands/ask.js';

if (!apiKeyIsSet()) process.exit(1);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.prompt();

rl.on('line', async (input) => {
  await ask(input);
  rl.prompt();
});

rl.on('close', () => {
  process.stdout.write('See ya!');
  process.exit(0);
});
