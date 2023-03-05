import { Navbar } from '../components';
import {
  About,
  Skills,
  Hero,
  Projects,
  Footer,
  TechincalSkills,
} from '../sections';
import Experience from '../sections/Experience/Experience';
import Contact from '../sections/Contact';
import { StarsCanvas } from '../components/canvas';
import Roles from '../components/Roles';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <div className="gradient-02 z-0" />
      <About />
      <Roles />
    </div>
    <div id="experience" className="relative">
      <div className="gradient-03 z-0" />
      <Experience />
    </div>
    <div className="relative">
      <div className="gradient-04 left-0 top-20 pointer-events-none" />
      <div className="gradient-04 pointer-events-none" />
      {/* <Skills /> */}
      <TechincalSkills />
    </div>
    <Projects />
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
    <Footer />
  </div>
);

export default Page;
