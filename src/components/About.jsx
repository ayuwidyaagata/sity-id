import React from 'react';

function About(props) {
  return (
    <div id='about'>
        <div className="about-image">
            <img src={props.image} alt="" />
        </div>
        <div className="about-text">
            <h2> {props.title} </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consequatur labore voluptates at, pariatur expedita odio nulla aliquam laborum repellendus autem molestiae et quod, magnam error nisi beatae minima earum?</p>
            <button> {props.button} </button>
        </div>
    </div>
  )
}

export default About;