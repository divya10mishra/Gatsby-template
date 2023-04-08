import React from 'react'
import linkdnlogo from '../assets/linkdn.png'
import github from '../assets/gitlogo.png'
import instagram from '../assets/insta.webp'
import mail from '../assets/mail.svg'

function Footer() {

    const openLinkdn = () => {
        window.location.href="https://www.linkedin.com/in/divya-mishra-10"
      }
     const openGithub= () => {
          window.location.href="https://github.com/divya10mishra"
      }
    const openInsta = () => {
          window.location.href="https://www.instagram.com/crawling.me/"
        }
       
    const openMailto= () => {
          window.location.href="mailto:divyamishra075@gmail.com"
      }
  
    return (
        <div style={{backgroundColor:'#708090', display:'flex', color:'white', justifyContent:'space-between', padding:'2%', fontSize:'20px', fontWeight:'900'}}>
           <div>Let's Connect</div>
           <div style={{display:'flex', flexDirection:"row"}}>
                    <img src={mail} alt="profile photo" height='30' width='30' onClick={openMailto} className="card"/>
                    <img src={linkdnlogo} alt="profile photo" height='30' width='30' onClick={openLinkdn} className="card"/>
                    <img src={github} alt="profile photo" height='30' width='30' onClick={openGithub} className="card"/>
                    <img src={instagram} alt="profile photo" height='30' width='30' onClick={openInsta} className="card"/>
                   
           </div>
        </div>
    )
}

export default Footer
