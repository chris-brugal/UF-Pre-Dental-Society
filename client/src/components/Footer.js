import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">Sign up to be added to our Listserv!</p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email"
                        className="footer-input"/>
                        <Button className="btn btn-light">Submit</Button>
                    </form>
                </div>
                <p className="footer-subscription-text">Contact our president at pds.president@gmail.com</p>
            </section>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                        to={{ pathname: "https://www.facebook.com/UFPDS/" }}
                        target='_blank'
                        aria-label='Facebook'
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram"
                        to={{ pathname: "https://www.instagram.com/predentalsociety/"}}
                        target='_blank'
                        aria-label='Instagram'
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer