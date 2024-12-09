import React from "react";
import portfolio1 from "../../visuals/portfolio-1.jpg";
import portfolio2 from "../../visuals/portfolio-2.jpg";
import portfolio3 from "../../visuals/portfolio-3.jpg";
import portfolio4 from "../../visuals/portfolio-4.jpg";
import portfolio5 from "../../visuals/portfolio-5.jpg";
import portfolio6 from "../../visuals/portfolio-6.jpg";
import './style.css'

export const Portfolio: React.FC = () => {
    return (
        <div className="portfolio" id="portfolio">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>My Portfolio</p>
                    <h2>My Excellent Portfolio</h2>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ul id="portfolio-filter">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-1">Web Design</li>
                            <li data-filter=".filter-2">Mobile Apps</li>
                            <li data-filter=".filter-3">Game Dev</li>
                        </ul>
                    </div>
                </div>
                <div className="row portfolio-container">
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src={portfolio1} alt="Image"/>
                            </div>
                            <div className="portfolio-text">
                                <h3>eCommerce Website</h3>
                                <a className="btn" href="visuals/portfolio-1.jpg" data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src={portfolio2} alt="Image"/>
                            </div>
                            <div className="portfolio-text">
                                <h3>Product Landing Page</h3>
                                <a className="btn" href="visuals/portfolio-2.jpg" data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src={portfolio3} alt="Image"/>
                            </div>
                            <div className="portfolio-text">
                                <h3>JavaScript quiz game</h3>
                                <a className="btn" href="visuals/portfolio-3.jpg" data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src={portfolio4} alt="Image"/>
                            </div>
                            <div className="portfolio-text">
                                <h3>JavaScript drawing</h3>
                                <a className="btn" href="visuals/portfolio-4.jpg" data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp" data-wow-delay="0.8s">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src={portfolio5} alt="Image"/>
                            </div>
                            <div className="portfolio-text">
                                <h3>Social Mobile Apps</h3>
                                <a className="btn" href="visuals/portfolio-5.jpg" data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp" data-wow-delay="1s">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src={portfolio6} alt="Image"/>
                            </div>
                            <div className="portfolio-text">
                                <h3>Company Website</h3>
                                <a className="btn" href="visuals/portfolio-6.jpg" data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}