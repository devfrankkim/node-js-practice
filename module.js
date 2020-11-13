// Need to add "type":"module"; 
// to package.json for new syntax.
import {largeNumber} from './module2.js';

const a = largeNumber;
const b = 'Hello ES6';

/*
    <Common JS>

    const module2 = require('./module2'); // file path
    const a = module2.largeNumber;
    const b = 'Hello ES6';
*/