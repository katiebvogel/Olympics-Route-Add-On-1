var router = require('olympian').Router();

var boadie = ['Casey Eichfeld'  ,'Maggie Hogan'  ,'Devin McEwan' ,'Ashley Nee', 'Michael Smolen'];
var boadieOrigin = ['Drums, Pennsylvania', 'Huntington Beach, California', 'Salisbury, Conneticut', 'Darnestown, Maryland', 'Gastonia, North Carolina'];

router.get('/', function(request, response){
  response.send('Please use /boadie and /boadieOrigin, thanks!');
});

router.get('/boadie', function(request, response){
  response.send(boadie);
});

router.get('/boadieOrigin', function(request, response){
  response.send(boadieOrigin);
});

router.get('/both', function(request, response){
  var total = boadie.concat(boadieOrigin);
  response.send(total);
});

router.post('/add', function(request, response){
  console.log(request.body);

  var data = request.body;

  if(data.type === 'boadie'){
    data.push(boadie.boadieName);
    response.sendStatus(200);
  } else if(data.type === 'boadieOrigin') {
    data.push(boadieOrigin.boadieOriginName);
    response.sendStatus(200);
  } else {
    response.sendStatus(500);
  }

});

module.exports = router;
