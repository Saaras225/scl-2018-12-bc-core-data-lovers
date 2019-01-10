global.window = global;
global.assert = require('chai').assert;

require('../src/data.js');
require('../src/data/lol/lol.js');
require('./data.spec.js');
