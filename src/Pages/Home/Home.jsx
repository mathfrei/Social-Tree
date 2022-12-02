import { useEffect } from 'react';
import React, {useState} from 'React';
import './styles.css'
import { default as github } from '../../assets/github.svg';
import { default as twitch } from '../../assets/twitch.svg'
import { default as instagram } from '../../assets/instagram.svg'
import { default as linkedin} from '../../assets/linkedin.svg'
import { default as profile_pic} from '../../assets/profile_pic2.jpeg'

export function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap');
    </style>
     <div className="Main">
        <div className="main-section">
            <img id="profile-picture" src={profile_pic} alt="profile picture"/> 
            <section className="link-container">
              <div id="ex_link"><a href="https://github.com/mathfrei/Meu_Portfolio">LINK 1</a></div>
              <div id="ex_link"><a href="https://github.com/mathfrei/campin_rocket_seat">LINK 2</a></div>
              <div id="ex_link"><a href="https://www.linkedin.com/in/mathfrei">LINK 3</a></div>
              <div id="ex_link"><a href="https://www.rocketseat.com.br/">LINK 4</a></div>
              <div className="logo-container">
                <img src={twitch} alt="twitch_logo.svg" />
                <img src={instagram} alt="instagram_logo.svg" />
                <img src={linkedin} alt="linkedin_logo.svg" />
                <img src={github} alt="github.svg" />
              </div>
         </section>
        </div> {/*main-section*/}
      </div>
  </>  
  )
}

