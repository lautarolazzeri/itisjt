import React from 'react';
import './article.css';

function Article({ imgUrl, date, title, cursodata }) {
    return (
        <div className='gpt3__blog-container_article'>
            <div className="gpt3__blog-container_article-image">
                <img src={imgUrl} alt="Cursos-del-metodo-silva" />
            </div>
            <div className="gpt3__blog-container_article-content">
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p className='cursodata'>{cursodata}</p>
                <p className='gradient__text readmore'>Leer más</p>
            </div>
        </div>
    )
}

export default Article
