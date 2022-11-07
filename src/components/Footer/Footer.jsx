import React from 'react';
import './Footer.css';

function Footer () {

    return (
        <section className="footer">
            <hr className="footer-seperator"/>

            <section className="footer-info">
                <section className="footer-info-left">
                    <section className="footer-info__name">
                        Lloyd Jusayan Perez Jr.
                        </section>

                </section>
                <section className="footer-info-center">
                    <section className="footer-info__email">lloydjperez@gmail.com</section>

                </section>
                <section className="footer-info-right">
                    <section className="footer-info__number">
                        (610)704-2237
                    </section>

                </section>
            </section>
            {/* <section>
                <a href="https://www.linkedin.com/in/lloyd-j-perez-jr/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </section> */}
            
            <hr className="footer-seperator"/>
        </section>
    )
}

export default Footer;