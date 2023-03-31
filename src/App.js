import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutSection from "./components/AboutSection/AboutSection";
import AdvantagesSection from "./components/AdvantagesSection/AdvantagesSection";
import PricingSection from "./components/PricingSection/PricingSection";
import Footer from "./components/Footer/Footer";
import Section from "./components/Section/Section";

import styles from "./components/Section/section.module.css";
import "./App.css";

import AboutItemsData from "./data/about-items.json";
import AdvantagesData from "./data/advantages-data.json";
import PricingData from "./data/pricing.json";
import HeroData from "./data/hero.json";

function App() {
  return (
    <div className="App">
      <Section>
        <Header />
      </Section>

      <Section className={styles.sectionHero}>
        <Hero {...HeroData} />
      </Section>

      <Section className={styles.sectionAbout}>
        <AboutSection
          title="Light, Fast & Powerful"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
          items={AboutItemsData}
        />
      </Section>

      <Section className={styles.sectionAdvantages}>
        <AdvantagesSection items={AdvantagesData} />
      </Section>

      <Section className={styles.sectionPricing}>
        <PricingSection items={PricingData} />
      </Section>

      <Section className={styles.sectionFooter}>
        <Footer />
      </Section>
    </div>
  );
}

export default App;
