const mongoose=require('mongoose');
const task_schema=new mongoose.Schema(
    {
        Description:{
            type:String
        },
        Category:{
            type:String
        },
        Due_Date:{
            type:Date
        },

    }
);

const tasks=mongoose.model('tasks', task_schema);
module.exports=tasks;