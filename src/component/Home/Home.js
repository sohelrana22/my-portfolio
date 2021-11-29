import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import man from './../assets/Screenshot_1.png';

const Home = () => {
  return (
   <div>
      <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                <a target="_blank" href="https://www.facebook.com/sohelrana.rana.56679/">  <li>
                    <FaFacebookF className="headerIcon" />
                  </li></a>
                <a target="_blank" href="https://github.com/sohelrana22">  <li>
                    <FaGithub className="headerIcon" />
                  </li></a>
                  <a target="_blank" href="https://www.linkedin.com/in/md-sohel-9658241b6/">  <li>
                    <FaLinkedin className="headerIcon" />
                  </li></a>
                  <a target="_blank" href="https://twitter.com/MdSohel57343055">  <li>
                    <FaTwitter className="headerIcon" />
                  </li></a>
                </ul>
                <div className="profile-details-name">
                        <span className="primary-text">
                            Hello I'm <span className="highlighted-text"> Md. Sohel Rana</span>
                        </span>
                    </div>
                    <div className="profile-details-roles">
                        <h1>
                            <Typical
                                loop={Infinity}
                                steps={[
                                    "Full Stack Developer💻",
                                    1000,
                                    "React Developer 💪",
                                    1000,
                                    "Front-end Developer 👨‍💻",
                                    1000,
                                ]}
                                wrapper="p"
                            />
                        </h1>
                        <span className="profile-role-tagline">
                        My name is Sohel Rana, I am 22 years old, still a student, I am a self-motivated, driven, and conscientious person who wants to have a successful career. 
                        </span>
                    </div>
                    <div className="profile-options d-lg-flex flex-row align-items-center justify-content-center btn-div">
                        <div>
                            <button className="btn primary-btn"><Link to="/contact">Hire me</Link></button>
                        </div>
                        <div>
                            <a
                                href="Sohel_Resume.pdf"
                                download="Sohel_Resume.pdf"
                            >
                                <button className="btn highlighted-btn">Download Resume</button>
                            </a>
                        </div>
                    </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img className="mt-5" src={man} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* other */}
    <Projects></Projects>
      <Services></Services>
      <Skills></Skills>
      <About></About>
      <Contact></Contact>
   </div>
  );
};

export default Home;