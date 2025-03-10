import { toast } from "react-toastify";
import { axiosConfig } from "./axiosConfig";


export const getTasks = async(navigate, setTasks, setCurrentUser, setTask, task)=>
{
    await axiosConfig.get("/tasks")
    .then((data)=> {
        setTasks(data.data.tasks)
        setCurrentUser(data.data.user);
        setTask({...task, userId: data.data.user._id});
    })
    .catch((err)=> {
        err.response? console.error(`${err.response.data.message} ${err.response.data.error}`) :  console.error(err.message);
    });
}

export const createNewTask = async(task, setTask, tasks, setTasks)=>
{
    await axiosConfig.post("/tasks", task)
    .then(async(response)=> {
        toast.success(response.data.message);
        setTasks([...tasks, response.data.newTask]);
        setTask({
            title : "",
            description : "",
            status : "",
            dueDate : "",
            userId :""
        });
    })
    .catch((err)=>err.response? toast.error(`${err.response.data.message} ${err.response.data.error}`) :  toast.error(err.message));

}

//Delete Task
export const deleteCurrentTask = async(id, setTasks, tasks)=>
{
    await axiosConfig.delete(`/tasks/${id}`)
                    .then((response)=> {
                        toast.success(response.data.message);
                        setTasks(tasks.filter((task)=> task._id !== id));
                    })
                    .catch((err)=> err.response? toast.error(`${err.response.data.message} ${err.response.data.error}`) :  toast.error(err.message));
}

export const update = async(updatedTask, setTasks, tasks, setTask)=>
{
    alert(JSON.stringify(updatedTask))
    await axiosConfig.put(`/tasks/${updatedTask._id}`, updatedTask)
                    .then((response)=> {
                                        toast.success(response.data.message);
                                        setTasks([...tasks.map((task) => task._id === updatedTask._id ? updatedTask : task )]);
                                        setTask({title : "",description : "",status : "",dueDate : "",userId :""});
                                        })
                    .catch((err)=> err.response? toast.error(`${err.response.data.message} ${err.response.data.error}`) :  toast.error(err.message));
}