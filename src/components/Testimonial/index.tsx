import React from 'react';
import testimonial1 from '../../visuals/testimonial-1.jpg';
import testimonial2 from '../../visuals/testimonial-2.jpg';
import testimonial3 from '../../visuals/testimonial-3.jpg';
import './style.css'

export const Testimonial: React.FC = () => {
    return (
        <div className="testimonial" id="review">
            <div className="container">
                <div className="owl-carousel testimonials-carousel">
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src={testimonial1} alt="Image" />
                        </div>
                        <div className="testimonial-text">
                            <p>
                                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum dolor sit amet consec adipis elit.
                            </p>
                            <h3>Customer Name</h3>
                            <h4>Profession</h4>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src={testimonial2} alt="Image" />
                        </div>
                        <div className="testimonial-text">
                            <p>
                                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum dolor sit amet consec adipis elit.
                            </p>
                            <h3>Customer Name</h3>
                            <h4>Profession</h4>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src={testimonial3} alt="Image" />
                        </div>
                        <div className="testimonial-text">
                            <p>
                                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum dolor sit amet consec adipis elit.
                            </p>
                            <h3>Customer Name</h3>
                            <h4>Profession</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
