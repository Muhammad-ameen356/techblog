import React from "react";

type Param = {
  text: string;
};

const Heading = ({ text }: Param) => {
  return (
    <div className="bg-white-500 overflow-y-auto left-0 top-0 h-full mr-4">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-700 mt-2">{text}</h2>
        <hr className="border-t-2 border-gray-300 mt-2" />
      </div>
    </div>
  );
};

export default Heading;
