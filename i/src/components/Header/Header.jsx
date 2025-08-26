import { useState } from "react";
import data from "../../data/data.json";

const Header = ({ resetFilter }) => {
  const [totalExtensions, setTotalExtensions] = useState(data.length);

  return (
    <div className="bg-white rounded-lg shadow-xs p-6">
      <div className="flex items-center justify-between gap-3">
        <a
          href="/"
          className="logo">
          <img
            src="/images/logo.svg"
            alt="Image"
          />
        </a>

        <div className="bg-gray-100 rounded-lg p-2">
          <span className="text-sm text-gray-700 font-medium">
            Total: {totalExtensions}
          </span>
          <button
            className="bg-red-500 rounded-xl py-1 px-2 text-sm text-white ml-2"
            onClick={resetFilter}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
