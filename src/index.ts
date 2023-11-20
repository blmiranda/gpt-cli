#!/usr/bin/env node

import apiKeyIsSet from './utils/apiKeyIsSet.js';
import ask from './commands/ask.js';

if (!apiKeyIsSet()) process.exit(1);

const args = process.argv.slice(2);
const question = args[0];

ask(question);
