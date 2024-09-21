'use client'
import Navbar from '@/components/Navbar'
import { Container, Typography } from "@mui/material";
import "@/assets/styles/TaskGet.scss";
import "@/assets/styles/styles.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { getTasks } from '@/app/task';

const TaskGet = () => {
  const [tasks, setTasks] = useState([
    { id: '', title: '' },

  ]);

  useEffect(() => {
    const storedTasks = getTasks();
    setTasks(storedTasks);
  }, []);
 
  return (
    <Container maxWidth="lg">
       <Navbar/>
      <div className="list">
        <Typography className="text">Suas tarefas de hoje</Typography>
        <div className="listTask">

          {tasks.map((task) => (
            <div className="taskItem" key={task.id}>
              <div className="task">
                <input type="checkbox" className="checkbox" />
                <span className="titulo">{task.title}</span>
              </div>
              <button>
              <Link href='/TaskDelete'><DeleteOutlinedIcon className="icon" /></Link>
              </button>
            </div>
        
        ))}
        
        </div>
        <Typography className="text">Tarefas finalizadas</Typography>
        <div className="EndedTask">
          <div className="taskItem">
            <div className="task">
              <input type="checkbox" checked={true} className="checkbox end" />
              <span className="complet titulo">Lavar as mãos</span>
            </div>
            <button>
              <Link href='/TaskDelete'><DeleteOutlinedIcon className="icon" /></Link>
            </button>
          </div>
        </div>
      </div>
      <div className="addTask">
      
        <button className="buttonAdd">
          <Link href="/TaskCreate" >Adicionar nova tarefa</Link>
        </button>
      </div>
    </Container>
  );
};

export default TaskGet;
