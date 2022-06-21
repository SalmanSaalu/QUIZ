import './Home.css'
import {Link,useNavigate} from 'react-router-dom'
import React,{ useEffect, useState,useContext } from 'react'
import { UserContext } from '../../App'
function Home(){

const {setUsername,username} = useContext(UserContext);
const navigate=useNavigate()
const setDELETE = (username) => {
    localStorage.setItem('username', (''))
    setUsername('');
    navigate('/')}
//  useEffect(() => {
//     fetch("/base",{ method: 'GET'})
//       .then((res) =>res.json())
//       .then((data) => {setUsername(data[0].username) 
//        });

//   }, []);
  
    return(
        <div>

        <ul>
            <li>Home</li>
            <li>News</li>
            <Link to='/takequiz'><li>Take quiz</li></Link>
            {username !== '' && username !=='email or password is not match' ? 
            <div>
            <li style={{float:'right'}}>{username}</li> 
            <li style={{float:'right'}} onClick={setDELETE}>logout</li>
            </div>
             :  <div> <Link to='/signin'><li style={{float:'right'}}>Signin</li></Link>
                                                                                <Link to='/signup'><li style={{float:'right'}}>Signup</li></Link> </div>}
            <li style={{float:'right'}}>About</li>

        </ul>
        
        <div >
            <TextAnimation/>
        </div>
        </div>
    )
}

const TextAnimation = () => {
    React.useEffect(() => {
      const elts = {
        text1: document.getElementById("text1"),
        text2: document.getElementById("text2"),
      };
  
      const texts = ["If", "You", "Like", "It", "Please", "Give", "a Love :)"];
  
      const morphTime = 1;
      const cooldownTime = 0.25;
  
      let textIndex = texts.length - 1;
      let time = new Date();
      let morph = 0;
      let cooldown = cooldownTime;
  
      elts.text1.textContent = texts[textIndex % texts.length];
      elts.text2.textContent = texts[(textIndex + 1) % texts.length];
  
      function doMorph() {
        morph -= cooldown;
        cooldown = 0;
  
        let fraction = morph / morphTime;
  
        if (fraction > 1) {
          cooldown = cooldownTime;
          fraction = 1;
        }
  
        setMorph(fraction);
      }
  
      function setMorph(fraction) {
        elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
  
        fraction = 1 - fraction;
        elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
  
        elts.text1.textContent = texts[textIndex % texts.length];
        elts.text2.textContent = texts[(textIndex + 1) % texts.length];
      }
  
      function doCooldown() {
        morph = 0;
  
        elts.text2.style.filter = "";
        elts.text2.style.opacity = "100%";
  
        elts.text1.style.filter = "";
        elts.text1.style.opacity = "0%";
      }
      let id;
      function animate() {
        id = requestAnimationFrame(animate);
  
        let newTime = new Date();
        let shouldIncrementIndex = cooldown > 0;
        let dt = (newTime - time) / 1000;
        time = newTime;
  
        cooldown -= dt;
  
        if (cooldown <= 0) {
          if (shouldIncrementIndex) {
            textIndex++;
          }
  
          doMorph();
        } else {
          doCooldown();
        }
      }
      (() => {
        id = animate();
      })();
  
      return () => {
        cancelAnimationFrame(id);
      };
    }, []);
  
    return (
      <>
        <div id="container" >
          <span id="text1"></span>
          <span id="text2"></span>
        </div>
  
        <svg id="filters">
          <defs>
            <filter id="threshold">
              <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="1 0 0 0 0
                                      0 1 0 0 0
                                      0 0 1 0 0
                                      0 0 0 255 -140"
              />
            </filter>
          </defs>
        </svg>
      </>
    );
  };
export {Home}