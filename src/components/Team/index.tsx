import React from 'react'
import team1 from '../../visuals/team-1.jpg';
import team2 from '../../visuals/team-2.jpg';
import team3 from '../../visuals/team-3.jpg';
import team4 from '../../visuals/team-4.jpg';
import './style.css'

export const Team: React.FC = () => {
    return (
        <div className="team" id="team">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>My Team</p>
                    <h2>Expert Team Members</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.0s">
                        <div className="team-item">
                            <div className="team-img">
                                <img src={team1} alt="Image"/>
                            </div>
                            <div className="team-text">
                                <h2>Mollie Ross</h2>
                                <h4>Web Designer</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consec adipis elit. Etiam accum lacus
                                </p>
                                <div className="team-social">
                                    <a className="btn" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="team-item">
                            <div className="team-img">
                                <img src={team2} alt="Image"/>
                            </div>
                            <div className="team-text">
                                <h2>Dylan Adams</h2>
                                <h4>Web Developer</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consec adipis elit. Etiam accum lacus
                                </p>
                                <div className="team-social">
                                    <a className="btn" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="team-item">
                            <div className="team-img">
                                <img src={team3} alt="Image"/>
                            </div>
                            <div className="team-text">
                                <h2>Jennifer Page</h2>
                                <h4>Apps Designer</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consec adipis elit. Etiam accum lacus
                                </p>
                                <div className="team-social">
                                    <a className="btn" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="team-item">
                            <div className="team-img">
                                <img src={team4} alt="Image"/>
                            </div>
                            <div className="team-text">
                                <h2>Josh Dunn</h2>
                                <h4>Apps Developer</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consec adipis elit. Etiam accum lacus
                                </p>
                                <div className="team-social">
                                    <a className="btn" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}