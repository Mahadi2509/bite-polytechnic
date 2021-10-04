import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.jpg'

const Header = () => {
    return (
        <div className="bg-success py-4 d-flex align-items-center justify-content-around">
            <div className="d-flex align-items-center">
                <img className="rounded-circle" width="50px" height="50px" src={logo} alt="" />
                <h2 className="text-white ms-3">Bite Polytechnic</h2>
            </div>
            <div className="text-white">
                <NavLink activeStyle={{ backgroundColor: 'black', borderRadius: '10px', padding: '5px 20px' }} className="text-white fs-5 fw-bold ms-5 text-decoration-none" to="/home">Home</NavLink>
                <NavLink activeStyle={{ backgroundColor: 'black', borderRadius: '10px', padding: '5px 20px' }} className="text-white fs-5 fw-bold ms-5 text-decoration-none" to="/courses">Courses</NavLink>
                <NavLink activeStyle={{ backgroundColor: 'black', borderRadius: '10px', padding: '5px 20px' }} className="text-white fs-5 fw-bold ms-5 text-decoration-none" to="/myclass">My Class</NavLink>
                <NavLink activeStyle={{ backgroundColor: 'black', borderRadius: '10px', padding: '5px 20px' }} className="text-white fs-5 fw-bold ms-5 text-decoration-none" to="/about">About Us</NavLink>
            </div>
        </div>
    );
};

export default Header;