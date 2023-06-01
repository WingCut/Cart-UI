import React from "react";
import Hero from "../components/Hero";
import CourseList from "../components/CourseList";
import CategotiesList from "../components/CategoriesList";
const HomePage = () => {
  return (
    <div className="holder">
      <Hero />
      <CourseList />
      <CategotiesList />
    </div>
  );
};

export default HomePage;
