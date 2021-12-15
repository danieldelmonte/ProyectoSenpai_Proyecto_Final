import React from 'react';
import Item_Top from './item_top';

function Main(props) {
    
    if (props.listadoTop.length==0){
        return (
            <>
                
            </>
        )
    }else{
        return (
            <>
                <main>                
                {                                              
                    props.listadoTop.proyectos_top.map(function(proyecto){
                        return <Item_Top proyecto={proyecto}></Item_Top>
                    })
                }               
                </main>                     
            </>
        )
    }
    
}

export default Main