
/////////////Dependences Server///////////////
var express = require("express"),
    app = express(),
    cp = require("child_process"),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    path = require('path'),
    fs = require("fs"),
    os = require("os");

    // create application/json parser
    var jsonParser = bodyParser.json()

    // create application/x-www-form-urlencoded parser
    var urlencodedParser = bodyParser.urlencoded({ extended: false })

    app.use(cors());

    app.use(express.static('public'));

app.get('/', function (req, res) {
        res.send('It\'s Working!');
});



app.post('/reproducir', function (req, res){
  var itemId = req.body;
  var comando = "mpg123 sonidos/sonidos-cardiacos/"+itemId;
  cp.exec(comando, function (err, stdout, stderr) {
      if (err) {
          res.send(JSON.stringify({ output: stderr }));
      } else {
        console.log(stdout);
        res.send(JSON.stringify({ output: stderr}));
      }
  });
});


// http://192.168.0.XX:3000/cabeza
/**app.post('/reproducir', function (req, res) {
 console.log('>>>> Reproduciendo <<<<');
  var selectedItemId = req.body.id;
  var comando = "mpg123 sonidos/sonidos-cardiacos/"+selectedItemId;
            cp.exec(comando, function (err, stdout, stderr) {
                if (err) {
                    res.send(JSON.stringify({ output: stderr }));
                } else {
                  console.log(stdout);
                  res.send(JSON.stringify({ output: stderr}));
                }
            });
});*/


// http://192.168.0.XX:3000/cabeza
app.post('/', function (req, res) {
 console.log('>>>> Corazon <<<<');
  var comando = "mpg123 Sonidos/biomedica/Normal-heart-sounds60bpm.mp3";
            cp.exec(comando, function (err, stdout, stderr) {
                if (err) {
                    res.send(JSON.stringify({ output: stderr }));
                } else {
                  console.log(stdout);
                  res.send(JSON.stringify({ output: stderr}));
                }
            });
});

app.listen(8101, function () {
  console.log('Server is running on >>> 8100 <<<');
});
