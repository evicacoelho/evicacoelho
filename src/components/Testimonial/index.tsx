import React, { useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import testimonial1 from '../../visuals/testimonial-1.jpg';
import testimonial2 from '../../visuals/testimonial-2.jpg';
import testimonial3 from '../../visuals/testimonial-3.jpg';
import './style.css'

const resposive = {
    superLargeDesktop: {
        // screens larger than 1024px
        breakpoint: { max: 4000, min: 1024 },
        items: 2,
    },
    desktop: {
        // screens between 1024px and 600px
        breakpoint: { max: 1024, min: 600 },
        items: 1,
    },
    tablet: {
        // screens between 600px and 0px
        breakpoint: { max: 600, min: 0 },
        items: 1,
    },
};

export const Testimonial: React.FC = () => {
    return (
        <div className="testimonial" id="review">
            <div className="container">
                <Carousel
                    responsive={resposive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={10000}
                    showDots={true}
                    containerClass='testimonials-carousel'
                >
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src={testimonial2} alt="Image" />
                        </div>
                        <div className="testimonial-text">
                            <p>
                                I have worked with Emanuelle and can confidently say she is an exceptional team player. Emanuelle has consistently demonstrated her ability to handle challenging tasks well beyond her level, and she has done so with remarkable skill and grace. Her dedication to her work and willingness to take on difficult challenges make her a valuable asset to any team. Emanuelle's positive attitude and strong work ethic make her a pleasure to work with, and I would highly recommend her to any organization.
                            </p>
                            <h3>Pedro Kunz</h3>
                            <h4>Lead Backend Software Engineer</h4>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src={testimonial3} alt="Image" />
                        </div>
                        <div className="testimonial-text">
                            <p>
                                I had the pleasure of working closely with Emanuelle Coelho during her tenure at Levee, where she began as an intern in our DevOps team and quickly proved herself to be an invaluable asset. Emanuelle's transition to a full-time role was a testament to her talent, dedication, and professionalism.

                                Emanuelle is a highly skilled and engaged professional who consistently seeks out the best ways to support our business objectives through meaningful contributions. Her approach to development work is not just about coding but understanding how her efforts align with the broader company strategy.
                                What sets Emanuelle apart is her proactive involvement in meetings and her ability to articulate how her work directly impacts our organizational goals. She consistently demonstrated a strong sense of ownership and initiative, always striving to deliver high-quality results that contribute to the success of our team and company.
                                I highly recommend Emanuelle Coelho for her technical expertise, enthusiasm, and her strategic mindset. She would be a valuable addition to any team seeking a talented developer who can translate technical initiatives into tangible business value.
                            </p>
                            <h3>Lilyan Fernandes</h3>
                            <h4>Senior Information Technology Manager</h4>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src={testimonial1} alt="Image" />
                        </div>
                        <div className="testimonial-text">
                            <p>
                                Emanuelle is a rising star. She is someone who will accomplish any challenge and surpass any expectation. She is a highly committed individual and a voracious learner.
                            </p>
                            <h3>Jacob Rosenbloom</h3>
                            <h4>Investor</h4>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}
