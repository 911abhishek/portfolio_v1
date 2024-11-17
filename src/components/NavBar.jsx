import logo from "../assets/myLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const NavBAr=()=>{
  return (
    <>
      <nav className="bg-black mb-20 flex items-center justify-between py-3">
        <div className="flex flex-shrink-0 items-center">
          <img src={logo} className="w-12 h-12 hover:text-cyan-500"></img>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white ">
          <a href="https://www.linkedin.com/in/abhishek911/" target="_blank">
            <FaLinkedin className="hover:text-cyan-500" />
          </a>
          <a href="https://github.com/911abhishek/" target="_blank">
            <FaGithub className="hover:text-cyan-500" />
          </a>{" "}
          
         
          {/* <a href="" target="_blank">
            <FaInstagram className="hover:text-cyan-500" />
          </a> */}
        </div>
      </nav>
    </>
  );
}
export default NavBAr;