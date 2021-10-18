import React from "react";
import "./About.css";
import member1 from "../images/john.png";
import member2 from "../images/mary.png";
import member3 from "../images/phil.png";
const About = () => {
  return (
    <div className="about">
      <div class="container-fluid-padding">
        <div class="row welcome text-center">
          <div class="col-12">
            <h1 class="display-4">Meet the Team</h1>
          </div>
          <hr />
        </div>
      </div>

      <div class="container-fluid-padding">
        <div class="row padding">
          <div class=" col-md-4">
            <div class="card">
              <img class="card-img-top" src={member1} alt="team1" />
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <p class="card-text">
                  John is an Internet entrepreneur with almost 20 years of
                  experience.
                </p>
                <a href="#" class="btn btn-outline-secondary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div class=" col-md-4">
            <div class="card">
              <img class="card-img-top" src={member2} alt="team1" />
              <div class="card-body">
                <h4 class="card-title">Mary Jo</h4>
                <p class="card-text">
                  Marry is a designer with almost 10 years of digital design
                  experience.
                </p>
                <a href="#" class="btn btn-outline-secondary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div class=" col-md-4">
            <div class="card">
              <img class="card-img-top" src={member3} alt="team1" />
              <div class="card-body">
                <h4 class="card-title">Phil Ho</h4>
                <p class="card-text">
                  Phil is a developer with over 5 years ad web development
                  experience.
                </p>
                <a href="#" class="btn btn-outline-secondary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
