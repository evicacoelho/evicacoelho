import React, { useState } from 'react';
import contactImage from '../../visuals/contact.svg';

export const Contact: React.FC = () => {
    const formInitialDetals = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };

    const [formDetails, setFormDetails] = useState(formInitialDetals);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState<{ success?: boolean; message?: string }>({});

    const onFormUpdate = (category: keyof typeof formInitialDetals, value: string) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setButtonText("Sending...");
        try {
            let response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(formDetails),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            let result = await response.json();
            setButtonText("Send");
            setFormDetails(formInitialDetals);

            if (result.code === 200) {
                setStatus({ success: true, message: "Message sent successfully" });
            } else {
                setStatus({ success: false, message: "Something went wrong, please try again later." });
            }
        } catch (error) {
            console.error("Error:", error);
            setButtonText("Send");
            setStatus({ success: false, message: "Network error. Please try again later." });
        }
    };

    return (
        <div className="container-fluid contact">
            <div className="row align-items-center">
                <div className="col-md-3">
                    <img src={contactImage} alt="Contact" className="contact-image" width={400} />
                </div>
                <div className="col-md-6">
                    <div className="contact-form">
                        <form name="sentMessage" id="contactForm" noValidate onSubmit={handleSubmit}>
                            <div className="control-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    required
                                    value={formDetails.name}
                                    onChange={(e) => onFormUpdate("name", e.target.value)}
                                />
                            </div>
                            <div className="control-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Your Email"
                                    required
                                    value={formDetails.email}
                                    onChange={(e) => onFormUpdate("email", e.target.value)}
                                />
                            </div>
                            <div className="control-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="subject"
                                    placeholder="Subject"
                                    required
                                    value={formDetails.subject}
                                    onChange={(e) => onFormUpdate("subject", e.target.value)}
                                />
                            </div>
                            <div className="control-group">
                                <textarea
                                    className="form-control"
                                    id="message"
                                    placeholder="Message"
                                    required
                                    value={formDetails.message}
                                    onChange={(e) => onFormUpdate("message", e.target.value)}
                                />
                            </div>
                            <div>
                                <button className="btn" type="submit" id="sendMessageButton">
                                    {buttonText}
                                </button>
                                {status.message && (
                                    <div className="row">
                                        <p className={status.success === false ? "danger" : "success"}>
                                            {status.message}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
