import React from 'react';
import Typical from "react-typical";
import './Footer.css'


const Footer = () => {
    return (
        <div className='footer-containers'>
            <div className="footer-parent  d-flex align-items-center justify-content-center mx-3">
                <h3 className='text-light mt-lg-5'> © All Right Reserved by <span className='text-danger'> <Typical
                loop={Infinity}
                steps={[
                    "MD. SOHEL RANA❤️ ",
                    1000,
                    "❤️ ",
                    1000,
                ]}
                wrapper="p"
            /> </span></h3>
            </div>
        </div>
    );
};

export default Footer;