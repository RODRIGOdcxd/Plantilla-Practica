//Este codigo funcionara si se realiza en el entorno de node.js
/*import React from 'react'
import ReactDOM from 'react-dom'

function Boton(){
    return (<button>Soy un Botón</button>);
}

export default function presentacion(){
    return (<div><h1>Bienvenido a mi aplicacion</h1>
            <Boton/></div>);
}

const container = document.querySelector('.about-container');

// Renderiza el componente 'Presentacion' en el contenedor
ReactDOM.render(<Presentacion />, container);*/

//Este codigo funciona solo al ejecutar en navegador de manera local,
//Osea sin ningun entorno como node.js

function Boton() {
    return React.createElement('button', null, 'Soy un Botón');
}

function presentacion() {
    return React.createElement('div', null,
        React.createElement('h1', null, 'Bienvenido a mi aplicación'),
        React.createElement(Boton)
    );
}

const container = document.querySelector('.about-container');

// Renderiza el componente 'Presentacion' en el contenedor
ReactDOM.render(React.createElement(presentacion), container);
