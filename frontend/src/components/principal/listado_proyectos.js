import React from 'react';
import Buscador  from './buscador';
import Item_Listado from './item_listado';

function ListadoProyectos(props) {

    const handleFilter = props.handleFilter;

    if (props.listado.length==0){
        return (
            <>
                
            </>
        )
    }else{
        return (
            <>
                <section className="listado" id="listado_proyectos">
                    <Buscador handleFilter={handleFilter}></Buscador>
                    {                                              
                        props.listado.proyectos_listado.map(function(proyecto){
                            return <Item_Listado proyecto={proyecto}></Item_Listado>
                        })
                    }       
                </section>                  
            </>
          );
    }

    
}

export default ListadoProyectos