import { About } from './home/partials/about';
import { Contact } from './home/partials/contact';
import { FAQ } from './home/partials/faq';
import { Footer } from './home/partials/footer';
import { Hero } from './home/partials/hero';
import { Navbar } from './home/partials/navbar';
import { Project } from './home/partials/project';
import { Skill } from './home/partials/skill';
import { StandOut } from './home/partials/standOut';
import { Testimonials } from './home/partials/testimonials';
import { WorkExperience } from './home/partials/workExperience';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <StandOut />
      <Project />
      <WorkExperience />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
