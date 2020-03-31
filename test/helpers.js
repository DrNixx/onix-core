require("@babel/register")({
    extends: './.babelrc',
    ignore: [],
});
// require("babel-polyfill");

import { expect } from 'chai';

global.expect = expect;
global.window = {};
