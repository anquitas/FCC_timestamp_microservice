// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const { check_time, current_time } = require('./time_module');

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/home.html');
});





// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


// ROUTE: '/api' -> return current time info as json object
app.get(
  '/api',
  (rq,rs) => {
    rs.json(current_time()) // send current time object as a http response
  }
)

// ROUTE: '/api/:timestamp' -> return time info as json object based on the given parameter or error object
app.get(
  '/api/:timestamp',
  (rq, rs) => {
    const timestamp = rq.params.timestamp // get the defined param from the request body
    rs.json(check_time(timestamp)) // send http response based on input
  }
)

app.get('/info', (req, res) => {
  const info = {
    name: 'fcc-timestamp-microservice',
    author: 'anquitas',
    description: 'Handles user authentication and profile management',
    processInfo: {
      status: 'OK',
      uptime: process.uptime(),
      memoryUsage: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB`
    },
    buildInfo: {
      version: '0.0.6',
      buildNumber: '2023-09-01'
    }
};
  
  res.json(info);
});



// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
