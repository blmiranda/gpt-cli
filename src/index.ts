#!/usr/bin/env node

import apiKeyIsSet from './utils/apiKeyIsSet.js';
import getArgs from './utils/getArgs.js';
import ask from './commands/ask.js';

if (!apiKeyIsSet()) process.exit(1);

const args = getArgs();
const question = args[0];

ask(question);
