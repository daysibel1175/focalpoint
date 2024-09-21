'use client'

import { Container, Typography } from "@mui/material";
import "@/assets/styles/TaskDelete.scss";
import Link from "next/link";
import { deleteTask } from '@/app/task';

const TaskDelete = () => {
  
  const handleDeleteTask = () => {
    deleteTask()
  };
    return (
        <>
           <Container maxWidth="lg">
            <div className="container-g">
                  <div className="container">
                <Typography className="title">Deletar tarefa</Typography>

<span className="titulo">Tem certeza que voce quer deleta esta tarefa?</span>

<div className="buttons">
<button className="cancelar" > <Link href='/TaskGet'>Cancelar</Link></button>
<button className="buttonDelet" onClick={ handleDeleteTask}><Link href='/TaskGet'>Deletar</Link></button>
</div>
                </div>
            </div>
            


             </Container>
            
        </>
    )
}

export default TaskDelete