import React from "react";

const layout = ({ children }) => {
  //   const randomNumber = Math.random();
  //   console.log(randomNumber);

  //   if (randomNumber > 0.5) {
  //     throw new Error("Error occurred");
  //   }
  return (
    <div>
      <p>This is blog layout page</p>
      {children}
    </div>
  );
};

export default layout;
