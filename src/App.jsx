import About from "./components/About";
import BgBlack from "./components/BgBlack";
import Contacts from "./components/Contacts";


import Hero from "./components/Hero";
import MyExperience from "./components/MyExperince";
import NavBAr from "./components/NavBar";
import Projects from "./components/Projects";
import Technologies from "./components/Technolgies";



function App() {
  return <><BgBlack>
    <NavBAr/>
  <Hero/>
  <About/>
  <Technologies/>

  <MyExperience/>
  <Projects/>
  <Contacts/>
  </BgBlack>
  
  </>
}

export default App
