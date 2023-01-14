import { Footer, Navbar } from '../components';
import {
  About,
  // Experience,
  Feedback,
  Skills,
  Hero,
  Insights,
  WhatsNew,
  World,
  Projects,
} from '../sections';
import Experience from '../sections/Experience/Experience';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Skills />
    {/* <Projects /> */}
    {/* <Insights /> */}
    {/* <WhatsNew /> */}
    {/* <World />
    <Feedback />
    <Footer /> */}
  </div>
);

export default Page;
