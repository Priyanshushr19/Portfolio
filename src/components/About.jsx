import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion, AnimatePresence } from "framer-motion";

function About() {

  const [open, setOpen] = useState(false);

  return (
    <section
      id="about"
      className="py-14 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-10 md:mt-24 lg:mt-10"
    >
      <div className="flex flex-col-reverse md:flex-row items-center">

        {/* LEFT SIDE */}
        <motion.div
          className="w-full md:w-1/2 mt-5 md:mt-0 md:text-left px-4 md:px-0 leading-relaxed"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >

          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I am
          </motion.h1>

          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Priyanshu Sharma
          </motion.h1>

          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-red-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-white">I am a </span>

            <span className="text-red-600 font-bold">
              <Typewriter
                words={[
                  " Full Stack Developer",
                  " UI/UX Developer",
                  " Problem Solver",
                ]}
                loop={0}
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
              <span className="text-red-500">|</span>
            </span>
          </motion.h3>

          <motion.p
            className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            I am a Full Stack MERN Developer specializing in building scalable
            and efficient web applications. I focus on modern technologies to
            deliver seamless and intuitive user experiences.
          </motion.p>

          {/* HIRE ME BUTTON */}
          <motion.button
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="
            inline-flex items-center justify-center
            mt-6 px-8 py-3
            text-lg font-semibold text-white
            rounded-full
            transition-all duration-500
            hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.7)]
            border-white
            shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
            bg-gradient-to-r from-red-600 to-[#f7229a]
            "
          >
            HIRE ME
          </motion.button>

        </motion.div>


        {/* RIGHT IMAGE */}
        <motion.div
          className="flex w-full md:w-1/2 justify-center md:justify-end items-center lg:ml-30"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="imgg.png"
            alt="Priyanshu Sharma"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-full h-full rounded-full object-cover
            drop-shadow-[0_0_10px_rgba(239,68,68,0.6)]
            hover:scale-105 hover:rotate-1
            hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.9)]"
          />
        </motion.div>

      </div>


      {/* POPUP MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              className="bg-[#0b0203] p-8 rounded-xl border border-gray-700 text-center max-w-md"
            >

              <h2 className="text-2xl font-bold text-white mb-4">
                Get My CV
              </h2>

              <p className="text-gray-400 mb-6">
                Please contact me to receive my CV.
              </p>

              <p className="text-red-500 font-semibold">
                📧 Mail : priyanshusharma9997@gmail.com
              </p>

              <p className="text-red-500 font-semibold mt-2">
                📱 Contact Number : +91 7351374649
              </p>

              <button
                onClick={() => setOpen(false)}
                className="mt-6 px-6 py-2 bg-red-600 rounded-lg text-white hover:bg-red-700"
              >
                Close
              </button>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default About;

// import React from 'react'
// import { Typewriter } from 'react-simple-typewriter'

// function About() {
//   return (
//     <div>
//       <section id='about' className='py-14 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-10 md:mt-24 lg:mt-10 '>
//         <div className="flex flex-col-reverse md:flex-row items-center">

//           {/* left */}
//           <div className="w-full md:w-1/2 mt-5 md:mt-0 justify-between items-center  md:text-left px-4 md:px-0 leading-relaxed">

//             {/* greeting */}
//             <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
//               Hi, I am
//             </h1>
//             <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
//               Priyanshu Sharma
//             </h1>
//             <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-red-600 leading-tight'>
//               <span className='text-white'>
//                 I am a
//               </span>
//               <span className="text-red-600 font-bold ">
//                 <Typewriter
//                   words={[
//                     " Full Stack Developer",
//                     " UI/UX Developer",
//                     "  Problem Solver "
//                   ]}
//                   loop={0}
//                   typeSpeed={100}
//                   deleteSpeed={50}
//                   delaySpeed={2000}
//                 // cursor
//                 // cursorStyle="|"
//                 />
//                 <span className="text-red-500">|</span>
//               </span>
//             </h3>

//             <p className=' text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed '>
//               I am a Full Stack MERN Developer specializing in building scalable and efficient web applications. With strong skills in both frontend and backend development, I focus on leveraging modern technologies to deliver seamless and intuitive user experiences.
//             </p>

//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="
//     inline-flex items-center justify-center
//     mt-6 px-8 py-3
//     text-lg font-semibold text-white
//     rounded-full
//     transition-all duration-500 ease-out
//     hover:scale-105
//     hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.7)]  border-white 
//           shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
//     bg-gradient-to-r from-red-600 to-[#f7229a] hover:shadow-red-500/60
//     focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-black
//   "
//             >
//               DOWNLOAD CV
//             </a>

//           </div>
//           {/* Right Side */}

//           <div className="flex w-full md:w-1/2 justify-center md:justify-end items-center lg:ml-30">
//             <img
//               src="img.png"
//               alt="Priyanshu Sharma"
//               className="
//       w-full h-full rounded-full object-cover
//       drop-shadow-[0_0_10px_rgba(239,68,68,0.6)]
//       transition-all duration-500 ease-out
//       hover:scale-105 hover:rotate-1
//       hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.9)]
//     "
//             />
//           </div>


//         </div>
//       </section>
//     </div>
//   )
// }

// export default About