import React from 'react';
import { Link } from 'react-router-dom';

export const HooksScreen = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col container-title">
          <h1>Hooks.</h1>
        </div>
        <div className="tabla">
          <div className="row">
            <div className="col">
              <h2>Principales</h2>
            </div>
            <div className="col">
              <h2>useState</h2>
            </div>
            <div className="col">
              <h2>useEfect</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <a className="nav-link" href="https://es.reactjs.org/docs/components-and-props.html" target="_blank" rel="noopener noreferrer">Link</a>
            </div>
            <div className="col">
              <Link className="nav-link" to="/usestate">Link</Link>
            </div>
            <div className="col">
              <Link className="nav-link" to="/useefect">Link</Link>
            </div>
          </div>
          <div className="row">
            <div className="col">
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
