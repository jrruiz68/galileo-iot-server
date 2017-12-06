
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



/**app.post('/reproducir', function (req, res){
  var comando = "mpg123 sonidos/sonidos-cardiacos/Aneurisma-Seno-Valsalva.mp3";
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
app.post('/reproducir', function (req, res) {
 console.log('>>>> Reproduciendo <<<<');
  var comando = "mpg123 sonidos/sonidos-cardiacos/Aneurisma-Seno-Valsalva.mp3";
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
app.post('/detener', function (req, res) {
 console.log('>>>> Deteniendo <<<<');
  var cmdOptions = "-v";
            cp.exec(cmdOptions, function (err, stdout, stderr) {
                if (err) {
                    res.send(JSON.stringify({ output: stderr }));
                } else {
                  console.log(stdout);
                  res.send(JSON.stringify({ output: stderr}));
                }
            });
            var comando = "q";
                      cp.exec(comando, function (err, stdout, stderr) {
                          if (err) {
                              res.send(JSON.stringify({ output: stderr }));
                          } else {
                            console.log(stdout);
                            res.send(JSON.stringify({ output: stderr}));
                          }
            });
});

app.post('/pausar', function (req, res) {
 console.log('>>>> Deteniendo <<<<');
  var comando = "pkill mpg123";
            cp.exec(comando, function (err, stdout, stderr) {
                if (err) {
                    res.send(JSON.stringify({ output: stderr }));
                } else {
                  console.log(stdout);
                  res.send(JSON.stringify({ output: stderr}));
                }
            });
});

app.post('/repetir', function (req, res) {
 console.log('>>>> Deteniendo <<<<');
  var comando = "pkill mpg123";
            cp.exec(comando, function (err, stdout, stderr) {
                if (err) {
                    res.send(JSON.stringify({ output: stderr }));
                } else {
                  console.log(stdout);
                  res.send(JSON.stringify({ output: stderr}));
                }
            });
});

app.listen(8102, function () {
  console.log('Server is running on >>> 8100 <<<');
});
