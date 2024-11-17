import { motion } from "framer-motion";
import profilePic from "../assets/square1.png";
import { BackgroundGradient } from "./Ui/BackGroundGradient";
import FlipWords from "./Ui/Flipwords";

import { HERO_CONTENT } from "../store";
import { HoverBorderGradient } from "./Ui/HoverButton";



const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="pb-4 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Abhishek Kumar Prasad
            </motion.h1>
            <a
              href="https://drive.google.com/file/d/1cKNohhi-33DyvCewl7xodLYdmWbAl2vI/view?usp=drive_link"
              target="_blank"
            >
              <HoverBorderGradient>Resume</HoverBorderGradient>
            </a>
            <motion.span
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent"
            >
              <FlipWords
                words={[
                  "Web Developer",
                  "Python Developer",
                  "AI & ML Enthusiast",
                  "WordPress Developer",
                  "Software Engineer",
                ]}
              />
            </motion.span>

            <motion.p
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="my-2 text-2xl max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            {" "}
            <BackgroundGradient>
              <motion.img
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0 }}
                src={profilePic}
                alt="profile pic"
                style={{ height: "450px", width: "450px" }}
                className="rounded-3xl"
              />
            </BackgroundGradient>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
