import React from "react";
import { useState, useEffect } from "react";
import Service from "../Home/Service";
import "./services.css";

const Services = () => {
  const [course, setCourses] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <h1 style={{ fontSize: "60px", marginBottom: "35px" }}>Our Courses</h1>
      <div className="services mx-auto my-auto">
        {course.map((serv) => (
          <Service key={serv.key} service={serv}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
