import { Navbar } from '../components';
import { About, Skills, Hero, Projects, Footer } from '../sections';
import Experience from '../sections/Experience/Experience';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <div className="gradient-02 z-0" />
      <About />
    </div>
    <Experience />
    <div className="relative">
      <div className="gradient-04 left-0 top-20 pointer-events-none" />
      <div className="gradient-04 pointer-events-none" />
      <Skills />
    </div>
    <Projects />
    <Footer />
  </div>
);

export default Page;
