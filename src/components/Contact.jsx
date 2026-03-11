import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nbznxzq",
        "template_eqebfls",
        form.current,
        "UWHWsPTebBqGJugUZ"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();

          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (err) => {
          console.error("Error sending message:", err);

          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center py-24"
    >
      <ToastContainer />

      {/* Title */}
      <motion.div
        className="text-center m-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-white font-bold text-4xl">CONTACT</h2>
        <div className="h-1 w-36 bg-red-600 mt-2 mx-auto"></div>

        <p className="text-gray-400 my-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className="mt-8 w-full max-w-md bg-[#0b0203] p-6 rounded-lg shadow-lg border border-gray-700"
      >
        <h3 className="text-xl font-semibold text-white text-center">
          Connect with Me <span className="ml-1">🚀</span>
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          <motion.input
            whileFocus={{ scale: 1.03 }}
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#251010] text-white border border-gray-600 focus:outline-none focus:border-red-500"
          />

          <motion.input
            whileFocus={{ scale: 1.03 }}
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#251010] text-white border border-gray-600 focus:outline-none focus:border-red-500"
          />

          <motion.input
            whileFocus={{ scale: 1.03 }}
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#251010] text-white border border-gray-600 focus:outline-none focus:border-red-500"
          />

          <motion.textarea
            whileFocus={{ scale: 1.03 }}
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#251010] text-white border border-gray-600 focus:outline-none focus:border-red-500"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-purple-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition cursor-pointer"
          >
            Send
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;

// import React, { useRef, useState } from 'react'
// import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


// function Contact() {

//   const form=useRef()
//   const [isSent,setIsSent]=useState(false)

//   const sendEmail=(e)=>{
//     e.preventDefault();
    
//     emailjs
//     .sendForm(
//       "service_nbznxzq",
//       "template_eqebfls",
//       form.current,
//       "UWHWsPTebBqGJugUZ"
//     )
//     .then(
//       ()=>{
//         setIsSent(true);
//         form.current.reset();
//         toast.success("Message sent successfully! ✅",{
//           position:"top-right",
//           autoClose:3000,
//           hideProgressBar:false,
//           closeOnClick:true,
//           pauseOnHover:true,
//           draggable:true,
//           theme:"dark"
//         })
//       },
//       (err)=>{
//         console.error("Error sending message:",err)
//         toast.error("Failed to send message. Please try again.",{
//            position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             theme: "dark",
//         })
//       }
//     )
//   }

//   return (
//     <div id='contact' className='flex flex-col items-center justify-center py-24 '>
      
//       <ToastContainer/>

//       <div className='text-center m-16'   >
//         <h2 className='text-white font-bold text-4xl '>CONTACT</h2>
//         <div className='h-1 w-36 bg-red-600 mt-2 mx-auto  '></div>
//         <p className='text-gray-400 my-4 text-lg font-semibold '>I’d love to hear from you—reach out for any opportunities or questions!</p>
//       </div>

//       {/* // contact form  */}

//       <div className='mt-8 w-full max-w-md bg-[#0b0203] p-6 rounded-lg shadow-lg border border-gray-700 '>
//         <h3 className='text-xl font-semibold text-white text-center '>
//           Connect with Me <span className="ml-1">🚀</span>
//         </h3>

//         <form ref={form} onSubmit={sendEmail} className='mt-4 flex flex-col space-y-4 ' >
//           <input type="email"
//             name='user_email'
//             placeholder='Your Email'
//             required
//             className='w-full p-3 rounded-md bg-[#251010] text-white border border-gray-600 focus:outline-none focus:border-red-500 '
//           />
//           <input type="text"
//             name='user_name'
//             placeholder='Your Name'
//             required
//             className='w-full p-3  rounded-md bg-[#251010] text-white border border-gray-600 focus:outline-none focus:border-red-500  '
//           />

//           <input type="text"
//             name='subject'
//             placeholder='Subject'
//             required
//             className='w-full p-3  rounded-md bg-[#251010] text-white border border-gray-600 focus:outline-none focus:border-red-500  '
//           />

//           <textarea name="message" placeholder='Message' rows="4" required className='w-full p-3  rounded-md bg-[#251010] text-white border border-gray-600 focus:outline-none focus:border-red-500  '
//           ></textarea>

//           <button type='submit' className='w-full bg-gradient-to-r from-red-600 to-purple-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition cursor-pointer '>Send</button>
//         </form> 
//       </div>
//     </div>

//   )
// }

// export default Contact