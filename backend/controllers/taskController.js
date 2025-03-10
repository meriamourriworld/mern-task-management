const {Task} = require("../models/Task");

module.exports.getAllTasks = async(req, res)=>
{
   const currentUser = req.currentUser;
   
    const tasks = await Task.find({userId:currentUser._id});
    return (tasks.length > 0)? res.status(201).json({success: true, tasks, user : currentUser}) 
                            :   res.status(400).json({success: false, message: "No tasks found !"});
};

module.exports.createTask = async(req, res)=>
{
    try {
        const {title, description, status, dueDate} = req.body;
        const addedTask = await Task.insertMany({title: title, description: description, status: status, dueDate: dueDate, userId: req.currentUser._id});
        return res.status(201).json({success: true, message: "Task successfully created !", newTask:addedTask[0]})
    } catch (error) {
        return res.status(400).json({success: false, message: `Problem while creating task`, error: error.message});
    }
};

module.exports.deleteTask = async(req, res)=>
{
    const { id } = req.params;
    try {
            if(await checkTaskId(id) === false)
            {
                throw new Error("Task ID not found!");
            }
            await Task.findByIdAndDelete(id);
            return res.status(201).json({success: true, message: `${id} successfully deleted !` })
    } catch (error) {
        return res.status(400).json({success: false, message: `Problem while deleting ${id} task!`, error: error.message});
    }
};

module.exports.updateTask = async(req, res)=>
{
    const {id} = req.params;
    try {
        if(await checkTaskId(id) === false)
        {
            throw new Error("Task ID not found!");
        }
        const {title, description, status, dueDate} = req.body;
        await Task.findByIdAndUpdate(id, {title, description, status, dueDate});
        return res.status(200).json({success: true, message: `${id} successfully updated !` });
    } catch (error) {
        return res.status(400).json({success: false, message: `Problem while updating ${id} task!`, error: error.message});
    }
                    
}

//Functions checks id Task ID exists
const checkTaskId = async (id) =>
{
    foundTask = await Task.find({_id : id});
    return foundTask.length > 0 ? true : false;
}