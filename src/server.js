const express = require('express');
const server = express();
const port = 3000;

//set view engine
server.set('view engine');
//about page route
server.get('/',(req, res)  => {
  res.send('about')
});

server.listen(port, () => 
console.log('app now listening on port 3000' )
)