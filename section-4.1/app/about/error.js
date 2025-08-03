"use client";

const Error = ({ reset }) => {
  return (
    <div>
      <h2>Something went wrong in Client side</h2>
      <button
        className="!text-center !px-4 !py-2 !bg-blue-500 !text-white !rounded-md"
        // onClick={() => window.location.reload()}
        onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
};

export default Error;
