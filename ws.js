const path = require('path');
const app = require('express')();
const ws = require('express-ws')(app);

app.get('/', (req, res) => {
  console.error('express connection');
  res.sendFile(path.join(__dirname, 'ws.html'));
});

app.ws('/', (s) => {
  console.error('websocket connection');
  setInterval(() => {
    s.send('message from server', () => {});
  }, 10000);
});
app.listen(3000, () => console.error('listening on http://localhost:3000/'));
console.log('websocket example');
