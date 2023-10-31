#!/usr/bin/env node;
import { askname } from '../src/cli.js';
import { game1 } from './brain-even.js';
import { game2 } from './brain-calc.js';
import { game3 } from './brain-gcd.js';
import { game4 } from './brain-progression.js';

console.log('Welcome to the Brain Games!');
const name = askname();
game1(name);
game2(name);
game3(name);
game4(name);