const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const cors = require("cors");
const PORT = process.env.PORT || 3000;


app.use(cors())
app.use(express.json());

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

router.get('/img', function(req,res){
  res.json({url_img : "https://curriculoghabriel.herokuapp.com/img/foto.jpg"})
});

app.use('/', router);
app.listen(PORT);

console.log('Running at Port 3000');