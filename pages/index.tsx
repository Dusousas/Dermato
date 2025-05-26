import About from "@/components/About";
import Contact from "@/components/Contact";
import Doctor from "@/components/Doctor";
import LineCta from "@/components/LineCta";
import Main from "@/components/Main";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";


export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Portfolio />
      <LineCta />
      <Services />
      <Doctor />
      <Contact />
    </>
  );
}
