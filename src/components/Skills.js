import React from 'react'
import react from '../assets/react.png'
import redux from '../assets/redux.svg'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import vue from '../assets/vue.png'
import sass from '../assets/sass.svg'
import azure from '../assets/azure.jpg'
import git from '../assets/git.png'
import tailwind from '../assets/tailwind.png'
import jest from '../assets/jest.svg'
import typescript from '../assets/typescript.png'

function Skills() {
    return (
        <div style={{backgroundColor:'#fafad2', padding:'1%',}}>
           <div style={{marginBottom:'2%', fontSize:'30px', fontWeight:'900'}}> Skills</div>
           <div>
         
            <span>
                <img src={html} height="100" width="100" className="card"/>
            </span>
            <span>
                <img src={css} height="100" width="100" className="card"/>
            </span>
            <span>
                <img src={js} height="100" width="100" className="card"/>
            </span>
             
           
            <span>
                <img src={typescript} height="100" width="100" className="card"/>
            </span>
            <span>
                <img src={azure} height="100" width="100" className="card"/>
            </span>
            <span>
                <img src={git} height="100" width="100" className="card"/>
            </span>
            </div>
            <div>
            <span>
                <img src={react} height="100" width="100" className="card"/>
            </span>
            <span>
                <img src={redux} height="100" width="100"  className="card"/>
            </span>
            <span>
                <img src={vue} height="100" width="100" className="card"/>
            </span>
            <span>
                <img src={tailwind} height="100" width="100" className="card"/>
            </span>
            <span>
                <img src={sass} height="100" width="100" className="card"/>
            </span>
            <span>
                <img src={jest} height="100" width="100" className="card"/>
            </span>
          
           </div>
           
        </div>
    )
}

export default Skills
