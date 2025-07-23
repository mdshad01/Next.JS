import React from "react";

const SlowRespnose2 = async () => {
  const slowResponce = await fetch("https://procodrr.vercel.app/?sleep=2000");
  const data = await slowResponce.json();
  return <div>{JSON.stringify(data)}</div>;
};

export default SlowRespnose2;
