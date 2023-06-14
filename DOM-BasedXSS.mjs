import http from 'http';

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost:8000');
  
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>

  <body>
    <h1>${url.searchParams.get('name')}</h1>
  </body>

  </html>`;
  res.write(html);
  
});

server.listen(8000);