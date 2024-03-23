import React from 'react';
import "./footer.css"

function Footer(){
    return (
        <footer className="footer">
            <div className="foooter__container container">
                <h1 className="footer__title">Belphegor</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__link">Home</a>
                    </li>

                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>


                </ul>
            </div>
        </footer>
    )
}

export default Footer