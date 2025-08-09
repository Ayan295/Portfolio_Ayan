import React, { useState } from 'react'
import emailjs from "@emailjs/browser"
import Alert from '../Components/Alert';
import { Particles } from '../Components/Particles';

const Contact = () => {

    const[isLoading , setisLoading] = useState(false)
    const[showAlert , setshowAlert] = useState(false)
    const[alertType , setalertType] = useState("Succes")
    const[alertMessage , setalertMessage] = useState("")

    const [formdata , setformdata] = useState({
        name: "",
        email: "",
        message: "",
    });

    const showAlertMessage = (type , message) =>{
        setalertType(type)
        setalertMessage(message)
        setshowAlert(true)
        setTimeout(() => {
         setshowAlert(false)   
        },5000);
    }
    const handleChange = (e) => {
        setformdata({...formdata, [e.target.name]: e.target.value});
    }

    const handlersubmit = async (e)=>{
        e.preventDefault()
        setisLoading(true)

        try {
            console.log("Form Submitted" , formdata)
            await emailjs.send("service_y5nwkb4" , "template_kkxrccy" , 
                {
                    from_name : formdata.name , 
                    to_name : "Ayan" , 
                    from_email : formdata.email , 
                    to_email : "ayanulhasan0707@gmail.com" ,
                    message:formdata.message,
                }, 
                "gHpt3J_lbX16JhlOE"
            )
            setisLoading(false);
            setformdata({name: "" , email:"" , message:"" })
            showAlertMessage("Success" , "Your Message has been Sent")
            
        } catch (error) {
            setisLoading(false);
            console.log(error)
            showAlertMessage("Oops" , "Something Went Wrong!")
        }
        
        //service_y5nwkb4
        //template_kkxrccy
    }
  return (
    <section className='relative flex items-center c-space section-spacing'>
        <Particles
            className="absolute inset-0 -z-50"
            quantity={100}
            ease={80}
            color={"#fffff"}
            refresh
        />
        { showAlert && <Alert type={alertType} text={alertMessage} />}
        <div className='flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary'>
            <div className='flex flex-col items-start w-full mb-10 gap-5'>
                <h2 className='text-heading'>Lets Talk</h2>
                <p className='font-normal text-neutral-400'>Wheather your looking for a new project or just want to say hi, I'll try my best to get back to you!</p>
            </div>

            <form action="" className='w-full' onSubmit={handlersubmit}>
            <div className='mb-5'>
                <label htmlFor="name" className='field-label'>Full Name</label>
                <input type="text" id="name" name='name' className='field-input field-input-focus' placeholder='John Doe' autoComplete='name' required
                value={formdata.name} onChange={handleChange} />
            </div>

            <div className='mb-5'>
                <label htmlFor="email" className='field-label'>Email</label>
                <input type="email" id="email" name='email' className='field-input field-input-focus' placeholder='JohnDoe@gmail.com' autoComplete='email' required 
                value={formdata.email} onChange={handleChange}/>
            </div>

            <div className='mb-5'>
                <label htmlFor="message" className='field-label'>Message</label>
                <textarea type="text" id="message" name='message' className='field-input field-input-focus' placeholder='Share your thoughts....' autoComplete='message' required rows={4}
                value={formdata.message} onChange={handleChange}/>                
            </div>

            <button type='submit' className='w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation'>
               {!isLoading ? "Send " : "Sending..."}
            </button>
        </form>
        
        </div>
       
    </section>
  )
}

export default Contact
