import React from 'react'
import './style.css'

export const Experience: React.FC = () => {
    return (
        <div className="experience" id="experience">
            <div className="container">
                <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>My Resume</p>
                    <h2>Working Experience</h2>
                </header>
                <div className="timeline">
                    <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <div className="timeline-date">2024 - Today</div>
                            <h2>Software Delivery Intern</h2>
                            <h4>Tabia Health, Sarasota, FL</h4>
                            <p>
                                Responsible for the direct delivery of data analisys for clients as well as receiving development demands for the company's product using Java with Maven:Spring-Boot.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <div className="timeline-date">2023 - 2024</div>
                            <h2>Product Manager Jr.</h2>
                            <h4>LEVEE, Dover, DE</h4>
                            <p>
                                Leadership in the development and implementation of HR SAAS products aimed at enterprise companies. Using Artificial Intelligence, the solution developed focused on optimizing the recruitment process and predicting turnover, driving strategic results.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                        <div className="timeline-text">
                        <div className="timeline-date">2022 - 2023</div>
                            <h2>Product Manager Jr.</h2>
                            <h4>LEVEE, Dover, DE</h4>
                            <p>
                                Responsible for identifying, diagnosing and resolving technical issues faced by end customers on the SaaS platform, ensuring an optimized user experience and minimizing operational interruptions.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <div className="timeline-date">2023 - 2024</div>
                            <h2>Local Committee President</h2>
                            <h4>AIESEC in Brasília, Brasília, DF</h4>
                            <p>
                                I acted as the person ultimately responsible for the legal, managerial and representative representation of a non-profit entity in the third sector. Ultimately responsible for the entity's financial and numerical results, with the responsibility of defining the direction and implementation of actions that result in effective results.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <div className="timeline-date">2022 - 2023</div>
                            <h2>Local Committee Vice-President</h2>
                            <h4>AIESEC in Brasília, Brasília, DF</h4>
                            <p>
                                Responsible for managing and developing members and managers of sales, customer experience and customer success teams with the purpose of developing the leadership of such volunteers and generating successful service contracts with consumers.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <div className="timeline-date">2020 - 2022</div>
                            <h2>Freelance Nature Sciences Teacher</h2>
                            <h4>Self employed, Brasília, DF</h4>
                            <p>
                                I created and defined customized lesson plans in biology, physics, chemistry and mathematics for students preparing for entrance exams and/or the Brazilian National High School Exam, welcoming neurodivergent students and students with diverse backgrounds.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <div className="timeline-date">2016 - 2019</div>
                            <h2>Intern: project researcher</h2>
                            <h4>Laboratory of Computational Theoretical Biophysics ICB UnB, Brasília, DF</h4>
                            <p>
                            Using a genetic algorithm written in Python, statistical thermodynamics and information theory, we create systems that predict the structure of cytoplasmic globular proteins in silico.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}