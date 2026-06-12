import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Practices } from "@/components/Practices";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Testimonials />
        <Practices />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
