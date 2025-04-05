'use client'
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {
  return (
    <div className="flex gap-4" id="top">
        <div className="flex flex-col gap-4 w-9/12">
          
          <h1 className="text-4xl font-bold md:w-9/12 sm:w-full">Hi! I&apos;m <br></br><TypeAnimation sequence={[
            "> Ethan Braum",
            10000,
            ">",
            1000
      ]}
      wrapper="span"
      speed={25}
      style={{}}
      repeat={Infinity}></TypeAnimation></h1>
          <p className="text-base text-gray-700 dark:text-gray-400">
                I am a 2nd year computer science student at the University of Calgary. 
                I am a passionate developer and I love to make cool projects. 
                I am always looking to expand my skillset and learn new things!
          </p>
        </div>
    </div>
  )
}

export default Intro
