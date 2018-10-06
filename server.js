const jsonServer = require('json-server');
const server = jsonServer.create();
const datajson = require("./db.js");
const router = jsonServer.router(datajson());
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port, function(){
    console.log(`App started and listening on ${ port }`); 
});
