import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">Contact our president at pds.president@gmail.com</p>
                <a target="_blank" className="btn btn-secondary" href="https://wixsite.us17.list-manage.com/subscribe?u=f8ef4022e6e3bfe8bc37dc2dd&id=32e892d4f5">SIGN UP FOR OUR EMAILS!</a>
                <p className="footer-subscription-text-2">Text @ufpds2020 to 81010 to stay updated!</p>
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