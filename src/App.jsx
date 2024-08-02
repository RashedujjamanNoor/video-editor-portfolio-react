import "./App.css";
import { Contacts } from "./component/Contacts";
import Footer from "./component/Footer";
import Home from "./component/Home";
import { Navbar } from "./component/Navbar";
import { Projects } from "./component/Projects";
import { Service } from "./component/Service";
import { Software } from "./component/Software";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Software />
      <Projects />
      <Service />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
