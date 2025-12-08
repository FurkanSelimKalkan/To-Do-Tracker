const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
/*
* API which returns hello world
*/
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/echo/:text', (req, res) => {
  const text = req.params.text;
  res.send("Hallo " + text);
});

app.post('/echo', (req, res) => {
  const body = req.body;
  const text = body.text;
  res.json({
    message: 'You sent this text',
    text: text
  });
});

app.listen(port, () => {
  console.log(`Backend is listening on port ${port}`)
});