const http = require('http');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.contentType = 'plain/text';
  res.end('Hello GVTech School! ');
});
app.listen(1245, 'localhost', () => null);

module.exports = app;
