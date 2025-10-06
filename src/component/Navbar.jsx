import React from 'react'
import { useState } from 'react'

const Navbar = () => {
    //this will manage language state//
    const [currentLang, setCurrentLang] =useState('English')
    const [isDropdownopen ,setIsDropdownopen] =useState(false)

    const langChoose =(lang,display)=>{
        setCurrentLang(display);
        setIsDropdownopen(false);
         console.log(`Language set to: ${lang}`);
    }

    const handleSignup =()=>{
        const emailSection = document.getElementById('email');
        
        if (emailSection) {
            // 2. Use scrollIntoView with smooth behavior
            emailSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Aligns the top of the element to the top of the viewport
            });
        }
    }
  return (
    <div>
       <nav id='navbar'>
        <div id='nav-img'>
            <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />

       </div>

       <div id="nav-btn">
        <button className='lang-btn' onClick={()=>setIsDropdownopen(!isDropdownopen)}>{currentLang}</button>
        {isDropdownopen &&(
        <div>
            <button onClick={()=>langChoose('English','English')}
            className={currentLang === 'English' ? 'active' : ''}>English</button> <button 
                onClick={() => langChoose('hindi', 'हिन्दी')}
                className={currentLang === 'हिन्दी' ? 'active' : ''}
              >
                हिन्दी (Hindi)
              </button></div>)}

              <button className="sign-btn" onClick={handleSignup}>
                sign in

              </button>

       </div>
       </nav>
    </div>
  )
}

export default Navbar