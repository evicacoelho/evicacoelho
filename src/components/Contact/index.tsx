import React from 'react'

export const Contact: React.FC = () => {
    return (
        <div className="contact wow fadeInUp" data-wow-delay="0.1s" id="contact">
            <div className="container-fluid">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4"></div>
                        <div className="col-md-8">
                            <div className="contact-form">
                                <div id="success"></div>
                                <form name="sentMessage" id="contactForm" noValidate={true}>
                                    <div className="control-group">
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" required={true} data-validation-required-message="Please enter your name" />
                                        <p className="help-block"></p>
                                    </div>
                                    <div className="control-group">
                                        <input type="email" className="form-control" id="email" placeholder="Your Email" required={true} data-validation-required-message="Please enter your email" />
                                        <p className="help-block"></p>
                                    </div>
                                    <div className="control-group">
                                        <input type="text" className="form-control" id="subject" placeholder="Subject" required={true} data-validation-required-message="Please enter a subject" />
                                        <p className="help-block"></p>
                                    </div>
                                    <div className="control-group">
                                        <textarea className="form-control" id="message" placeholder="Message" required={true} data-validation-required-message="Please enter your message"></textarea>
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
            </div>
        </div>
    )
}