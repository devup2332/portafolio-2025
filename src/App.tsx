import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import BottomNav from "./components/BottomNav/BottomNav";
import Bubble from "./components/Bubble/Bubble";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="font-primary px-8 relative overflow-x-hidden">
      <Bubble
        color="var(--radial-1)"
        className="absolute top-0 -translate-y-[300px] left-1/2 -translate-x-1/2"
      />
      <Header />
      <BottomNav />
      <Banner />
      <Bubble
        color="var(--radial-2)"
        className="absolute right-0 translate-x-[500px]"
      />
      <About />
    </div>
  );
};

export default App;
