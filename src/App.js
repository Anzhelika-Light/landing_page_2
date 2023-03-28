import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero
        title="Introduce Your Product Quickly & Effectively"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
      />
    </div>
  );
}

export default App;
