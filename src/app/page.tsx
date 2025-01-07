import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";

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
