import React from 'react';
import Comentarios from './comentarios';
import logo from '../../img/heart_blanco_16.png'; // with import


function Info_Proyecto(props) {

    const proyecto = props.proyecto.proyecto;

    const porcentajeRecaudado = parseInt((proyecto.recaudado * 100) / proyecto.objetivo);
        
    const meGustaClick = (e) => {
        //setUserInput(e.currentTarget.value)
        const botonMeGusta = document.getElementById("megusta_img");
        const textoMeGusta = document.getElementById("megusta_OK");
        const textoNoMeGusta = document.getElementById("megusta_NO_OK");        

        let valorBoton = botonMeGusta.getAttribute('src');

        if (valorBoton === '../img/heart_rojo_16.png') {
            botonMeGusta.src = "../img/heart_blanco_16.png"
            textoMeGusta.style.display = "none";
            textoNoMeGusta.style.display = "block";
        } else {
            botonMeGusta.src = "../img/heart_rojo_16.png"
            textoMeGusta.style.display = "block";
            textoNoMeGusta.style.display = "none";

        }
        
    }

    return (
        <>
         <section className="img_detalle">
                {/* <img src={imagenPrinicipal}></img> */}
                <img src={`../${proyecto.imagen}`}></img>

            </section>
            <section className="side_detalle">
                <div className="side_recaudado">
                    {`$${proyecto.recaudado} de $${proyecto.objetivo}`}
                </div>
                <div className="side_porcentaje">
                    {`${porcentajeRecaudado} % Recaudado`}                    
                </div>
                <div className="side_dias">                     
                    {`${proyecto.dias_restantes} días restantes`}
                </div>
            </section>
            <section className="acciones_detalle">
                <div id="titulo_detalle">
                    {proyecto.titulo}
                </div>
                <div id="botones_detalle">
                    <img id="megusta_img" src={logo} onClick={meGustaClick}></img>
                    <div id="megusta_OK" style={{display:'none'}}>Gracias!</div>
                    <div id="megusta_NO_OK">Apoya este Proyecto!</div>
                </div>
            </section>
            <section className="descripcion_detalle">
                {proyecto.descripcion}
            </section>
            <Comentarios proyecto={proyecto}></Comentarios>
            </>
      );
}

export default Info_Proyecto