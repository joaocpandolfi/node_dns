const express = require('express');
const app = express();
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var morgan = require("morgan")
var helmet = require("helmet")
var fs = require('fs');
var https = require('https');
var http = require('http')

const router = require('./routes');
const config = require('./configurations/constants')
const gf = require('./configurations/globalFunctions')


//Logs
app.use(morgan("common"))

// Security
app.use(helmet())

// Cookie parser
app.use(cookieParser())

// Body parser
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
}))
app.use(bodyParser.json({limit: '50mb'}));

app.use('/', router);


if(useHHTPS){
    // HTTPS
    var privateKey  = fs.readFileSync(config.SSL.Key, 'utf8');
    var certificate = fs.readFileSync(config.SSL.Cert, 'utf8');
    var credentials = {key: privateKey, cert: certificate};

    // Listen server
    var httpsServer = https.createServer(credentials, app);

    // HTTPS
    httpsServer.listen(config.Ports.https, function () {
        console.log(`Listening HTTPS at: ${config.Ports.https}`)
    });

    // HTTP
    http.createServer(function (req, res) {
        res.writeHead(301, { "Location": "https://" + req.headers['host'].replace("www.","") + req.url });
        res.end();
    }).listen(config.Ports.http, () =>{
        console.log(`Listening HTTP at: ${config.Ports.http} and redirect to HTTPS`)
    });

    app.use('/',router)
}else{
    http.createServer(app).listen(config.Ports.http, () =>{
        console.log(`Listening HTTP at: ${config.Ports.http}`)
    });
}