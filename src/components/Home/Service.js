import React from "react";

const service = (props) => {
  const { category, name, ratings, instructor, img, price } = props.service;
  return (
    <div>
      <div
        class="card"
        style={{
          width: "25rem",
          marginLeft: "15px ",
          marginBottom: "10px",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        <img class="card-img-top" src={img} alt="card" />
        <div class="card-body">
          <h3 class="card-title">{name}</h3>
          <p class="card-text">Category : {category}</p>
          <p class="card-text">Ratings: {ratings}</p>
          <p class="card-text">Instructor : {instructor}</p>
          <p class="card-text">Price : ${price}</p>
          <a href="/services" class="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default service;
