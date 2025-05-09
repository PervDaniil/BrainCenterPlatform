import Hero from "@/components/landing/hero";
import About from "@/components/landing/about";
import Advantages from "@/components/landing/advantages";
import Courses from "@/components/landing/courses";
import FAQ from "@/components/landing/faq";
import Footer from "@/components/landing/footer";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Advantages />
      <Courses />
      <FAQ />
      <Footer />
    </main>
  );
}