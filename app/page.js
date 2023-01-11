import { Footer, Navbar } from '../components';
import {
  About,
  // Experience,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from '../sections';
import Experience from '../sections/Experience/Experience';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Experience />
    {/* <GetStarted /> */}
    {/* <WhatsNew /> */}
    {/* <World />
    <Insights />
    <Feedback />
    <Footer /> */}
  </div>
);

export default Page;
