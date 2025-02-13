import React from 'react';
import "./contact.css"

function Contact(){
    return (
        <sections className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <div className="contact__info">
                        <div className="contact__card">
                            <div className="bx bx-mail-send contact__card-icon"></div>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">ilia.ishutkin@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </sections>
    )
}

export default Contact