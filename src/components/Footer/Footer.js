import React from 'react';
import logo from '../../images/logo.jpg';
import './Footer.css'
const Footer = () => {
    const whitesmoke = {
        color: 'whitesmoke',

    }
    return (
        <div style={{ backgroundColor: 'rgb(101, 160, 119)', paddingTop: '40px' }}>
            <div className="d-lg-flex align-items-center justify-content-around">
                <div className="d-flex">
                    <img className="rounded-circle" width="30px" height="30px" src={logo} alt="" />
                    <h5 style={whitesmoke} className="ms-2"><strong>Bite</strong> Polytechnic</h5>
                </div>
                <div className="footer-btn">
                    <a href="/about">About Us</a>
                    <a href="/conditions">Terms and Conditions</a>
                    <a href="/privacy">Privacy Policy</a>
                </div>
            </div>
            <div className="pt-4 d-flex align-items-center justify-content-around">
                <div style={{ marginLeft: '-4%' }}>
                    <p style={whitesmoke}><a><i className="fas fa-envelope"></i> bite-polytechnic@gmail.com</a></p>
                    <p style={whitesmoke}><a><i className="fas fa-phone-alt"></i> +88 015-45 478587</a></p>
                </div>
                <div className="d-flex">
                    <a><i style={{ color: 'whitesmoke' }} className="fab fa-facebook-square fs-2 me-3"></i></a>
                    <a><i style={{ color: 'whitesmoke' }} className="fab fa-instagram fs-2 me-3"></i></a>
                    <a><i style={{ color: 'whitesmoke' }} className="fab fa-linkedin fs-2 me-3"></i></a>
                    <a><i style={{ color: 'whitesmoke' }} className="fab fa-youtube fs-2 me-3"></i></a>
                </div>
            </div>
            <p style={{ color: 'whitesmoke', textAlign: 'center', paddingBottom: '20px', marginBottom: '0' }}>Copyright © 2021 bite-polytechnic.com</p>
        </div>
    );
};

export default Footer;