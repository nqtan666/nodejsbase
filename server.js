
const   http = require('http');
const server = http.createServer((req,res) => {
    console.log('run request.....');
    res.setHeader('Content-Type','text/html');
    res.write('<h2>Hello Node Js</h2>')
    res.write('<h3>Nguyen Quoc Tan</h3>')
    res.end();
})

server.listen(3000,'localhost',()=>{
    console.log('Nodejs run port 3000')
})