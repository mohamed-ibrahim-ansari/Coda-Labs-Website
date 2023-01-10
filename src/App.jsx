import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/Pages/HomePage";
import ServicePage from "./components/Pages/ServicePage";
import CategoryPage from "./components/Pages/CategoryPage";
import ProjectsPage from "./components/Pages/ProjectsPage";
import BlogPage from "./components/Pages/BlogPage";
import MemberPage from "./components/Pages/MemberPage";
import ClientsPage from "./components/Pages/ClientsPage";
import ProsolPage from "./components/ProsolPage";
import PropediaPage from "./components/PropediaPage";
import GoosparesPage from "./components/GoosparesPage";
import Footer from "./components/Footer";
import ContactusPage from "./components/ContactusPage";
import ErrorPage from "./components/ErrorPage";
import CreateAccountPage from "./components/CreateAccountPage";
import ConfirmationPop from "./components/ConfirmationPop";


function App() {
  const [ContactusShow, setContactusShow] = useState(false);
  const [createAccountShow, setCreateAccountShow] = useState(false);
  const [ConfirmationPopShow, setConfirmationPopShow] = useState(false);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              setContactusShow={setContactusShow}
              setCreateAccountShow={setCreateAccountShow}
            />
          }
        />
        <Route path="/ServicePage" element={<ServicePage />} />
        <Route path="/CategoryPage" element={<CategoryPage />} />
        <Route path="/ProjectsPage" element={<ProjectsPage />} />

        <Route path="/blogPage" element={<BlogPage />} />
        <Route path="/MemberPage" element={<MemberPage />} />
        <Route path="/ClientsPage" element={<ClientsPage />} />
        <Route path="/ProsolPage" element={<ProsolPage />} />
        <Route path="/PropediaPage" element={<PropediaPage />} />
        <Route path="/GoosparesPage" element={<GoosparesPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />

      {ContactusShow && <ContactusPage setContactusShow={setContactusShow} />}
      {createAccountShow && (
        <CreateAccountPage
          setCreateAccountShow={setCreateAccountShow}
          setConfirmationPopShow={setConfirmationPopShow}
        />
      )}
      {ConfirmationPopShow && (
        <ConfirmationPop
          setConfirmationPopShow={setConfirmationPopShow}
          setCreateAccountShow={setCreateAccountShow}
        />
      )}
    </div>
  );
}

export default App;
