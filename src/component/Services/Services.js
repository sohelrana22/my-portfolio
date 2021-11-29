import React from "react";
import {
  FaReact,
  FaCode,
  FaBattleNet,
  FaPeopleArrows,
  FaPen,
  FaChild,
} from "react-icons/fa";
const Services = () => {
    const newLocal = "I feel that I should be hired by you given my excellent projects along with the skills and experience the company is looking for. I have the experience and the attitude to be a web developer.";
  const [header] = React.useState({
    
    subHeading: "My Services",
    text:
      newLocal,
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaReact className="commonIcons" />,
      heading: "WEB DEVELOPMENT",
      text:
        "I like to code things from scratch and enjoy bringing ideas to life in the browser.",
    },
    {
      id: 2,
      icon: <FaPen className="commonIcons" />,
      heading: "CREATIVE DESIGN",
      text:
        "I value simple content structure, clean design patterns and thoughtful interactions.",
    },
    {
      id: 3,
      icon: <FaCode className="commonIcons" />,
      heading: "CLEAN CODE",
      text:
        "I always try to code clearly. Because it is convenient to understand later.",
    },
    {
      id: 4,
      icon: <FaChild className="commonIcons" />,
      heading: "USER INTERFACE",
      text:
        "I genuinely care about people and love helping fellow designers work on their craft.",
    },
    {
      id: 5,
      icon: <FaPeopleArrows className="commonIcons" />,
      heading: "USER EXPERIENCE",
      text:
        "I've done a lot of work so far All the customers I have are saying very well.",
    },
    {
      id: 6,
      icon: <FaBattleNet className="commonIcons" />,
      heading: "FAST SUPPORT",
      text:
        "I truly care about individuals and love helping individual creators work on their art.",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;