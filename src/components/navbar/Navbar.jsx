import React, { useState } from 'react';
import logo from '../../assets/logo-1.png';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = () => (
    <>
        <p><a href="#home">Inicio</a></p>
        <p><a href="#whpt3">¿Qué es?</a></p>
        <p><a href="#features">Información</a></p>
        <p><a href="#blog">Cursos</a></p>
        <p><a href="#possibility">Instructora</a></p>
        <p><a href="#footer">Contacto</a></p>
    </>
)


function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className='gpt3__navbar'>
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} />
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu
                ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <Menu />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
