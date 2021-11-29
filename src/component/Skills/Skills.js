import React from 'react';
import sectionBg from './../../component/assets/sectionBg.png';

const Skills = () => {
    return (
        <div className='pb-5' style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }}>
            <h1 className='text-white text-center pt-5'>My Skills</h1>
            <div className='skills mx-auto'>
                <div className='skill'>
                    <div className='skill-name'>HTML</div>
                    <div className='skill-bar'>
                        <div className='skill-per' per="90%" style={{maxWidth: '90%'}}></div>
                    </div>
                </div>
                <div className='skill'>
                    <div className='skill-name'>CSS</div>
                    <div className='skill-bar'>
                        <div className='skill-per' per="80%" style={{maxWidth: '80%'}}></div>
                    </div>
                </div>
                <div className='skill'>
                    <div className='skill-name'>JavaScirpt</div>
                    <div className='skill-bar'>
                        <div className='skill-per' per="70%" style={{maxWidth: '70%'}}></div>
                    </div>
                </div>
                <div className='skill'>
                    <div className='skill-name'>React</div>
                    <div className='skill-bar'>
                        <div className='skill-per' per="80%" style={{maxWidth: '80%'}}></div>
                    </div>
                </div>
                <div className='skill'>
                    <div className='skill-name'>Node</div>
                    <div className='skill-bar'>
                        <div className='skill-per' per="60%" style={{maxWidth: '60%'}}></div>
                    </div>
                </div>
                <div className='skill'>
                    <div className='skill-name'>Firebase</div>
                    <div className='skill-bar'>
                        <div className='skill-per' per="60%" style={{maxWidth: '60%'}}></div>
                    </div>
                </div>
            </div>
            
        </div>
        
    );
};

export default Skills;