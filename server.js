'use strict'

// Constants
const port = 8080

// App
const app = require('express')();

app.get('/', (req, res) => {
  res.send('Hello world!\n')
})

app.listen(port, () => {
  console.log(`Running on http://${hostname}:${port}`)
})
