const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


app.use(express.static('public'))
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/curr', function(req, res){
  res.sendFile(path.join(__dirname+'/curriculo1.html'));
});

router.get('/curr2', function(req, res){
  res.sendFile(path.join(__dirname+'/curriculo2.html'));
});

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');