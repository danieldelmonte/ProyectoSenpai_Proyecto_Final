import React from 'react';
import youtube from '../img/youtube.png';
import twitter from '../img/twitter.png';
import facebook from '../img/facebook.png';


function Nav(props) {

    return (
        <nav>
        <ul>
            <li>
                Inicio
            </li>
            <li>
                Nosotros
            </li>
            <li>
                Contacto
            </li>
            <li>
                <img src={youtube}></img>
            </li>
            <li>
                <img src={twitter}></img>
            </li>
            <li>
                <img src={facebook}></img>
            </li>
        </ul>
    </nav>
      );
}

export default Nav