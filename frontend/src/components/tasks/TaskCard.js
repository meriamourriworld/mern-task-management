import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import deleteIcon from "../../assets/images/deleteIcon.png";
import updateIcon from "../../assets/images/updateIcon.png";
import { getTasks, createNewTask, update, deleteCurrentTask } from '../../api/taskApi';
import NewTask from './NewTask';
import UpdateTask from './UpdateTask';
import UserBadge from '../auth/UserBadge';
import CreateTaskButton from '../CreateTaskButton';
import { UserContext } from '../../api/userApi';

    const TaskCard = () => {
    const [task, setTask] = useState({
                                    _id : "",
                                    title : "",
                                    description : "",
                                    status : "",
                                    dueDate : "",
                                    userId :""
                                });
    const [tasks, setTasks] = useState([]);
    const username = useContext(UserContext);
    const [currentUser, setCurrentUser] = useState(username || "");
    const navigate = useNavigate();

    useEffect(()=>
    {
        getTasks(navigate, setTasks, setCurrentUser, setTask, task);
    }, []);

    const handleChange = (e)=>
    {
        setTask({...task, [e.target.name] : e.target.value});
    };

    const createTask = async(e)=>
    {
        e.preventDefault();
        createNewTask(task, setTask, tasks, setTasks);
    }

    const showTask = (task)=>
    {
        setTask({...task});
    }

    const updateCurrentTask = async(e)=>
    {
        e.preventDefault();
        update(task, setTasks, tasks, setTask);
    }
    
    //DELETE TASK
    const deleteTask = async(id)=>
    {
        deleteCurrentTask(id, setTasks, tasks);
    }
  return (
    <div className='tasks-container mt-5'>
        {/* OFFCANVAS TO CREATE && UPDATE A TASK */}
        <UpdateTask updateCurrentTask={updateCurrentTask} handleChange={handleChange} task={task} />
        <NewTask createTask={createTask} task={task} handleChange={handleChange} />
        <UserBadge username={currentUser.username || username} />
        <CreateTaskButton />

        <div className='col-12'>
            <table className='table mt-5 w-100'>
                <thead className=' table-dark'>
                    <tr className='row'>
                        {["No", "Title", "Description", "Status", "Due Date"].map((col)=>(<th className='col'>{col}</th>))}
                    </tr>
                </thead>
                <tbody>
                {
                    tasks.length > 0 ?
                    tasks.map((task, index) => (
                        <tr className='row' key={index}>
                            <td className='col font-default font-sm'>{index+1}</td>
                            <td className='col'>{task.title}</td>
                            <td className='col'>{task.description}</td>
                            <td className='col'><p className={`badge ${task.status==="Pending"? 'pending': task.status==="Completed" ? 'completed' : 'prog'}`}>{task.status}</p></td>
                            <td className='col font-default font-sm'>{new Date(task.dueDate).toLocaleDateString()}</td>
                            <td className='col'>
                            <div className='d-flex justify-content-center'>
                                <img className='icons' src={updateIcon} alt='Update task' data-bs-toggle="offcanvas" data-bs-target="#updateCanvas" onClick={()=>showTask(task)} /> 
                                <img className='icons ms-3' src={deleteIcon} alt='Delete task' onClick={()=>deleteTask(task._id)} /> 
                            </div>
                            </td>
                        </tr>))
                        :
                        <tr>
                            <div className='text-center transparent-bg' colSpan={6}>NO TASKS ON YOUR SCHEDULE</div>
                        </tr>
                    }
                </tbody>
            </table>
      </div>
    </div>
  )
}
export default TaskCard;
