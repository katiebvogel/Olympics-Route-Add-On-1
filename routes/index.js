var router = require('express').Router();
var path = require('path');

router.get('/', function(request, response){
  //console.log(request);
  var createdPath = path.join(__dirname, '../public/views/index.html');
  console.log('This is what path makes', createdPath);
  response.sendFile(createdPath);
});

module.exports = router;
