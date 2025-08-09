import React, { useState } from 'react'
import {motion} from "motion/react";

function Navigation(){
    return <ul className='nav-ul flex gap-6 items-center'>
        <li className='nav-li'>
            <a href="#Home" className='nav-link'>Home</a>
        </li>
        <li className='nav-li'>
            <a href="#About" className='nav-link'>About</a>
        </li>
        <li className='nav-li'>
            <a href="#Work" className='nav-link'>Work</a>
        </li>
        <li className='nav-li'>
            <a href="#Contact" className='nav-link'>Contact</a>
        </li>
    </ul>
}


const Navbar = () => {
    const [isopen , setisopen] = useState(false);
  return (
    <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40'>
        <div className='mx-auto c-space max-w-7xl'>
            <div className='flex items-center justify-between py-2 sm:py-0'>
                <a 
                href="#" 
                className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'>
                    Ayan 
                </a>
                <button onClick={()=>setisopen(!isopen)} 
                className='flex cursor-pointer text-neutral-400
                hover:text-white focus:outline-none sm:hidden'>
                    <img src={isopen ? "assets/close.svg" : "assets/menu.svg"}
                    className='w-6 h-6'
                    alt='toggle'/>
                </button>
                <nav className='hidden sm:flex'>
                    <Navigation/>
                </nav>
            </div>
        </div>
        {isopen ?? (<div.motion className='block overflow-hidden text-center sm:hidden'
        initial = {{opacity:0 , x: -10}}
        animate = {{opacity:1 , x:0}}
        style = {{maxHeight:"100vh"}}
        transition = {{duration:1}}>
            <nav className='pb-5'>
                <Navigation></Navigation>
            </nav>

        </div.motion>
)}      
    </div>
  )
}

export default Navbar
