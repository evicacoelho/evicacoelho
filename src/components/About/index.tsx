import React from 'react'
import aboutImg from '../../visuals/about.jpg'
import './style.css'

export const About: React.FC = () => {
    return (
        <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src={aboutImg} alt="About"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-header text-left">
                                <p>Learn About Me</p>
                                <h2>Biologist, developer, leader.</h2>
                            </div>
                            <div className="about-text">
                                <p>I started my career in the market through volunteering, expanded my horizons with my degree focused on computational biophysics, added more to my CV with my volunteer work experience and today as a Project Manager (Product Owner) I have experience in developing agile processes, prioritization , product validation and problem resolution.</p>
                                <p>I work by guiding myself and my colleagues towards problem solving and work efficiency, where I stand out for fluid, clear and assertive communication where I can connect market demands, customer pain and what the product represents with technical language and the cadence of development methodologies, whether agile or traditional.</p>
                                <p>I develop my work with purpose and I like to impact everyone that my work involves.</p>
                            </div>
                            <div className="skills">
                                <div className="skill-name">
                                    <p>Backend Development</p><p>95%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <div className="skill-name">
                                    <p>Web Development</p><p>70%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <div className="skill-name">
                                    <p>Project Management</p><p>90%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <div className="skill-name">
                                    <p>DevOps</p><p>50%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <div className="skill-name">
                                    <p>Software Infrastructure</p><p>60%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <div className="skill-name">
                                    <p>Data Science</p><p>90%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                            <a className="btn" href="https://linkedin.com/in/evicacoelho">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}