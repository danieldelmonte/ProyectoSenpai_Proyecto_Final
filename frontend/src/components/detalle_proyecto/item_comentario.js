import React from 'react';

function Item_Comentario(props) {    

    const comentario = props.comentario;

    return <>
        <div className="item_comentario">
            <div>
                {comentario.contenido}
            </div>
            <div className="item_comentario_log">
                <div>
                    User: {comentario.usuario}
                </div>
                <div className="item_date">
                    Fecha: {comentario.fecha}
                </div>
            </div>
        </div>   
    </>
}

export default Item_Comentario