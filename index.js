// 1 գրել ծրագիր որը կստեղծի սերվեր և կախված url-ի փոփոխությունից կլիենտին հետ կուղարկենք հետևյալ էջերը
// / <= Home page
// /profile <= user profile 
// /login <= logini ej 
// /products <= product ej
// mcaca url neri grelu depqum grel error 

// sayte sarqel pahpanelov rest API - i gaxapare

const http = require('http')
const fs = require('fs')

const server = http.createServer(function(request, response){
    if(request.url === '/'){
        fs.readFile('./index.html', 'utf-8',
            (err, data) => {
                response.writeHead(200, {'Content-Type' : 'text/html'})
                response.write(data)
                response.end()
        }
    )} else if(request.url === "/profile"){
        fs.readFile('./profile.json', 'utf-8',
            (err, data) => {
                response.writeHead(200, {'Content-Type' : 'application/json'})
                response.write(data)
                response.end()
        }
    )} else if(request.url === "/login"){
        fs.readFile('./login.html', 'utf-8',
            (err, data) => {
                response.writeHead(200, {'Content-Type' : 'text/html'})
                response.write(data)
                response.end()
        }
    )} else if(request.url === "/products"){
        fs.readFile('./products.html', 'utf-8',
            (err, data) => {
                response.writeHead(200, {'Content-Type' : 'text/html'})
                response.write(data)
                response.end()
        }
    )}  else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.write('Page not found');
        response.end();
    }
    })

server.listen(3003, () => console.log("server is running"))