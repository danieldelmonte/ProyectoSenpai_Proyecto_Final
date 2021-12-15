import React from 'react';

function Item_Top(props) {

    const porcentajeRecaudado = parseInt((props.proyecto.recaudado * 100) / props.proyecto.objetivo);    

    return (
        <>
            <a href={ `detalle/${props.proyecto.id}`} target="_blank" className="texto_sin_deco">
                <div className="proyecto_detail">
                    <div className="proyecto_titulo">{props.proyecto.titulo}</div>
                    <div className="proyecto_imagen">
                        <img src={`../${props.proyecto.imagen}`}></img>
                    </div>
                    <div className="proyecto_recaudado">{props.proyecto.recaudado} de ${props.proyecto.objetivo}</div>
                    <div className="proyecto_desc">{props.proyecto.descripcion}</div>
                    <div className="proyecto_footer">
                        <div className="centrado_div">{porcentajeRecaudado}% Recaudado</div>
                        <div className="centrado_div">{props.proyecto.dias_restantes} días restantes</div>
                    </div>
                </div>
            </a>
        </>
      );
}

export default Item_Top