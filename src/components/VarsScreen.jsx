import React from 'react';
import { varScope, letScope, constScope } from '../examples/vars';
import { Link } from 'react-router-dom';


export const VarsScreen = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col container-title">
                    <h1>Tipos de variables.</h1>
                </div>
                <div className="tabla">
                    
                    <div className="row">
                        <div className="col">
                            Keyword
                        </div>
                        <div className="col">
                            <a href="#container" onClick={constScope}>const</a>
                        </div>
                        <div className="col">
                            <a href="#container" onClick={letScope}>let</a>
                        </div>
                        <div className="col">
                            <a href="#container" onClick={varScope}>var</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Global scope
                        </div>
                        <div className="col">
                            NO
                        </div>
                        <div className="col">
                            NO
                        </div>
                        <div className="col">
                            YES
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Fuctional scope
                        </div>
                        <div className="col">
                            YES
                        </div>
                        <div className="col">
                            YES
                        </div>
                        <div className="col">
                            YES
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Block scope
                        </div>
                        <div className="col">
                            YES
                        </div>
                        <div className="col">
                            YES
                        </div>
                        <div className="col">
                            NO
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Can be reassigned
                        </div>
                        <div className="col">
                            NO
                        </div>
                        <div className="col">
                            YES
                        </div>
                        <div className="col">
                            YES
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
