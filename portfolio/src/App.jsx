import './App.css'
import profile from "./assets/profile.png";
import React from "react"
import halloween from "./assets/halloween.png";
import quizzical from "./assets/quizzical.png";
import mcc_on from "./assets/mycutechat2.png";
import pomodoro from "./assets/pomodoro.png"
import ProjectItem from './ProjectItem';
import Certificates from './Certificates';
import gmail from "./assets/gmail.png"
import linkedin from "./assets/linkedin.png"
import github from "./assets/github.png"

import { useRef } from "react"


function App() {

  const projectsRef = useRef(null);
  const certsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCerts = () => {
    certsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <section className="header">
        <div className='header-title'>
          <h1>Hi! I'm Elif</h1>
          <p>(the human, not the cat)</p>
          <div className='header-links'>
            <div className='header-link'>
              <img src={linkedin} style={{ width: "20px", marginRight: "20px", borderRadius:"3px"}} />
              <a href='https://www.linkedin.com/in/ebyildiz/'> LinkedIn</a>
            </div>
            <div className='header-link'>
              <img src={gmail} style={{ width: "20px", marginRight: "20px" }} />
              <a href='mailto:elifyildjz@gmail.com'>Email</a>
            </div>
            <div className='header-link'>
              <img src={github} style={{ width: "20px", marginRight: "20px" }} />
              <a href='https://github.com/ebyildiz'>  Github</a>
            </div>
          </div>
        </div>
        <img src={profile}></img>
      </section>
      <p style={{ color: "white" }}>Go to:
        <button onClick={scrollToProjects}>Projects</button>
        <button onClick={scrollToCerts}>Certificates</button></p>
      <section className='intro'>
        <p>
          My name is Elif Yildiz and I have recently graduated from UCSD with a degree in Math and Computer Science. I have experience with Javascript, Typescript, React, Node JS, Express JS, and Python. The past couple of months, I have been learning front end development through Scrimba and making various projects that help me learn and grow even more. I have just finished my latest project MyCuteChat, and I am currently learning Rust (questioning my life choices). I enjoy web development and am always willing to learn new things! In my free time, I climb, play games, and play the bass. Thank you for checking out my website!
        </p>
      </section>
      <div className='projects-title-container' style={{ marginTop: "20px" }} ref={certsRef}><h1 >Certificates</h1></div>
      <Certificates />
      <section className='projects'>
        <div className='projects-title-container' ref={projectsRef} ><h1 >Projects</h1></div>
        <div className='project-list'>

          <ProjectItem title="MyCuteChat" image={mcc_on} link="https://github.com/ebyildiz/chat-app" />
          <ProjectItem title="Pomodoro" image={pomodoro} link="https://github.com/ebyildiz/pomdoro-task-app" />
          <ProjectItem title="Quizlet" image={quizzical} link="https://github.com/ebyildiz/quizzical" />
          <ProjectItem title="Halloween Costume Generator" image={halloween} link="https://github.com/ebyildiz/halloween-ai" />
        </div>

      </section>

    </main>
  )
}

export default App
