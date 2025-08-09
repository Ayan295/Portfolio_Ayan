import React from 'react'
import {motion} from "motion/react"

const ProjectDetail = ({title , description , subDescription , href , image , tags , closeModal}) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm'>
        <motion.div className='relative max-w-2xl border-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10' 
        initial={{opacity:0 , scale:0.5}}
        animate={{opacity:1 , scale: 1}}>
        <button onClick={closeModal} 
            className='absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500'>
            <img src="assets/close.svg" alt="" className='w-6 h-6'/>
        </button>
        <img src={image} alt={title} className='w-full rounded-t-2xl' />
        <div>
            <h5 className='mb-5 tex-2xl font-bold text-white '>{title}</h5>
            <p className='mb-3 font-normal text-neutral-400'>{description}</p>
            {subDescription.map((sub , idx )=>(
                <p className='mb-3 font-normal text-neutral-400'>{sub}</p>
            ))}
        </div>
        <div className='flex items-center justify-between mt-4'>
            <div className='flex gap-3 ml-3 mb-3'>
                {tags.map((tag)=>(
                    <img key={tag.id} src={tag.path} alt={tag.name}
                    className='rounded-lg size-10 hover-animation'/>
                    
                ))}
            </div>
            <a className='inline-flex cursor-pointer font-medium items-center gap-1 hover-animation mr-3 mb-3' href={href}>View Project
                <img src="assets/arrow-up.svg" alt=""  className='size-4'/>
            </a>

        </div>
        </motion.div>
      
    </div>
  )
}

export default ProjectDetail
