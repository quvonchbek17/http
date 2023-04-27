const http = require("http")

const server = http.createServer((req, res) => {
    let url = req.url
    if(url == "/"){
        res.end("ok")
    }
})


server.listen(3000, ()=> console.log("ishladi"))