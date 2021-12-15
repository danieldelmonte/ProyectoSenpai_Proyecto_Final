import React from 'react';

function Item_Listado(props) {    

    const porcentajeRecaudado = parseInt((props.proyecto.recaudado * 100) / props.proyecto.objetivo);

    return (
        <>
            <div className="item-listado-bajo">
                <div className="foto_bajo">
                    <a href={ `detalle/${props.proyecto.id}`}   target="_blank" className="texto_sin_deco">
                        <img src={`../${props.proyecto.imagen}`}></img>
                    </a>
                </div>
                <div className="recaudado_bajo">{props.proyecto.recaudado} de ${props.proyecto.objetivo}</div>
                <div className="titulo_bajo">{props.proyecto.titulo}</div>
                <div className="descripcion_bajo">{props.proyecto.descripcion}</div>
                <div className="status_bajo">
                    <div className="centrado_div">{porcentajeRecaudado}% Recaudado</div>
                    <div className="centrado_div">{props.proyecto.dias_restantes} días restantes</div>
                </div>
            </div>
        </>
      );
}

export default Item_Listado