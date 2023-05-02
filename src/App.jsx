import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Carousel from "./components/Carousel";
import Properties from "./components/Properties";
import SliderS from "./components/SliderS";
// import Map from "./Components/Map"
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <Slider/>
      <Carousel/>
      <Properties/>
      <SliderS />
      {/* <Map/> */}
      <Footer />
    </>
  );
}

export default App;