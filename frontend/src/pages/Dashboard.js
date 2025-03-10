import React, { useEffect } from 'react'
import Header from '../components/Header';
import TaskCard from '../components/tasks/TaskCard';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(()=>
    {
        if(localStorage.getItem("authToken") === null)//ICI
        {
            navigate("/");
        }
    }, []);


  return (
    <div>
      <Header />
      <TaskCard />
    </div>
  )
}

export default Dashboard;
