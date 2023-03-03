import { Navbar } from '../components';
import ServiceCard from '../components/ServiceCard';
import { About, Skills, Hero, Projects, Footer } from '../sections';
import Experience from '../sections/Experience/Experience';
import { services } from '../constants';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <div className="gradient-02 z-0" />
      <About />
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
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
