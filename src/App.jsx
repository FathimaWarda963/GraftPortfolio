import Nav from "./components/Nav";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import HowIWork from "./sections/HowIWork";
import Qualifications from "./sections/Qualifications";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="font-body">
      <Nav />
      <main>
        <Home />
        <Projects />
        <HowIWork />
        <Qualifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;