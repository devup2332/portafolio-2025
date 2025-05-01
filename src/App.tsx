import { Toaster } from "sonner";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import BottomNav from "./components/BottomNav/BottomNav";
import Bubble from "./components/Bubble/Bubble";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <div className="font-primary relative px-8 overflow-hidden pb-32">
      <div className="w-full max-w-lg mx-auto lg:max-w-4xl 2xl:max-w-6xl 3xl:max-w-[1200px]">
        <Bubble
          color="var(--radial-1)"
          className="top-0 -translate-y-[300px] left-1/2 -translate-x-1/2 xl:w-[1260px] xl:h-[1260px] xl:-translate-y-[700px]"
        />
        <Header />
        <BottomNav />
        <Banner />
        <Bubble
          color="var(--radial-2)"
          className="right-0 translate-x-[500px] xl:hidden"
        />
        <About />
        <Bubble
          color="var(--radial-1)"
          className="left-0 -translate-x-[500px] xl:w-[1500px] xl:h-[1500px] xl:-translate-y-[900px] xl:left-1/2 xl:-translate-x-1/2"
        />
        <Experience />
        <Bubble
          color="var(--radial-2)"
          className="right-0 translate-x-[500px] xl:w-[900px] xl:h-[900px] xl:translate-x-0"
        />
        <Projects />
        <Bubble
          color="var(--radial-1)"
          className="left-0 -translate-x-[500px] -translate-y-[500px] xl:w-[900px] xl:h-[900px] xl:translate-x-0 xl:-translate-y-[150px]"
        />
        <Contact />
      </div>
      <Toaster />
    </div>
  );
};

export default App;
