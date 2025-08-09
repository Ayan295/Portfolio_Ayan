
import {motion} from 'motion/react' ;               
const Card = ({text , style , image , containerRef}) => {
  return  image && !text ?(
  <motion.img className="absoulute w-15 cursor-grab " 
    src={image} 
    style={style}
    whileHover={{scale:1.05}}
    drag
    dragConstraints={containerRef}
    dragElastic={1}
    />
):(
    <motion.div className="absolute py-4 px-1 text-xl text-center 
    rounded-full ring ring-gray-700 font-extralight 
    bg-storm w-[12rem] cursor-grab"
    style=
    {style}
    whileHover={{scale:1.05}}
    drag
    dragConstraints={containerRef}
    dragElastic={1}
    >
    {text}
    
        
    </motion.div>
  )
}

export default Card
