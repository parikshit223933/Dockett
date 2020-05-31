const express = require('express');
const port = 8000;
const app = express();
const db = require('./config/mongoose');
const tasks = require('./models/task')

app.set('case sensitive routing', false);
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ 'extended': true }));
app.use(express.static('assets'));

app.get('/', function (req, res)
{
    tasks.find({}, function (error, task)
    {
        if (error)
        {
            console.log('There was an error in fetching the tasks from the databse');
            return;
        }
        var options =
        {
            title: "Dockett",
            task_list:task,
        }
        return res.render('to_do_list.ejs', options);
    })


});
app.post('/create-task', function (req, res)
{
    console.log(req.body);
    tasks.create(req.body, (error, new_task) =>
    {
        if (error)
        {
            console.log('error in creating a task!');
            return;
        }
        console.log('*********', new_task);
        return res.redirect('back');
    });
});



app.listen(port, (error) =>
{
    if (error)
    {
        console.log('There was an error in starting the server');
    }
    else
    {
        console.log(`Server is running at port ${port}`);
    }
});