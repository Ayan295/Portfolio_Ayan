import { useState } from "react"
import {AnimatePresence, motion} from "motion/react"
const CopyEmailButton = () => {
    const [copied , setcopied] = useState(false)
    const email = "ayanulhasan0707@gmail.com";
    const Copytoclipboard = ()=>{
        navigator.clipboard.writeText(email);
        setcopied(true)

        setTimeout(()=>{
            setcopied(false);
            
        },2000)
    }
  return (
    <div>
        <motion.button onClick={Copytoclipboard} whileHover={{y:-5}} whileInView={{scale:1.05}} className="relative px-1 py-2 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden">
        <AnimatePresence mode="wait">
        {copied?( <motion.p className="flex item-cneter justify-center gap-2"
                key="copied"
                initial = {{opacity:0 , y:-10}}
                animate = {{opacity: 1 , y:  0}}
                exit={{opacity: 0 , y:-10}}
                transition={{duration:0.1  , ease:"easeInOut"}}>
                <img src="assets/copy-done.svg" className="w-4" alt="icon"/>
                Email has Copied
                </motion.p>):
                ( <motion.p className="flex item-cneter justify-center gap-2 "
                    key="copy"
                    initial = {{opacity:0}}
                    animate = {{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration:0.1}}>
                <img src="assets/copy.svg" className="w-4" alt="icon"/>
                Copy Email Address
                </motion.p>
        )}
        </AnimatePresence>     
            
        </motion.button>      
    </div>
  )
}

export default CopyEmailButton
