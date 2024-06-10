// Create web server
// Create a web server that listens for requests on port 3000 and responds with a simple message. The server should be created using the http module.
const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello World');
  res.end();
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
// Path: comments.js
// Create a web server that listens for requests on port 3000 and responds with a simple message. The server should be created using the express module.
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
// Path: comments.js
// Create a web server that listens for requests on port 3000 and responds with a simple message. The server should be created using the koa module.
const Koa = require('koa');
const app = new Koa();

app.use((ctx) => {
  ctx.body = 'Hello World';
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
// Path: comments.js
// Create a web server that listens for requests on port 3000 and responds with a simple message. The server should be created using the hapi module.
const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Hello World';
    },
  });

  await server.start();
  console.log('Server is running on %s', server.info.uri);
};

init();
// Path: comments.js
// Create a web server that listens for requests on port 3000 and responds with a simple message. The server should be created using the fastify module.
const fastify = require('fastify')({ logger: true });

fastify.get('/', async (request, reply) => {
  return 'Hello World';
});

fastify.listen(3000, (err, address) => {
  if (err) {
    fastify.log.error
