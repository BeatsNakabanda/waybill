const jsonServer = require("json-server");
const favicon = require('express-favicon');
const server = jsonServer.create();
const router = jsonServer.router("src/data/db.json");
const middlewares = jsonServer.defaults({ static: "./build"});
const port = process.env.PORT || 3000;

server.use(favicon(__dirname + '/public/favicon.ico'))
server.use(middlewares);
server.use(router);

server.listen(port);

