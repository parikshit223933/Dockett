const express=require('express');
const port=8000;
const app=express();
const db=require('./config/mongoose');

app.set('case sensitive routing', false);
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({'extended': true}));
app.use(express.static('assets'));

app.get('/', function(req, res)
{
    return res.end('<h1>Hello mamasita</h1>');
});




app.listen(port, (error)=>
{
    if(error)
    {
        console.log('There was an error in starting the server');
    }
    else
    {
        console.log(`Server is running at port ${port}`);
    }
});