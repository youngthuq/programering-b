console.log('jeg er en node server')

const express = require('express')
const app = express()
const mqtt = require('mqtt')
const client  = mqtt.connect('wss://mqtt.nextservices.dk')

client.on('connect', function () {
  console.log('connected')
  client.subscribe('programmering')
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  //client.end()
})

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)