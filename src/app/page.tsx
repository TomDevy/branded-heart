import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Offers from "@/components/home/Offers";

export default function Home() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Offers />
      <About />
      <Footer />
    </div>
  );
}
