const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      const text = body.trim();
      if (text === 'Привет, сервер!') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Привет, клиент!');
      } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Неизвестный запрос');
      }
    });
  } else {
    res.writeHead(405, {'Content-Type': 'text/html'});
    res.end('<html><head><title>405 Not Allowed</title></head><body bgcolor="white"><center><h1>405 Not Allowed</h1></center></body></html>');
  }
});

server.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});