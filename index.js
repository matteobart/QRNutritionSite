const express = require('express')
const bodyParser = require("body-parser")
const axios = require('axios')
const jquery = require('jquery')

const file = require('./sendme.json')

const app = express()
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send(file)
})

app.listen(3005, () => {
   console.log("We’ve now got a server!");
   console.log("Your routes will be running on http:\/\/localhost:3005");
});