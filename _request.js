var _Request = function(app, req){
  var bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({ extended: true}));
  var result = {};
  for (var prop in req.body) {
    result[prop]=req.body[prop];
  };
  for (var prop in req.query){
    result[prop] = req.query[prop];
  }
  for (var prop in req.params){
    result[prop] = req.params[prop];
  }
  return result; 
};
module.exports = _Request;