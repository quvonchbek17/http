const http = require("http")

const server = http.createServer((req, res) => {
    let url = req.url
    if(url == "/"){
        res.end("ok")
        
    }

    if(url == "/users"){
        res.end("users")
    }

    if(url == "/comments"){
        res.end("users")
    }
    

})


server.listen(3000, ()=> console.log("ishladi"))