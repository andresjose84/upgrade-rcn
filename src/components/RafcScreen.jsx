import React from 'react';
import { Link } from 'react-router-dom';
import { Welcome } from '../examples/Welcome';

export const RafcScreen = () => {

  const arrHello = [ 'Gilberto', 'Ivan', 'Oscar', 'Javi', 'Eddy', 'Carolina', 'Eduardo', 'Diego' ];

  return (
    <div className="container">
      <div className="row">
        <div className="col container-title">
          <h1>Functional components.</h1>
        </div>
        <div className="tabla">
          <div className="row">
            <div className="col">
              <h2>Componente</h2>
            </div>
            <div className="col">
                { arrHello.map( ( ele, key ) => <Welcome key={ key } name={ ele } /> ) }
            </div>
          </div>
          <div className="row">
            <div className="col">
              <a href="https://es.reactjs.org/docs/components-and-props.html" target="_blank" rel="noopener noreferrer">Link</a>
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
