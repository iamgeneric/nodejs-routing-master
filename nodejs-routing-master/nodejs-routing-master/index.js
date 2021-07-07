
let http = require('http');
let fs = require('fs');

const hostname  = '127.0.0.1';
let port = 8000;


let handleRequest = (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

console.log(req.url);
//Routing to diffrent pages on the repo

let path = './';
let a = req.url;

//routing for Home/index.html
if (a === '/' || a === '/home'){
   path  += 'index.html';
//routing for contact.html
}else if (a === '/contact'){
   path  += 'contact.html';
//routing for about.html
}else if (a === '/about'){
   path  += 'about.html';
//routing for error
}else {
   path  += 'error.html';
}

    fs.readFile(path, (err, data) =>{
        if (err) {
   console.log(err)
        } else {
            res.write(data);
        }
        res.end();
    });
};
 
http.createServer(handleRequest).listen(8000);
console.log(`Server is running at ${hostname}:${port}`)
