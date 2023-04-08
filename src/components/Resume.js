import React from 'react'
import banner from '../assets/mzL.gif'
import pdf from '../assets/resume.pdf'
import styled from "styled-components";

function Resume() {

    const Button = styled.button`
     background-color: transparent;
    //color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
    color: black;
    &:hover {
        background-color: white;
      }
  `;

  function sayHello() {
    alert('You clicked me!');
  }

    return (
      <div>
        <div
          style={{
            position: "absolute",
            zIndex: "1",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            fontWeight:'900',
            fontSize:'40px'
          }}
        >
          Hi 🙋‍♀️, I'm Divya <br /> I'm a Frontend Developer <br />
          <a href={pdf} target="_blank" rel="noreferrer">
            <Button>Resume</Button>
          </a>
        </div>
       
        <img src={banner} 
        width="100%" 
        style={{ position: "relative" }} 
        />
      </div>
    );
}

export default Resume
