import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import Email from "./components/Email";
import Footer from "./components/Footer";

export default function Home() {
  return (
   
      <main className="flex min-h-screen flex-col bg-black ">
        <Navbar/>
        <div className="conatiner mt-24 mx-auto px-12 py-4">
        <HeroSection/>
        <About/>
        <Project/>
        <Email/>
        </div>
        <Footer/>

      </main>

  );
}
