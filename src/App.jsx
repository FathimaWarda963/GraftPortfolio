import Nav from "./components/Nav";
import VineTrail from "./components/VineTrail";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import HowIWork from "./sections/HowIWork";
import Qualifications from "./sections/Qualifications";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-body relative">
      <VineTrail />
      <Nav />
      <main className="relative z-10">
        <Home />
        <Projects />
        <HowIWork />
        <Qualifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;