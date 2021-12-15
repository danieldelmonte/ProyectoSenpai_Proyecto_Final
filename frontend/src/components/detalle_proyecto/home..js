import Nav_Menu from '../nav.js';
import Header from '../header';
import Main from './main.js';

import './../../css/General.css';
import './../../css/detalle_proyecto.css';
import { Component, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Home() {

  const [proyecto, setproyecto] = useState([]);

  const params = useParams()

  useEffect(() => {

    fetch('http://localhost:3000/proyecto/' + params.id, { method: "GET" })
      .then(respuesta => respuesta.json())
      .then((json) => {
        //console.log(json)
        setproyecto(json)
      })

    return () => console.log('podes desuscribirnos a eventos que hayamos definido')

  }, []);

  return (
    <div className="App" >

      <Nav_Menu></Nav_Menu>
      <Header></Header>
      <Main proyecto={proyecto}></Main>
    </div>
  );


}

export default Home