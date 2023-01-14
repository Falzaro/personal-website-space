import { Navbar } from '../components';
import { About, Skills, Hero, Projects, Footer } from '../sections';
import Experience from '../sections/Experience/Experience';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Skills />
    <Projects />
    <Footer />
  </div>
);

export default Page;
