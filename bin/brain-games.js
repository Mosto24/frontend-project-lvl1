#!/usr/bin/env node;
import { askname } from '../src/cli.js';
import { game1 } from './brain-even.js';

console.log('Welcome to the Brain Games!');
const name = askname();
game1(name);