var less = require('less');

module.exports = function processLess(data, filename) {
  var result;
  less.render(data, {
    filename: filename, // https://github.com/less/less.js/issues/2342
    syncImport: true,   // https://github.com/less/less.js/issues/2546
  }, function (error, output) {
    result = output.css;
  });
  return result.toString('utf8');
};
