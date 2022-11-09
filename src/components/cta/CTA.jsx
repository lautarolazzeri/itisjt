import React from 'react';
import './cta.css';

function Cta() {
    return (
        <div>
            <div className="gpt3__cta">
                <div className="gpt3__cta-content">
                    <p>¿Tienes dudas sobre el Metodo?</p>
                    <h3>Envíanos un mensaje y te responderemos a la brevedad!</h3>
                </div>
                <div className="gpt3__cta-btn">
                    <button type='button'> <a href=""> Enviar mensaje</a></button>
                </div>
            </div>
        </div>
    )
}

export default Cta
