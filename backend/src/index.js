const express = require('express')
const app = express()
const port = 3000

/*
* API which returns hello world
*/
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Backend is listening on port ${port}`)
})