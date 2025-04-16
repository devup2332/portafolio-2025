import Banner from "./components/Banner/Banner";
import BottomNav from "./components/BottomNav/BottomNav";
import Bubble from "./components/Bubble/Bubble";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="font-primary relative overflow-x-hidden">
      <Bubble
        color="var(--radial-1)"
        className="absolute top-0 -translate-y-[300px] left-1/2 -translate-x-1/2"
      />
      <Header />
      <BottomNav />
      <Banner />
    </div>
  );
};

export default App;
