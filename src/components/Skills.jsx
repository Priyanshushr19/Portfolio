import React from "react";
import { SkillsInfo } from "../Data";
import { motion } from "framer-motion";

function Skills() {
  return (
    <div
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      {/* Title */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          SKILLS
        </h2>

        <div className="w-25 h-1 bg-red-600 mx-auto mt-2"></div>

        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through various
          projects and experiences
        </p>
      </motion.div>

      {/* Skill Cards */}
      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">

        {SkillsInfo.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="
            bg-[#0d0c0d] backdrop-blur-md
            px-6 sm:px-10 py-8 sm:py-6
            mb-10 w-full sm:w-[48%]
            rounded-2xl border border-white
            transition-all duration-500 ease-out
            hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.7)]
            shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
            "
          >
            {/* Card Title */}
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
              {item.title}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 w-full">

              {item.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                  flex items-center space-x-2
                  bg-transparent
                  border-2 border-gray-600
                  rounded-3xl p-2
                  transition-all duration-300
                  hover:drop-shadow-[0_0_15px_rgba(239,68,68,0.7)]
                  "
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-5 h-5 sm:w-8 sm:h-8"
                  />

                  <span className="text-xs sm:text-sm text-gray-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}

            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}

export default Skills;

// import React from 'react'
// import { SkillsInfo } from '../Data'

// function Skills() {
//   return (
//     <div id='skills' className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font sans  '>
//       <div className='text-center mb-8'>
//         <h2 className='text-3xl sm:text-4xl font-bold text-white '>
//           SKILLS
//         </h2>
//         <div className='w-25 h-1 bg-red-600 mx-auto mt-2'></div>
//         <p className='text-gray-400 mt-4 text-lg font-semibold'>
//           A collection of my technical skills and expertise honed through various projects and experiences
//         </p>
//       </div>

//       <div className='flex flex-wrap gap-1 lg:gap-5 py-10 justify-between'>
//         {SkillsInfo.map((item)=>{
//           return <div key={item.title}  className='bg-[#0d0c0d] backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border   transition-all duration-500 ease-out
//     hover:scale-105
//     hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.7)]  border-white 
//           shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]'>
//             <h3 className='text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center'>
//               {item.title}
//             </h3> 

//             <div className='grid grid-cols-2 sm:grid-cols-2 gap-3 w-full  '>
//               {item.skills.map((skill)=>(
//                 <div key={skill.name} className='flex items-center space-x-2 bg-transparent border-2 border-gray-600 rounded-3xl p-2  ease-out
//     hover:scale-105
//     hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.7)]' >
//                   <img src={skill.logo}  alt={`${skill.name} logo`} className='w-5 h-5 sm:w-8 sm:h-8' />
//                   <span className='text-xs sm:text-sm text-gray-300'>{skill.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         })}
//       </div>

//     </div>
//   )
// }

// export default Skills