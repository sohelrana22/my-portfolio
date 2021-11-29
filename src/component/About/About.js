import React from "react";
import me from './../assets/Screenshot_2.png'

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "My interest in web development started back in 2021, I use JavaScript and React.js to create high-end interactive experiences and products.",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Md.Sohel Rana" },
    { id: 2, title: "Email:", text: "sohel252646@gmail.com" },
    { id: 3, title: "Phone:", text: "+8801796737590" },
    { id: 4, title: "Address", text: "Thakurgaon, Rangpur, Bangladesh" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src={me} alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
               I am Md.Sohel Rana, a junior Full-Stack Web Developer from the ground up from concept, navigation, layout and programming to UX.
              </div>
              <div className="about__info-p2">
               Skilled in Front-End technologies such as HTML5, CSS3, JavaScript, React, Bootsrap, Material UI, and SASS. Back-End technologies such as Node.JS, Express.JS and MongoDB.
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;