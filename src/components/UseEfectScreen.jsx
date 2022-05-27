import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const UseEfectScreen = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col container-title">
                    <h1>Hooks UseEfectScreen.</h1>
                </div>
                <div className="tabla">
                    <div className="row">
                        <SimpleForm />
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

const SimpleForm = () => {
    const [ state, setState ] = useState( {
        name: '',
        email: ''
    } );
    const { name, email } = state;
    useEffect( () => {
        console.log( 'Hey!' );
    }, [] );

    useEffect( () => {
        console.log( 'FormState Cambio!' );
    }, [ state ] );

    useEffect( () => {
        console.log( 'email Cambio!' );
    }, [ email ] );


    const handleInputChange = ( { target } ) => {
        console.log( 'name', target.name );
        console.log( 'value', target.value );
        setState( {
            ...state,
            [ target.name ]: target.value
        } )
    }

    return (
        <>
            <div className='from-group'>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Tu Nombre'
                    autoComplete='off'
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>
            <div className='from-group'>
                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='email@email.com'
                    autoComplete='off'
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            { name === '123' && <Message /> }

        </>
    )
}

const Message = () => {
    const [ coords, setCoords ] = useState( { x: 0, y: 0 } );
    const { x, y } = coords;
    useEffect( () => {
        console.log( 'Componente montado' );
        const mouseMove = ( e ) => {
            const coord = {
                x: e.x,
                y: e.y
            };
            setCoords( coord );
            console.log( coord );
        };
        window.addEventListener( 'mousemove', mouseMove );
        return () => {
            console.log( 'Componente desmontado' );
            window.removeEventListener( 'mousemove', mouseMove );
        }
    }, [] )

    return (
        <div>
            <h3>Eres Genial</h3>
            <p>
                x:{ x } - y:{ y }
            </p>
        </div>
    )
}