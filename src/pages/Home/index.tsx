import React, { useState, useEffect } from 'react';
import './styles.css';
import { Card, CardType } from '../../components/Card';

type ProfileResponse = {
  name: string;
  avatar_url: string;
}

type User = {
  name: string;
  avatar: string;
}

export function Home() {
  //primeiro elemento do useState é o conteúdo do estado, onde fica armazenado a informação o segundo 
  //é a função e atualiza o estado, e dentro do () é o estado inicial.
  const [studentName, setStudentName] = useState('aqui aparecerá seu nome');
  const [students, setStudents] = useState<CardType[]>([]);
  const [user,setUser] = useState<User>({} as User);

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setStudents(prevState => [...prevState, newStudent]); //... Sintaxe de Espalhamento, mostra o estado antigo sem outro vetor
    //imutabilidade do estado, substitui o conteúdo todo, cria um novo vetor e passa o novo + o antigo
  }

  useEffect(() => {
    //usando o async no useEffect
    async function fetchData(){
      const response = await fetch('https://api.github.com/users/rodrigoczlopes');
      const data = await response.json() as ProfileResponse;
      

      setUser({
        name: data.name,
        avatar:data.avatar_url,
      });

    } 
    fetchData();
    // fetch('https://api.github.com/users/rodrigoczlopes') //sem o async
    // .then( response => response.json())
    // .then( data => {
    //   setUser({
    //     name: data.name,
    //     avatar: data.avatar_url,
    //   })
    // });
  }, []);

  return (
    <div className="container">
    <header>
      <h1>Lista de Presença</h1>
      <div>
        <strong>{user.name}</strong>
        <img src={user.avatar} alt="Foto de perfil" />
      </div>
    </header>
      <input 
      type="text" 
      placeholder="Digite um nome..." 
      onChange={e => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {
        students.map(student => 
          <Card 
            key={student.time} //sempre utilizar chave única para componentes de repetição, nesse caso usei o time pois ele está pegando os segundos 
            name={student.name} 
            time={student.time} 
          />
        )
      }
    </div>
  )
}