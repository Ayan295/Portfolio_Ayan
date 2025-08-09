import React, { useRef } from 'react'
import Card from '../Components/Card'
import { Globe } from '../Components/globe';
import CopyEmailButton from '../Components/CopyEmailButton';


const About = () => {
    const grid2container = useRef();
  return (
    <section className='c-space py-16 md:py-24 lg:py-32'>
        <h2 className='text-heading '> About Me </h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
            {/*Grid 1 */}
            <div className='flex items-end grid-default-color grid-1'>
                <img src="assets/coding-pov.png" alt="No img" 
                className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]'/>
                <div className='z-10'>
                    <p className='headtext'>Hi I'm Ayan</p>
                    <p className='subtext'>
                        Over Last 1 years , I developed my frontend Skills
                        skills to deliver dynamic and responsive software 
                        and web 
                        applications
                    </p>
                </div>
                <div className='absolute inset-x-0 pointer-events-none -bottom-4 sm:h-1/3 bg-gradient-to-t from-indigo'> </div>
            </div>
            {/*Grid 2 */}
            <div className='flex items-end grid-default-color grid-2'>
                <div ref={grid2container} className='flex items-center justify-center w-full h-full'>
                    <p className='flex items-end text-5xl text-gray-500'>CODE IS CRAFT</p>
                    <Card style={{rotate:"75deg" , top:"30%" , left:"20%"}} text={"GASP"} containerRef={grid2container}/>
                    <Card style={{rotate:"-30deg" , top:"60%" , left:"45%"}} text={"SOLID"}containerRef={grid2container}/>
                    <Card style={{rotate:"90deg" , top:"55%" , left:"70%"}} text={"Design Patterns"}containerRef={grid2container}/>
                    <Card style={{rotate:"-55deg" , top:"70%" , left:"0%"}} text={"Design Principle"}containerRef={grid2container}/>
                    <Card style={{rotate:"20deg" , top:"10%" , left:"38%"}} text={"SRP"}containerRef={grid2container}/>
                    <Card style={{rotate:"20deg" , top:"5%" , left:"38%"}} image="assets/logos/blazor-pink.png"containerRef={grid2container}/>

                </div>
            </div>
            {/*Grid 3 */}
            <div className='flex items-end grid-black-color grid-3'>
                <div className='z-10 w-[50%]'>
                    <p className='headtext'>Time Zone </p>
                    <p className='subtext'>I'm Based in Mars, and open to remote work worldwide</p>
                    <figure className='absolute left-[50%] top-[10%]'>
                        <Globe/>
                    </figure>

                </div>
            
            </div>  
            {/*Grid 4 */}
            <div className='flex items-end grid-special-color grid-4'>
                <div className='flex flex-col justify-center items-center gap-4 size-full'>
                    <div className='text-center headtext'>Do you Want to Start a project together?</div>
                    <p><CopyEmailButton/></p> 
                </div>
            </div>
            {/*Grid 5 */}
            <div className='flex items-end grid-default-color grid-5'>
                <div className='z-10 w-[50%] '>
                    <p className='headtext'>Tech Stack</p>
                    <p className='subtext'>I specialize in a variety of languages , frameworks and tools that allows me to build robust and scalble applications</p>
                </div>
                <div className='absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125'></div>
                
            </div>
        </div>

    </section>
  )
}

export default About
