import React from "react";
import banner from "../images/home_page.png";
import skill from "../images/skill.jpg";
import { useState, useEffect } from "react";
import "./Home.css";
import Service from "./Service";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const show = services.slice(1, 5);

  return (
    <div className="mb-5">
      <div className="row">
        <div className="col-6 text-center align-center">
          <img className="img-fluid mt-5" src={skill} alt="Banner"></img>
        </div>
        <div className="col-6 align-center">
          <img className="img-fluid mt-5" src={banner} alt="Banner"></img>
          <h1 className="mt-5">Best Place to gain your skill for the market</h1>
        </div>
      </div>
      <div>
        <h1 className="text-center service my-5">Best selling Courses</h1>
        <div className="services my-5">
          {show.map((serv) => (
            <Service key={serv.key} service={serv}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
