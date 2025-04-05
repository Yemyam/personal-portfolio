'use client'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "motion/react"

const Intro = () => {
  return (
    <motion.div className="flex gap-4" id="top">
        <div className="flex flex-col gap-4 md:w-9/12 w-full">
          <h1 className="text-4xl font-bold md:w-9/12 sm:w-full">Hi! I&apos;m <br></br>
            <TypeAnimation sequence={[
              "> Ethan Braum",
              10000,
              ">",
              1000
             ]}
              wrapper="span"
              speed={15}
              style={{display: "inline-block", minHeight: "2rem"}}
              repeat={Infinity}>
            </TypeAnimation>
          </h1>
          <p className="text-base text-gray-700 dark:text-gray-400">
                I am a 2nd year <span className='text-teal-400 dark:text-teal-600 font-bold'>computer science student</span> at the University of Calgary. 
                I am a passionate developer and I love to make cool projects. 
                I am always looking to expand my skillset and learn new things.
                Currently I am learning android development!
          </p>
        </div>
    </motion.div>
  )
}

export default Intro
