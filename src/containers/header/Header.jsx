import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


function Header() {
return (
    <div className='gpt3__header section__padding-header' id='home'>
    <div className="gpt3__header-content">
            <h1 className='gradient__text'>Bienvenido al Método Silva de control Mental</h1>
            <p>En todo el mundo, la gente está avanzando hacia una forma de vida más consciente. Están listos para desarrollar su potencial, para superar los desafíos financieros, profesionales y de salud. Están listos para vivir una vida armoniosa y productiva.</p>
            <a href="#blog"><button className='button-header'>Ver cursos</button></a>
        <div className="gpt3__header-content__people">
                <img src={people} alt="graduados-del-metodo-silva" />
                <p>Millones de usuarios se han unido a nosotros</p>
        </div>
    </div>
        <div className="gpt3__header-image">
            <img src={ai} alt="ai" />
        </div>
</div>
)
}

export default Header