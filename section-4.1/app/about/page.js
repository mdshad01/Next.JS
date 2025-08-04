"use client";

import { useState } from "react";

const About = () => {
  const [fruit, setFruit] = useState(["mango", "orange", "apple", "grapes", "banana"]);
  return (
    <>
      <div>
        <h1 className="title">About Us</h1>
        <p>We are a company dedicated to providing quality services.</p>
        <button onClick={() => setFruit(null)}>Click me</button>
        {fruit.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </>
  );
};

export default About;
