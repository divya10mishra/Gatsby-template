import React from 'react'

function Header() {
    return (
        <div>
           <div style={{display:"flex", background:'white', border:'1px solid gray', justifyContent:'space-around'}}>
               <div>Portfolio.</div>
               <ul style={{display:'flex'}}>
                   <span style={{marginLeft:'10%'}}>Resume
                   </span>
                   <span style={{marginLeft:'10%'}}>Skills
                   </span>
                   <span style={{marginLeft:'10%'}}>Project
                   </span>
                   <span style={{marginLeft:'10%'}}>Footer
                   </span>
                   </ul>
           </div>
        </div>
    )
}

export default Header
