const http = require('http')
const fs = require('fs')
const path = require('path')

require("dotenv").config()



const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        fs.readFile(path.join(__dirname, 'pages', 'login.html'),{},(err,content)=>{
            res.writeHead(200,{'content-type':'text/html'})
            res.end(content)
        })
    }
    else if(req.url == "/signup"){
        fs.readFile(path.join(__dirname, 'pages', 'signup.html'),{},(err,content)=>{
            res.writeHead(200,{'content-type':'text/html'})
            res.end(content)
        })
    }
    else if(req.url == "/dashboard"){
        fs.readFile(path.join(__dirname, 'pages', 'dashboard.html'),{},(err,content)=>{
            res.writeHead(200,{'content-type':'text/html'})
            res.end(content)
        })
    }else{
        res.writeHead(404,{'content-type':'text/html'})
            res.end('<h1>404 page not found <h1>')
    }
    

})


port = process.env.PORT || 5000

server.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})