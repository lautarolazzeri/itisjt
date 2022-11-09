import React from 'react';
import { Feature } from '../../components';
import './features.css';
const featuresData = [
    {
        title: 'Una organización con 50 años',
        text: 'Creemos que la clave para la siguiente etapa de la evolución humana reside en el potencial oculto de la mente. Nuestra misión es despertar este potencial para todos en el planeta.'
    },
    {
        title: 'Hazte parte del Método Silva',
        text: 'Estamos al frente de Método Silva en Argentina hace COMPLETAR AÑOS. Los graduados de Silva se vuelven entusiastas del Método y le damos la bienvenida abiertamente a nuestra familia.'
    },
    {
        title: 'La ciencia detrás del Método Silva',
        text: 'Hemos investigado durante casi 50 años, experimentando y colaborando con destacados científicos, investigadores y líderes de crecimiento personal.'
    },
    {
        title: 'Graduados de Silva en todo el mundo',
        text: 'Miles de personas en todo el mundo han experimentado el poder de la mente y han aprendido a usarlo para mejorar su vida.'
    },
]

function Features({ title, text }) {
    return (
        <div className='gpt3__features section__padding' id='features'>
            <div className="gpt3__features-heading">
                <h1 className='gradient__text'>“La felicidad está dentro de nosotros mismos y es el estado natural de una mente bien dirigida”
                </h1>
                <p>Jose Silva.</p>
            </div>

            <div className="gpt3__features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Features
