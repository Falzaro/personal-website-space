import { Navbar } from '../components';
import { About, Skills, Hero, Projects, Footer } from '../sections';
import Experience from '../sections/Experience/Experience';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <div className="relative">
      <Navbar />
      <div className="absolute w-[50%] inset-0 gradient-01 z-11 pointer-events-none" />
    </div>
    <Hero />
    <About />
    <Experience />
    <Skills />
    <Projects />
    <Footer />
  </div>
);

export default Page;
