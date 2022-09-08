import React, { useState } from 'react';
import './styles.css';
import { Card } from '../../components/Card';

export function Home() {
  const [studentName, setStudentName] = useState('aqui aparecerá seu nome');
//primeiro elemento do useState é o conteúdo do estado, onde fica armazenado a informação o segundo 
//é a função e atualiza o estado, e dentro do () é o estado inicial.
  return (
    <div className="container">
      <h1>Name: {studentName}</h1>
      <input 
      type="text" 
      placeholder="Digite um nome..." 
      onChange={e => setStudentName(e.target.value)}
      />
      <button type="button">Adicionar</button>

      <Card name="Rodrigo" time="10:05:20" />
      <Card name="Juliete" time="12:15:23" />
    </div>
  )
}