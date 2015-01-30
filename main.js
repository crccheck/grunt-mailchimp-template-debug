'use strict';
// TODO pull this in as a parameter
var name = 'something';

var fs = require('fs');
var jsdom = require('jsdom');

var template = fs.readFileSync(name, 'utf8');


jsdom.env(template, function (error, window) {
  var $ = require('jquery')(window);
  $('[mc\\:edit]').each(function (idx, chunk){
    var $chunk = $(chunk);
    console.log($chunk.attr('mc:edit'));
    // if file exits, load each file and replace the innerHTML
  });
});
