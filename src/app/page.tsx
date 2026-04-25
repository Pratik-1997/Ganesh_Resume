import Spotlight from "./components/Reusable/Spotlight/Spotlight";
import About from "./components/Reusable/About/About";
import Projects from "./components/Reusable/Projects/Projects";
import Testimonials from "./components/Reusable/Testimonials/Testimonials";
import Experience from "./components/Reusable/Experience/Experience";

export default function Home() {
  return (
    <div>
      <Spotlight />
      <About />
      <Projects />
      <Testimonials />
      <Experience />
    </div>
  );
}
