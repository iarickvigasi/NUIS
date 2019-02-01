const fs = require('fs');
const path = require('path');
const url = require('url');
const http = require('http');

const createStaticServer = (serverPath, port) =>
  http
    .createServer((req, res) => {
      console.log(`${req.method} ${req.url}`);
      const parsedUrl = url.parse(req.url);

      let pathName = `${serverPath}/${parsedUrl.pathname}`;
      let { ext } = path.parse(pathName);

      if (ext.length === 0) {
        ext = '.html';
      }

      const map = {
        '.ico': 'image/x-icon',
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.wav': 'audio/wav',
        '.mp3': 'audio/mpeg',
        '.svg': 'image/svg+xml',
        '.pdf': 'application/pdf',
        '.doc': 'application/msword'
      };

      fs.exists(pathName, exists => {
        if (!exists) {
          res.statusCode = 404;
          res.end(`File ${pathName} not found!`);
          return;
        }

        if (fs.statSync(pathName).isDirectory()) {
          pathName += `/index${ext}`;
        }

        fs.readFile(pathName, (err, data) => {
          if (err) {
            res.statusCode = 500;
            res.end(`Error getting the file: ${err}.`);
          } else {
            res.setHeader('Content-type', map[ext] || 'text/plain');
            res.end(data);
          }
        });
      });
    })
    .listen(port);

const ServerControll = {
  server: null,
  runServer(serverPath, port) {
    this.server = createStaticServer(serverPath, port);
  },
  stopServer() {
    this.server.close();
    this.server = null;
  }
};

export default ServerControll;
