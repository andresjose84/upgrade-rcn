import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

export const IndexScreen = () => {
    return (
        <div className="container">
            <div className="container-title">
                <h1>JavaScript ES6 y Intro a React.</h1>
            </div>
            <div className="container-list">
                <ol>
                    <li><Link to="/vars" className="nav-link">Tipos de variables.</Link></li>
                    <li><Link to="/destruture" className="nav-link">Desestructuración.</Link></li>
                    <li><Link to="/spread" className="nav-link">Esparcir (Spread).</Link></li>
                    <li><Link to="/arrow" className="nav-link">Funciones flecha (Arrow Function).</Link></li>
                    <li><Link to="/react" className="nav-link">Crear Proyecto.</Link></li>
                    <li><Link to="/estructure" className="nav-link">Estructura de archivos.</Link></li>
                    <li><Link to="/rafc" className="nav-link">Functional components.</Link></li>
                    <li><Link to="/hooks" className="nav-link">Hooks.</Link></li>
                    <li><Link to="/expl" className="nav-link">Ejemplo.</Link></li>
                    <li><Link to="/build" className="nav-link">Build.</Link></li>
                </ol>
            </div>
        </div>
    )
}
