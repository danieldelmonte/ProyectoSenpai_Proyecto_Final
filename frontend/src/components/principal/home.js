
import Nav_Menu from './../nav.js';
import Header from './../header';
import Main from './main';
import ListadoProyectos from './listado_proyectos';
import './../../css/index.css'; 
import './../../css/General.css';
import { Component, useState, useEffect } from 'react';

function Home () {

    const [proyectosTOP, setproyectosTOP] = useState([]);
    const [proyectos, setproyectos] = useState([]);
    const [proyectos_global, setproyectosGlobal] = useState([])
  
    useEffect(()=>{
  
      fetch('http://localhost:3000/proyecto/top', {method:"GET"})
      .then(respuesta=>respuesta.json())
      .then((json)=>{
        //console.log(json)
        setproyectosTOP(json)
      })
  
      return ()=>console.log('podes desuscribirnos a eventos que hayamos definido')
      
    },[]);
  
  
    useEffect(()=>{
  
      fetch('http://localhost:3000/proyecto', {method:"GET"})
      .then(respuesta=>respuesta.json())
      .then((json)=>{
        //console.log(json)
        setproyectos(json)
        setproyectosGlobal(json)
      })
  
      return ()=>console.log('podes desuscribirnos a eventos que hayamos definido')
      
    },[]);
  
    const handleFilter = () => {
      
      let valorTexto = document.getElementById("txtProyecto").value;
  
      console.log("Valor: ? " + valorTexto);
  
      const listadoFiltrado = proyectos_global.proyectos_listado.filter(proyecto => proyecto.titulo.toString().includes(valorTexto));
    
      const resultado = { success: true, proyectos_listado: listadoFiltrado };
  
      setproyectos(resultado);
    
    }

    return ( 
        <div className = "App" >
    
          <Nav_Menu></Nav_Menu>
          <Header></Header>
          <Main listadoTop={proyectosTOP}></Main>
          <ListadoProyectos listado={proyectos} handleFilter={handleFilter}></ListadoProyectos>
          
        </div>
        );

  
    }

export default Home