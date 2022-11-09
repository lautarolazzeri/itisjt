import React from 'react';
import './blog.css';
import { blog01, blog02, blog03, blog04, blog05} from './imports';
import { Article } from '../../components';

function Blog() {
    return (
        <div className='gpt3__blog section__padding' id='blog'>
            <div className="gpt3__blog-heading">
                <h1 className='gradient__text'>Conoce nuestros cursos virtuales y presenciales</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog01} date='Viernes 5 al domingo 8 de Febrero' title='Curso de Formación de Base del Método Silva'
                        cursodata='El Método Silva reúne un conjunto de técnicas que desarrollan las capacidades innatas, pero sin ejercitar, que tiene el ser humano. Cualquiera sea el punto de partida del alumno, su desarrollo, su nivel intelectual, o su edad, obtendrá al finalizar el curso un importante incremento en el uso de dichas capacidades y podrá aplicarlas para ayudarse a resolver los problemas de la vida cotidiana, mejorando así en gran medida su calidad de vida.'

                    />
                </div>
                <div className="gpt3__blog-container_groupB">
                    <a href=""><Article imgUrl={blog02} date='Jan 4, 2022' title='Dinámica del Método Silva' cursodata='Su práctica te convertirá en un imán que te permitirá atraer a tu vida lo que deseas, Tiene técnicas nuevas para la formulación de metas, manejo del estrés y de atraer el éxito.' /></a>
                    <a href=""><Article imgUrl={blog03} date='Jan 4, 2022' title='La fuerza transformadora de la Autoestima' cursodata='Nos enseña recursos para aplicar en lo cotidiano. Es un conjunto de propuestas basadas en la relajación, visualización, consciencia plena y nuevos lenguajes' /></a>
                    <a href=""> <Article imgUrl={blog04} title='Reunión de Graduados' cursodata='Reunión semanal que permite ejercitar lo aprendido, profundizar distintos temas que hacen al mejoramiento personal.
                    Incluye, además, la ayuda mútua en proyectos comunes de salud y otras áreas.' /></a>
                    <a href=""> <Article imgUrl={blog05} title='Coaching personalizado' cursodata='Encuentro virtual o presencial para recibir atención personalizada referente el crecimiento y mejoramiento de la calidad de vida.' /></a>
                </div>
            </div>
        </div>
    )
}

export default Blog
