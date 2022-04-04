import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#001730] text-white flex justify-around items-center font-[Poppins] py-4">
      <div>
        <h1 className="text-2xl">
          Covid-19 Tracker <span className="text-xl">| Thailand</span>
        </h1>
      </div>
      <div className="text-xl">
        <a
          href="https://github.com/porames/the-researcher-covid-data"
          rel="noopener noreferrer"
          target="_blank"
        >
          Api Data
        </a>
        <a
          href="https://github.com/Kittonn"
          rel="noopener noreferrer"
          target="_blank"
          className="ml-6"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Navbar;
