import React, { Children } from "react";

const Loading = ({ Children }) => {
  return <div className="text-white text-2xl">Loading...{Children}</div>;
};

export default Loading;
