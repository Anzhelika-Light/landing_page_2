import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutSection from "./components/AboutSection/AboutSection";
import AdvantagesSection from "./components/AdvantagesSection/AdvantagesSection";
import PricingSection from "./components/PricingSection/PricingSection";
import Footer from "./components/Footer/Footer";

import "./App.css";

import AboutItemsData from "./data/about-items.json";
import AdvantagesData from "./data/advantages-data.json";
import PricingData from "./data/pricing.json";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero
        title="Introduce Your Product Quickly & Effectively"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
      />
      <AboutSection
        title="Light, Fast & Powerful"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
        items={AboutItemsData}
      />
      <AdvantagesSection items={AdvantagesData} />
      <PricingSection items={PricingData} />
      <Footer />
    </div>
  );
}

export default App;
