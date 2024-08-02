import "./App.css";
import { Contacts } from "./component/Contacts";
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
    </>
  );
}

export default App;
