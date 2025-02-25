import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var experience= this.props.data.experience.map(function (experience) {
        return <div key={experience.company}><h3>{experience.company}</h3>
          <h2 className="titleexp">{experience.title}</h2>
          <h2 className='resphead'>Responsibilities -</h2>  
          <h2 className="resp">
          <ol type='*'>
        {experience.responsibilities.split("\n").map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
            {/* {experience.responsibilities} */}
          </h2>
          <h2 className='resphead'>Achievements -</h2> 
          <h2 className='achive'>
          <ol type='*'>
            {experience.achievements.split("\n").map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
            {/* {experience.achievements} */}
          </h2></div>
      })
      var skills = this.props.data.skills.map(function (skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">  


        <div className='row experience'>
          <div className='three columns header-col'>
            <h1><span>Work Experience</span></h1>
          </div>

          <div className='nine columns main-col'>
            <div className='row item'>
              <div className='twelve columns'>
                {experience}
              </div>
            </div>
          </div>
        </div>  
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>

        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

            <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
            </div>
          </div>
        </div>
      </section >
    );
  }
}

export default Resume;
