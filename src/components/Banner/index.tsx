import React from 'react'
import './style.css'

export const Banner: React.FC = () => {
    return (
        <div className="banner wow zoomIn" data-wow-delay="0.1s">
            <div className="container">
                <div className="section-header text-center">
                    <p>Reasonable Price</p>
                    <h2>Get A <span>Special</span> Price</h2>
                </div>
                <div className="container banner-text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. 
                    </p>
                    <a className="btn" href="">Pricing Plan</a>
                </div>
            </div>
        </div>
    )
}