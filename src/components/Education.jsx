// import React from 'react'
// import { education } from '../Data'

// function Education() {
//   return (
//     <div id='education' className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3">
      
//       {/* Heading */}
//       <div className="text-center mb-20">
//         <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
//         <div className="w-45 h-1 bg-red-600 mx-auto mt-2"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           My education has been a journey of learning and development.
//         </p>
//       </div>

//       {/* Timeline wrapper */}
//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute left-4 sm:left-1/2 top-0 w-1 h-full bg-white/40"></div>

//         {/* Timeline items */}
//         <div className="flex flex-col gap-20">
//           {education.map((edu, index) => (
//             <div
//               key={edu.id}
//               className={`relative flex flex-col sm:flex-row ${
//                 index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'
//               }`}
//             >
//               {/* Timeline dot */}
//               <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#0b0203] border-4 border-[#8245ec] z-10 flex items-center justify-center">
//                 <img
//                   src={edu.img}
//                   alt={edu.school}
//                   className="w-full h-full rounded-full object-cover"
//                 />
//               </div>

//               {/* Card */}
//               <div
//                 className={`ml-16 sm:ml-0 sm:w-[45%] p-6 rounded-2xl bg-[#0b0203] transition-all duration-500 ease-out
//     hover:scale-105
//     hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.7)]  border-white 
//           shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]`}
//               >
//                 <h3 className="text-xl font-semibold text-white">
//                   {edu.degree}
//                 </h3>
//                 <h4 className="text-sm text-gray-300 mt-1">
//                   {edu.school}
//                 </h4>
//                 <p className="text-sm text-gray-500 mt-1">{edu.date}</p>

//                 <p className="mt-3 text-gray-400 font-semibold">
//                   Grade: {edu.grade}
//                 </p>
//                 <p className="mt-3 text-gray-400">
//                   {edu.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Education

import { motion } from "framer-motion";
import { education } from "../Data";

function Education() {
  return (
    <div
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-black"
    >
      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-40 h-1 bg-red-600 mx-auto mt-2"></div>
      </div>

      <div className="relative">

        {/* Timeline Line */}
        <div className="absolute left-4 sm:left-1/2 top-0 w-1 h-full bg-white/20"></div>

        <div className="flex flex-col gap-20">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`relative flex flex-col sm:flex-row ${
                index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
            >

              {/* Timeline Dot */}
              <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-black border-4 border-red-600 z-10 shadow-[0_0_15px_rgba(239,68,68,0.7)]"></div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="ml-16 sm:ml-0 sm:w-[45%] p-6 rounded-2xl border border-white bg-black backdrop-blur-md
                shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
                hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.7)]
                transition-all duration-500"
              >
                <h3 className="text-xl font-semibold text-white">
                  {edu.degree}
                </h3>

                <h4 className="text-sm text-gray-300">
                  {edu.school}
                </h4>

                <p className="text-sm text-gray-500">
                  {edu.date}
                </p>

                <p className="mt-3 text-gray-400 font-semibold">
                  Grade: {edu.grade}
                </p>

                <p className="mt-3 text-gray-400">
                  {edu.desc}
                </p>

              </motion.div>

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;