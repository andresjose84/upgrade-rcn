import React from 'react';
import { Link } from 'react-router-dom';
import { copyText } from '../examples/copyText';

export const ReactScreen = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col container-title">
          <h1>Crear Proyecto.</h1>
        </div>
        <div className="tabla">
          <div className="row">
            <div className="col">
              Comando crear app
            </div>
            <div className="col">
              <p className="content-pwd" onClick={ copyText }>npx create-react-app my-app</p>
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
