import React from 'react';
import { Link } from 'react-router-dom';
import { spreading } from '../examples/spreading';

export const SpreadScreen = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col container-title">
                    <h1>Esparcir (Spread).</h1>
                </div>
                <div className="tabla">

                    <div className="row">
                        <div className="col">
                            Test
                        </div>
                        <div className="col">
                            <a href="#container" onClick={ spreading }>Spread</a>
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
