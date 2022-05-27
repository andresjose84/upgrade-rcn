import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const UseStateScreen = () => {
    const init = 1;
    const [ state, setState ] = useState(
        {
            counter1: init,
            counter2: init
        }
    );
    const { counter1, counter2 } = state;

    const handlerAdd = () => {
        setState( { counter1: counter1 + 1, counter2: counter2 * 2 } );
    };

    const handlerSub = () => {
        setState( { counter1: counter1 - 1, counter2: counter2 / 2 } );
    };

    const handlerRes = () => {
        setState( { counter1: init, counter2: init } );
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col container-title">
                    <h1>Hooks UseState.</h1>
                </div>
                <div className="tabla">
                    <div className="row">
                        <CounterScreen counter1={ counter1 } counter2={ counter2 } />
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className='btn btn-primary'
                                onClick={ handlerAdd }
                            >+1</button>
                        </div>
                        <div className="col">
                            <button className='btn btn-primary'
                                onClick={ handlerRes }
                            >Reset</button>
                        </div>
                        <div className="col">
                            <button className='btn btn-primary'
                                onClick={ handlerSub }
                            >-1</button>
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
                    <Link to="/hooks">Regresar</Link>
                </div>
            </div>
        </div>
    )
}

const CounterScreen = ( { counter1, counter2 } ) => {
    return (
        <>
            <div className="col">
            <h1>Counter { counter1 }</h1>
            </div>
            <div className="col">
            </div>
            <div className="col">
            <h1>Counter { counter2 }</h1>
            </div>
        </>
    );
}
