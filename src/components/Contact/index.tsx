import React from 'react'
import contactImage from '../../visuals/contact.jpg'



export const Contact: React.FC = () => {
    return (
        <div className="container-fluid contact">
            <div className="row align-items-center">
                <div className="col-md-3">
                    <img src={contactImage} alt="Contact" className="contact-image" width={400}/>
                </div>
                <div className="col-md-6">
                    <div className="contact-form">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" noValidate>
                            <div className="control-group">
                                <input type="text" className="form-control" id="name" placeholder="Your Name" required data-validation-required-message="Please enter your name" />
                                <p className="help-block"></p>
                            </div>
                            <div className="control-group">
                                <input type="email" className="form-control" id="email" placeholder="Your Email" required data-validation-required-message="Please enter your email" />
                                <p className="help-block"></p>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control" id="subject" placeholder="Subject" required data-validation-required-message="Please enter a subject" />
                                <p className="help-block"></p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control" id="message" placeholder="Message" required data-validation-required-message="Please enter your message"></textarea>
                                <p className="help-block"></p>
                            </div>
                            <div>
                                <button className="btn" type="submit" id="sendMessageButton">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}