import React from "react";
import { hourglass } from "ldrs";

const Loading = () => {
  hourglass.register();
  return (
    <>
      <div className="mt-5">
        <div className="mt-5 pt-5 text-center">
          <l-hourglass
            size="40"
            bg-opacity="0.1"
            speed="1.75"
            color="blue"
          ></l-hourglass>
        </div>
      </div>
    </>
  );
};

export default Loading;
