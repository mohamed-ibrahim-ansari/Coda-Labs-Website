import React from "react";
import BlogPage from "./Pages/BlogPage";
import CategoryPage from "./Pages/CategoryPage";
import ClientsPage from "./Pages/ClientsPage";
import HomePage from "./Pages/HomePage";
import MemberPage from "./Pages/MemberPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ServicePage from "./Pages/ServicePage";
const Content = (props) => {
  const {
    setContentShow,
    setGoosparesShow,
    setPropediaShow,
    setProsolShow,
    setContactusShow,
  } = props;
  return (
    <div className="content">
      <HomePage
        setProsolShow={setProsolShow}
        setPropediaShow={setPropediaShow}
        setContentShow={setContentShow}
        setGoosparesShow={setGoosparesShow}
        setContactusShow={setContactusShow}
      />
      <ServicePage
        setProsolShow={setProsolShow}
        setPropediaShow={setPropediaShow}
        setContentShow={setContentShow}
        setGoosparesShow={setGoosparesShow}
        seContactusShow={setContactusShow}
      />
      <CategoryPage />
      <ProjectsPage />
      <BlogPage />
      <MemberPage />
      <ClientsPage />
    </div>
  );
};

export default Content;
