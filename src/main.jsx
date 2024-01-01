import React, { useRef } from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function App() {
  return (
    <>
      <Overlay />
      <Content />
    </>
  )
}
function Overlay(){
  return(
  <>    
      <div className="navbar">
          <div className="nav-item" id="menu-button">
            <span className="material-symbols-outlined">blur_on</span>
              <div className="dropdown-content">
                  <a href="https://will.limited">home</a>
                  <a href="https://experience.will.limited">experience</a>
                  <a href="https://projects.will.limited">projects</a>
              </div>
          </div>

          <div className="nav-item">
              <a href="mailto:willdotlimited@gmail.com">contact</a>
          </div>
      </div>
  </>
  )
}

function Content() {
  return(
    <>
      <div className="content" id="gallery">
          <img src="./group.png" alt="nerd smiling at camera" id="headshot"/>
      </div>
      <div className="content">
        <h1 className="title">bio</h1> <br /><br />
        <h1>I'm an FAA-licensed remote pilot passionate about cooking, data viz, and the environment. A fan of dogs to say the least. When I'm not pretending to be busy in front of a computer, I enjoy weightlifting and writing. I'm a Liverpool fan, so you could say things are going pretty well this year. </h1>
      </div>
      <div className="content">
        <h1>This past year I've been slowly picking up the basics of web design, and I'm particularly fascinated with the world of creativity made possible by WebGL. If I keep learning and making mediocre websites in my spare time, by sheer probability I'll eventually make a decent one. Here's to hoping. </h1>
      </div>
      <div className="content" id="gallery">
          <h1 className="title" id='haloes'>haloes!</h1>
          <h1 className="title" id='haleskarth'>haleskarth!</h1>
          <img loading="lazy" src="./group2.png" alt="a parking garage at sunset, a dog whom I love, and tree's intricate bark" id="gallery"/>
      </div>
      <div className="content">
        <h1>This site was made with React-three-fiber, Vite, and Vercel. Much love to Bruno Simon for the incomparable <a href="https://threejs-journey.com/" className="externalLink">Three.js Journey</a>, the best place to start for anyone interested in web development. Many thanks to my dog for being photogenic, no thanks to my dog for not helping.</h1>
      </div>
    </>
  )
}