import React from 'react';
import Nav from './nav';
import Info_Proyecto from './info_proyecto';

function Main(props) {
    
    const proyecto = props.proyecto;

    if (proyecto.length==0){
        return (
            <>
                
            </>
        )
    }else{
        return (
            <>
                <main>
                    <section className="contenedor_detalle_principal">
                        <section className="wrapper_detalle">
                            <Nav></Nav>                            
                            <Info_Proyecto proyecto={proyecto} ></Info_Proyecto>              
                        </section>
                    </section>
                </main>               
            </>
        )
    }
    
}

export default Main