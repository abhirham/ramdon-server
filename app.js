const express = require('express'),
        app = express();


app.get('/', function(req,res){
    res.send('helloooo');
})

app.listen(process.env.PORT, ()=> {
    console.log("server started on  "+process.env.PORT);
})