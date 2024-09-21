'use client'

import { Container, Typography } from "@mui/material";
import "@/assets/styles/TaskCreate.scss";
import React, { useState } from 'react';
import { createTask} from '@/app/task';
import Link from "next/link";
const TaskCreate = () => {
    const [newTask, setNewTask] = useState('');

  const handleCreateTask =  () => {
    createTask({ title: newTask, completed: false });
      setNewTask('');

    }
    return (
        <>
            <Container maxWidth="lg">
              <div className="container-g">
                 <div className="container">
                <Typography className="title"> Nova tarefa</Typography>
<div className="titles">
<label htmlFor="titulo">Titulo</label>
<input placeholder="Digite" type="text" name="titulo" id="input-titulo"  value={newTask}
        onChange={(e) => setNewTask(e.target.value)}/>
</div>

<div className="buttons">
<button className="cancelar"> <Link href='/TaskGet'>Cancelar</Link></button>
<button className="buttonAdd" onClick={handleCreateTask}><Link href='/TaskGet' >Adicionar</Link></button>
</div>
                </div>
              </div>
               


             </Container>
            
        </>
    )
}

export default TaskCreate