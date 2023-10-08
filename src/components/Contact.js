import React from "react";
import "./Contact.css";

export default function Contact() {
    return (
        <div className="contact-container">
            <h2>Contact Information</h2>
            <div className="contact-items">
                <div className="contact">
                    <div className="card">
                        <h3 className="contact-title">Address </h3>
                        <p className="contact-description">
                            1234 Main Street, XYZ City, ABC Country
                        </p>
                        <p className="contact-description">
                            56789 Main Street, LMN City, OPQ Country
                        </p>
                    </div>
                </div>

                <div className="contact">
                    <div className="card">
                        <h3 className="contact-title">Email</h3>
                        <p className="contact-description">
                            123@email.com
                        </p>
                        <p className="contact-description">
                            123@email.com
                        </p>
                        <p className="contact-description">
                            123@email.com
                        </p>
                    </div>
                </div>
                <div className="contact">
                    <div className="card">
                        <h3 className="contact-title">Phone Number</h3>
                        <p className="contact-description">
                            +001 1234567890
                        </p>
                        <p className="contact-description">
                            +92 1234567890
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
