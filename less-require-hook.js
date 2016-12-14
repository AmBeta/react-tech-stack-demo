var less = require('less');

module.exports = function processLess(data, filename) {
  var result;
  less.render(data, {}, function (error, output) {
    result = output.css;
  });
  return result.toString('utf8');
};
