import { RiReactjsLine } from "react-icons/ri";

import { TbBrandRedux } from "react-icons/tb";
import { IoLogoFigma } from "react-icons/io5";

import { FaJs, FaGitAlt, FaFileExcel, FaHtml5, FaPython } from "react-icons/fa";

import { motion } from "framer-motion";

const IconMotion=(dur)=>({
  initial:{y:-10},
  animate:{
    y: [10 , -10],
    transition:{
      duration:dur,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",

    },

    
  }
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={IconMotion(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-purple-400 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400 " />
        </motion.div>
        <motion.div
          variants={IconMotion(2.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-purple-400 p-4"
        >
          <FaPython className="text-7xl text-cyan-400 " />
        </motion.div>
        <motion.div
          variants={IconMotion(2.9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-purple-400 p-4"
        >
          <FaHtml5 className="text-7xl text-cyan-400 " />
        </motion.div>
        <motion.div
          variants={IconMotion(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-purple-400 p-4"
        >
          <FaJs className="text-7xl text-cyan-400 " />
        </motion.div>
        <motion.div
          variants={IconMotion(3.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-purple-400 p-4"
        >
          <TbBrandRedux className="text-7xl text-cyan-400 " />
        </motion.div>
        <motion.div
          variants={IconMotion(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-purple-400 p-4"
        >
          <FaGitAlt className="text-7xl text-cyan-400 " />
        </motion.div>
        <motion.div
          variants={IconMotion(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-purple-400 p-4"
        >
          <IoLogoFigma className="text-7xl text-cyan-400 " />
        </motion.div>
        <motion.div
          variants={IconMotion(2.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-purple-400 p-4"
        >
          <FaFileExcel className="text-7xl text-cyan-400 " />
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Technologies;
