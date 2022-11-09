import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'

function Possibility() {
    return (
        <div className='gpt3__possibility section__padding' id='possibility'>
            <div className="gpt3__possibility-image">
                <img src={possibilityImage} alt="instructora-martha-pugliesi" />
            </div>
            <div className="gpt3__possibility-content">
                <h4>Instructora oficial del Método Silva</h4>
                <h1 className='gradient__text'>Licenciada Martha Pugliesi</h1>
                <p>Me recibí de Maestra Normal Nacional y fuí maestra y directora de escuela hasta mi retiro. Me gradué en la Universidad del Salvador de licenciada en Artes y Técnicas Publicitarias, profesión que no ejercí porque me apasionó la docencia, primero en la actividad escolar, y luego como instructora del Método Silva desde el año 1979.</p>
                <a href=""><h4>Saber más sobre mí</h4></a>
            </div>
        </div>
    )
}

export default Possibility;
