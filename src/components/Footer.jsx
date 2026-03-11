import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.footer
      id="footer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >

      <div className="container mx-auto text-center">

        {/* Name */}
        <motion.h2
          whileHover={{ scale: 1.05 }}
          className="text-xl font-semibold text-red-500"
        >
          PRIYANSHU SHARMA
        </motion.h2>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">

          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer hover:text-red-600 text-sm sm:text-base my-1"
              onClick={() => handleScroll(item.id)}
            >
              {item.name}
            </motion.button>
          ))}

        </nav>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">

          {[
            { icon: <FaGithub />, link: "https://github.com/Priyanshushr19" },
            { icon: <FaTwitter />, link: "#" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/priyanshu-sharma-a8248b302?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
            { icon: <FaInstagram />, link: "#" },
            // { icon: <FaYoutube />, link: "#" },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              className="text-xl hover:text-red-600 transition"
            >
              {item.icon}
            </motion.a>
          ))}

        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          © 2026 Priyanshu Sharma. All rights reserved.
        </p>

      </div>

    </motion.footer>
  );
}

export default Footer;

// import React from 'react'
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";


// function Footer() {

//   const handleScroll=(id)=>{
//     const section=document.getElementById(id)
//     if(id){
//       section.scrollIntoView({behavior:"smooth"})
//     }
//   }
//   return (
//     <footer id='footer' className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] '>
//       <div className='conatainer mx-auto text-center' >
//         <h2 className='text-xl font-semibold text-red-500  '>PRIYANSHU SHARMA </h2>

//         <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4  ' >
//           {[
//             { name: "About", id: "about" },
//             { name: "Skills", id: "skills" },
//             { name: "Projects", id: "projects" },
//             { name: "Education", id: "education" },
//           ].map((item,idx)=>{
//             return <button key={idx} 
//             className='cursor-pointer hover:text-red-600 text-sm sm:text-base my-1 ' onClick={()=>handleScroll(item.id)} >
//               {item.name}
//             </button>
//           })}
//         </nav>
          
//         <div className='flex flex-wrap justify-center space-x-4 mt-6 '>
//           {[
//             { icon: <FaFacebook />, link: "#" },
//             { icon: <FaTwitter />, link: "#" },
//             { icon: <FaLinkedin />, link: "#" },
//             { icon: <FaInstagram />, link: "#" },
//             { icon: <FaYoutube />, link: "#" },
            
//           ].map((item,idx)=>{
//             return <a href={item.link} target='_blank' rel='noopener noreferrer' className='text-xl hover:text-red-600 transition-transform transform hover:scale-110 ' >
//               {item.icon}
//             </a>
//           })
//           }
//         </div>

//         <p className='text-sm text-gray-400 mt-6  '>
//           © 2026 Priyanshu Sharma. All rights reserved.
//         </p>

//       </div>
//     </footer>
//   )
// }

// export default Footer