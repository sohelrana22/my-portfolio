import React from 'react';
import sectionBg from './../../component/assets/sectionBg.png';
import project from './../../component/assets/all-devices-black.png';
import project1 from './../../component/assets/all-devices-black (1).png';
import project2 from './../../component/assets/all-devices-black (2).png';


const Projects = () => {
    return (
        <div  style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }}>
            <h1 className='text-center mb-5 pt-5 project-header'>My Projects</h1>
        <div className='d-flex'>
            <div className='image col-6 pb-5'>
                <img className='project-img' src={project} alt="" />
            </div>
           <div className='text-white'>
               <h2>Car House: Car shop-based website</h2>
               <p>This is a car shop website.
                    A full-stack website that has Firebase and React-Router.React has been used in this site to develop its UI. I uploaded all the data from MongoDB.
                    It has a different dashboard for admin and users.
                    If a user is not registered, he has to register first to book or check out their orders.
                </p>
                 <div className='link'>
                 <a target="_blank" href="https://car-house-68ee5.web.app/">Live-Site</a>
                    <a target="_blank" href="https://github.com/sohelrana22/client-site-car">Client-Site-Code</a>
                    <a target="_blank" href="https://github.com/sohelrana22/server-site-car">Server-Site-Code</a>
                 </div>
           </div>
        </div>
        <div className='d-flex'>
        <div className='image col-6 pb-5'>
               <img className='project-img' src={project1} alt="" />
            </div>
            <div className='text-white'>
               <h2>Al-Karim Travel Agency: Travel agency-based website</h2>
               <p>This is a travel agency website.
                This site has been created using React JS, JSX, React-Bootstrap, Vanilla CSS, Firebase, Node JS, Express JS, MongoDB for the database.
                This website has a logged-in method with an Email & Password and a direct Google Sign-in method.

                </p>
                 <div className='link'>
                 <a target="_blank" href="https://al-karim-travel-agencies.web.app/">Live-Site</a>
                    <a target="_blank" href="https://github.com/sohelrana22/client-site-travel">Client-Site-Code</a>
                    <a target="_blank" href="https://github.com/sohelrana22/server-travel">Server-Site-Code</a>
                 </div>
           </div>
        </div>
        <div className='d-flex'>
        <div className='image col-6 pb-5'>
               <img className='project-img' src={project2} alt="" />
            </div>
            <div className='text-white'>
               <h2>Al-Karim Hospital: A medical care-based website(Frontend)</h2>
               <p>This is a front-end-based hospital website.
                    This site has a login and register authentication system by firebase.

                </p>
                 <div className='link'>
                 <a target="_blank" href="https://fir-authentication-97008.web.app/">Live-Site</a>
                    <a target="_blank" href="https://github.com/sohelrana22/client-hospital">Code-Link</a>
                 </div>
           </div>
        </div>
        </div>
    );
};

export default Projects;