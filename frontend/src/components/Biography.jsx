import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Welcome to UnityMed, where we are dedicated to providing
            high-quality healthcare services to our community. Our mission is
            to ensure that every individual receives compassionate care and
            personalized attention.
          </p>
          <p> In 2024, UnityMed was established with the vision of transforming
            hospital management through innovative technology solutions. Our
            MERN STACK PROJECT aims to streamline administrative processes,
            optimize resource utilization, and enhance patient experience.</p>
        
          <p>
          We believe that effective hospital management is essential for
            providing efficient healthcare services. Our passion for optimizing
            processes and leveraging technology drives us to innovate and
            achieve excellence in hospital administration.
          </p>
          <p>UnityMed is committed to excellence in healthcare management. Our
            team of professionals works tirelessly to improve operational
            efficiency and deliver exceptional services to our patients.</p>
        
        </div>
      </div>
    </>
  );
};

export default Biography;
