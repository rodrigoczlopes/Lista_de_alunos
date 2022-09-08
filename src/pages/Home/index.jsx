import React, { useState } from 'react';
import './styles.css';
import { Card } from '../../components/Card';

export function Home() {
  //primeiro elemento do useState é o conteúdo do estado, onde fica armazenado a informação o segundo 
  //é a função e atualiza o estado, e dentro do () é o estado inicial.
  const [studentName, setStudentName] = useState('aqui aparecerá seu nome');
  const[students, setStudents] = useState([]);

  function handelAddStudent(){
    const newStudent = {
      name: setStudentName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };
    setStudents([newStudent]);
  }
  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input 
      type="text" 
      placeholder="Digite um nome..." 
      onChange={e => setStudentName(e.target.value)}
      />
      <button type="button">Adicionar</button>

      {
        students.map(student => <Card name={student.name} time={student.time} />)
        
      }
      
    </div>
  )
}