import React, { useEffect } from 'react';
import heroImage from '../../visuals/hero.png'
import './style.css'
import Typed from 'typed.js';

export const Hero: React.FC = () => {
    useEffect(() => {
        const heroText = document.querySelector('.hero .hero-text h2');
        if (heroText) {
            const typedStrings = document.querySelector('.hero .hero-text .typed-text')?.textContent;
            if (typedStrings) {
                new Typed('.hero .hero-text h2', {
                    strings: typedStrings.split(', '),
                    typeSpeed: 150,
                    backSpeed: 20,
                    loop: true,
                });
            }
        }
    });

    return (
        <div className="hero" id="home">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6">
                        <div className="hero-content">
                            <div className="hero-text">
                                <h1>Emanuelle Coelho</h1>
                                <div className="typed-text">
                                    <h2>Backend Developer, Biologist, Leader</h2>
                                </div>
                            </div>
                            <div className="hero-btn">
                                <a className="btn" href="https://wa.me/5561981175488">Contact Me</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 d-none d-md-block">
                        <div className="hero-image">
                            <img src={heroImage} alt="Hero"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
