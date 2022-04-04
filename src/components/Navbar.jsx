import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#14213d] text-white">
      <div className=" flex justify-between items-center font-[Poppins] py-4 w-[90%] lg:w-[80%] xl:w-[60%] mx-auto">
        <div>
          <h1 className="text-lg md:text-2xl">
            Covid-19 Tracker
            <span className="text-base md:text-xl"> | Thailand</span>
          </h1>
        </div>
        <div className="text-base md:text-xl">
          <a
            href="https://github.com/porames/the-researcher-covid-data"
            rel="noopener noreferrer"
            target="_blank"
          >
            Api Data
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
