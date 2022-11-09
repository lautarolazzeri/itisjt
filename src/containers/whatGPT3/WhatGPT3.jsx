import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

function WhatGPT3() {
    return (
        <div className='gpt3__whatgpt3 section__margin' id='whpt3'>
            <div className="gpt3__whatgpt3-feature">
                <Feature title='¿Qué es el Método Silva?' text='El Metodo Silva es el programa original de desarrollo mental con el que Ud. puede aprender a utilizar el poder inexplorado de su mente para alcanzar los objetivos que se proponga.
                Es un método educativo, basado en investigación científica que tiene por objetivo mejorar la calidad de vida.
                Ésta abarca distintas áreas, como la salud física, mental y emocional, aprendizajes, logro de metas, y relaciones interpersonales.
                Y eso es sobre lo que el metodo Silva se trata: aprender a usar mejor su mente y de una forma mas eficiente.
' />
            </div>
            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient__text'>Explora nuestros cursos del Método Silva</h1>
                <p>Ver todos los cursos</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <a href=""> <Feature title="Orígenes" text="Jose Silva es el creador de el metodo silva de desarrollo mental. Con 84 años de edad, partió hacia la eternidad el día 7 de Febrero de 1999. En su ciudad natal Laredo (Texas, USA). Leer más..." /></a>
                <a href=""> <Feature title="Metodología" text="Se sabe que el cerebro emite ondas eléctricas medibles con el electroencefalógrafo: beta, alfa, theta y delta. Existe una relación entre la producción de ondas cerebrales, los estados mentales y las actividades que desarrolla el ser humano. Leer más..." /></a>
                <a href=""><Feature title="¿Para qué sirve?" text="El Método Silva nos ayuda a relajarnos, a tener más autoestima, a controlar el estrés y la ansiedad, a desarrollar intuición, Dormir y descansar mejor, Potenciar la memoria y la concentración con diversas técnicas de estudios, crear buenos hábitos y superar los malos hábitos. Entre otros." /></a>
            </div>
        </div>
    )
}

export default WhatGPT3
