"use client";
import "./globals.css";

const GlobalError = () => {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <div>
          <h2>Something went wrong in root Layout</h2>
          <button
            className="!text-center !px-4 !py-2 !bg-blue-500 !text-white !rounded-md"
            // onClick={() => window.location.reload()}
            onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
