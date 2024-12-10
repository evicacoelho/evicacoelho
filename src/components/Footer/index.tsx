import React from 'react'
import './style.css'

export const Footer: React.FC = () => {
    return (
        <div className="footer wow fadeIn" data-wow-delay="0.3s" id="footer">
            <div className="container-fluid">
                <div className="container">
                    <div className="footer-info">
                        <h2>Emanuelle Coelho</h2>
                        <h3>CSE 04, Brasília/DF, Brasil</h3>
                        <div className="footer-menu">
                            <p>+55 61 9 8117 5488</p>
                            <p>evicacoelho@gmail.com</p>
                        </div>
                        <div className="footer-social">
                            <a href="https://facebook.com/evicacoelho"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://instagram.com/evicacoelho"><i className="fab fa-instagram"></i></a>
                            <a href="https://linkedin.com/in/evicacoelho"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://github.com/evicacoelho"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div className="container copyright">
                    <p>&copy; <a href="#">Developer Portfolio</a>, All Right Reserved</p>
                </div>
            </div>
        </div>
    )
}