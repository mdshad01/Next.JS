"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

const Error = ({ reset }) => {
  const router = useRouter();
  return (
    <div>
      <h2>Something went wrong in Client side</h2>
      <button
        className="!text-center !px-4 !py-2 !bg-blue-500 !text-white !rounded-md"
        // onClick={() => window.location.reload()}
        onClick={() =>
          startTransition(() => {
            router.refresh();
            reset();
          })
        }>
        Try Again
      </button>
    </div>
  );
};

export default Error;
