import { CONTACT } from "../store";
import { motion } from "framer-motion";
const Contacts=()=>{
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-50}}
      transition={{duration:1.5}}
      
      className="my-10 text-center text-4xl">Get in Touch</motion.h2>
      <motion.div 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:100}}
      transition={{duration:1.5}}
      className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <p className="my-4">{CONTACT.email}</p>

      </motion.div>
    </div>
  );
}
export default Contacts;