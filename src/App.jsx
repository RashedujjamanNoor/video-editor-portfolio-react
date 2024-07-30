import "./App.css";
import Home from "./component/Home";
import { Navbar } from "./component/Navbar";
import { Projects } from "./component/Projects";
import { Software } from "./component/Software";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Software />
      <Projects />
    </>
  );
}

export default App;
