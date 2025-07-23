import React from "react";

const SlowRespnose3 = async () => {
  const slowResponce = await fetch("https://procodrr.vercel.app/?sleep=3000");
  const data = await slowResponce.json();
  return <div>{JSON.stringify(data)}</div>;
};

export default SlowRespnose3;
