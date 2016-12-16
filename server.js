'use strict'

// Constants
const PORT = 8080

// App
const app = require('express')();

app.get('/', (req, res) => {
  res.send('Hello world!\n')
})

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`)
})
