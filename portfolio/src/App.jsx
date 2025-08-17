import './App.css'
import profile from "./assets/profile.png";
import React from "react"
import dress from "./assets/dress.png";
import halloween from "./assets/halloween.png";
import meme from "./assets/meme.png";
import quizzicalHome from "./assets/quizzicalHome.png";
import quizzicalQuestions from "./assets/quizzicalQuestions.png";
import quizzicalResults from "./assets/quizzicalResults.png";

function App() {

  return (
      <main>
        <section className="header">
          <div className='header-title'>
            <h1>Hi! I'm El</h1>
            <div className='header-links'>
            <a href='https://www.linkedin.com/in/ebyildiz/'>LinkedIn</a>
            <a href='https://github.com/ebyildiz'>Github</a>
            <a href='mailto:elifyildjz@gmail.com'>Email</a>
            </div>
          </div>
          <img src={profile}></img>
        </section>
        <section className='intro'>
          <p>
          My name is Elif Yildiz and I have recently graduated from UCSD with a degree in Math and Computer Science. I have knowledge in Python, Javascript, and React. The past couple of months, I have been learning React, and got a certificate through Scrimba. Right now, I am in their Advanced React course and also learning TypeScript on the side. I enjoy web development and am always willing to learn new things! Here are some of the projects I have made myself since I started learning React:
          </p>
        </section>
        <section className='projects'>
          <h1 >Projects</h1>
          <section className='project-item'>
            <h2 className='project-title'>A Quiz App: Made with OpenTrivia's API, Followed a Figma Design</h2>
              <div className='multiple-images'>
                <img src={quizzicalHome} className='quizzical-img'></img>
                <img src={quizzicalQuestions} className='quizzical-img'></img>
                <img src={quizzicalResults} className='quizzical-img'></img>
              </div>
            <p className='project-summary'></p>
          </section>
          <section className='project-item'>
            <h2 className='project-title'>Halloween Costume Generator: Used Claude AI</h2>
            <div className='image-container'>
              <img src={halloween} className='regular-size'></img>
              </div>
            <p className='project-summary'></p>
          </section>
          <section className='project-item'>
            <h2 className='project-title'>Dress-Up Website: Keep track of your clothes</h2>
              <div className='image-container'>
              <img src={dress} className='regular-size'></img>
              </div>
            <p className='project-summary'></p>
          </section>
          <section className='project-item'>
            <h2 className='project-title'>Meme Generator: Followed a Figma Design</h2>
            <div className='image-container'>
              <img src={meme} className='meme-img'></img>
              </div>
            <p className='project-summary'></p>
          </section>
          
        </section>

      </main>
  )
}

export default App
