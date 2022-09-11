const express = require('express');
const app = express();
const port = process.env.PORT || 8000;


app.get("/" , (re , res)=>{
    res.send('Welcome to home page')
});

app.get("/about" , (re , res)=>{
    res.send('Welcome to about page')
});

app.get("/weather" , (re , res)=>{
    res.send('Welcome to weather page')
});

app.get("*" , (re , res)=>{
    res.send('404 page')
});




//listining to the port
app.listen(port , ()=>{
    console.log(`Listening to the port at ${port}`);
})