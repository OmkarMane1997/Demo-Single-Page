import About from "../components/home/About";
import FAQ from "../components/home/FAQ";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import Price from "../components/home/Price";
import Work from "../components/home/Work";
import Contact from "../components/home/Contact";

const Home = () => {
  return (
    <div className="main">
      <Hero />
      <About />
      <Features />
      <Work />
      <FAQ />
      <Price />
      <Contact/>
    </div>
  );
};
export default Home;
