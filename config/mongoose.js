const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/to_do_list_db', {useNewUrlParser: true, useUnifiedTopology: true });

const db=mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to the database!'));
db.once('open', function()
{
    console.log('Successfully connected to the database!');
});