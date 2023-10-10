import React from 'react'
import ReactDOM from 'react-dom'
import Presentacion from '../js/componenteAbout' // Utiliza barras diagonales hacia adelante en la ruta

// Encuentra el contenedor en tu página HTML por su ID
const container = document.getElementById('about-container');

// Renderiza el componente 'Presentacion' en el contenedor
ReactDOM.render(<Presentacion />, container);