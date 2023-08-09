import About from "./assets/components/About";
import Contact from "./assets/components/Contact";
import Experience from "./assets/components/Experience";
import Home from "./assets/components/Home";
import NavBar from "./assets/components/NavBar";
import Proyects from "./assets/components/Proyects";
import SocialLinks from "./assets/components/SocialLinks";

export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Proyects />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  )
}
