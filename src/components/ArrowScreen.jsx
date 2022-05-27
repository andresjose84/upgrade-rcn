import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../examples/arrow';

export const ArrowScreen = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col container-title">
                    <h1>Funciones flecha (Arrow Function).</h1>
                </div>
                <div className="tabla">

                    <div className="row">
                        <div className="col">
                            Test
                        </div>
                        <div className="col">
                            <a href="#container" onClick={ arrow }>Arrow Function</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">

                    <p>Una <strong>expresión de f unción flecha</strong> es una alternativa compacta a una <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function" rel="noreferrer"><code>expresión de función</code></a> tradicional, pero es limitada y no se puede utilizar en todas las situaciones.</p>

                    <p><strong>Diferencias y limitaciones:</strong></p>

                    <ul>
                        <li>No tiene sus propios enlaces a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"><code>this</code></a> o <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super" rel="noreferrer"><code>super</code></a> y no se debe usar como <a target="_blank" href="https://developer.mozilla.org/es/docs/Glossary/Method" rel="noreferrer">métodos</a>.</li>
                        <li>No tiene <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this" rel="noreferrer"><code>argumentos</code></a> o palabras clave <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target" rel="noreferrer"><code>new.target</code></a>.</li>
                        <li>No apta para los métodos <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call" rel="noreferrer"><code>call</code></a>, <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply" rel="noreferrer"><code>apply</code></a> y <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind" rel="noreferrer"><code>bind</code></a>, que generalmente se basan en establecer un <a target="_blank" href="https://developer.mozilla.org/es/docs/Glossary/Scope" rel="noreferrer">ámbito o alcance</a></li>
                        <li>No se puede utilizar como <a target="_blank" href="https://developer.mozilla.org/es/docs/Glossary/Constructor" rel="noreferrer">constructor</a>.</li>
                        <li>No se puede utilizar <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield" rel="noreferrer"><code>yield</code></a> dentro de su cuerpo.</li>
                    </ul>

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
