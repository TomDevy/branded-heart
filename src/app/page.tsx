import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}
