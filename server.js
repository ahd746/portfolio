//express
const express = require('express');
const path =require('path');
const app = express();

app.use(express.static(path.join(__dirname, './views/')))

app.get('/',(req , res)=>{
    res.sendFile(path.join(__dirname, './views/index.html'));
})

app.get('/about',(req , res)=>{
    res.sendFile(path.join(__dirname, './views/about.html'));
})

app.get('/work',(req , res)=>{
    res.sendFile(path.join(__dirname, './views/work.html'));
})

app.get('/contact',(req , res)=>{
    res.sendFile(path.join(__dirname, './views/contact.html'));
})


//Set the port and listen 
PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));