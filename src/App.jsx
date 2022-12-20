import Header from "./components/Header";
import Content from "./components/Content";
import ProsolPage from "./components/ProsolPage";
import PropediaPage from "./components/PropediaPage";
import GoosparesPage from "./components/GoosparesPage";
import Footer from "./components/Footer";
import { useState } from "react";
import ContactusPage from "./components/ContactusPage";
import "./App.css";
function App() {

  const [prosolShow, setProsolShow] = useState(false);
  const [PropediaShow, setPropediaShow] = useState(false);
  const [GoosparesShow, setGoosparesShow] = useState(false);
  const [ContactusShow, setContactusShow] = useState(false);
  const [ContentShow, setContentShow] = useState(true);

  return (
    <div className="App">
      <Header
        setProsolShow={setProsolShow}
        setPropediaShow={setPropediaShow}
        setContentShow={setContentShow}
        setGoosparesShow={setGoosparesShow}
        setContactusShow={setContactusShow}
      />
      {ContentShow && (
        <Content
          setProsolShow={setProsolShow}
          setPropediaShow={setPropediaShow}
          setContentShow={setContentShow}
          setGoosparesShow={setGoosparesShow}
          setContactusShow={setContactusShow}
        />
      )}
      {prosolShow && <ProsolPage />}
      {PropediaShow && <PropediaPage />}
      {GoosparesShow && <GoosparesPage />}
      {ContactusShow && (
        <ContactusPage
          setProsolShow={setProsolShow}
          setPropediaShow={setPropediaShow}
          setContentShow={setContentShow}
          setGoosparesShow={setGoosparesShow}
          setContactusShow={setContactusShow}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
