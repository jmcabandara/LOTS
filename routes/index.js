'use strict';

var lots = require('../handlers/lots');
var hifile = require('../handlers/hifile');

module.exports = [{
  method: 'GET',
  path: '/favicon.ico',
  handler: {
    file: './public/img/lots.png'
  }
}, {
  method: 'GET',
  path: '/',
  config: {
    handler: lots.cache
  }
}, {
  method: 'GET',
  path: '/lots',
  config: {
    handler: lots.generate
  }
}, {
  method: 'GET',
  path: '/view/{file*}',
  config: {
    handler: hifile.view
  }
}];
