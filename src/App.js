import Home from './Containers/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Containers/Contact/Contact";
import Projects from './Containers/Projects/Projects';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
