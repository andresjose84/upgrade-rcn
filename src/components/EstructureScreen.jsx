import React from 'react';
import { Link } from 'react-router-dom';

export const EstructureScreen = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col container-title">
          <h1>Estructura de archivos.</h1>
        </div>
        <div className="tabla">
          <div className="row">
            <div className="col">
            <h2>¿Hay una forma recomendada de estructurar los proyectos React?</h2>
            </div>
            <div className="col">
              <p>React no tiene opiniones sobre cómo poner los archivos en carpetas.</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <a href="https://es.reactjs.org/docs/faq-structure.html" target="_blank" rel="noopener noreferrer">Link</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <h2>Nota:</h2>
        <p>Nunca usar var.</p>
      </div>
      <div className='row regresar'>
        <div className="col align-content-center">
          <Link to="/">Regresar</Link>
        </div>
      </div>
    </div>
  )
}
