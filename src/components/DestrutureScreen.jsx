import React from 'react';
import { Link } from 'react-router-dom';
import { desArray,desObject,desNested } from '../examples/destruture';

export const DestrutureScreen = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col container-title">
                    <h1>Desestructuración de elementos.</h1>
                </div>
                <div className="tabla">

                    <div className="row">
                        <div className="col">
                            Desestructurando
                        </div>
                        <div className="col">
                            <a href="#container" onClick={ desArray }>Arrays</a>
                        </div>
                        <div className="col">
                            <a href="#container" onClick={ desObject }>Objetos</a>
                        </div>
                        <div className="col">
                            <a href="#container" onClick={ desNested }>Anidados</a>
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
