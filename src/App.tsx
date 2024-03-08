import Email from "./components/Email";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurCompany from "./components/OurCompany";
import OurServices from "./components/OurServices";
import OurTeam from "./components/OurTeam";
import Testimonials from "./components/Testomonials";
import TrustedBy from "./components/TrustedBy";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <OurServices />
        <Testimonials />
        <OurCompany />
        <OurTeam />
        <Email />
      </main>
      <Footer />
    </>
  );
};
export default App;
