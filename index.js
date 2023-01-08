const http = require('http');

http.createServer(function(req,res){

    res.write('<h1>What is Node?</h1>');


    const details = {
        Title: "Node is a JS runtime environment through which we can run JS in our machine",
        Application: "It is used to create the backend or server-side appliccations"
    }


    const jsonContent = JSON.stringify(details)

    res.end(jsonContent);

    
}).listen(6000);