import React from "react";
import Container from "./Container";
import { AiFillGithub } from "react-icons/ai";

const Navbar: React.FC = () => {
  return (
    <div className="bg-[#14213d] text-white">
      <Container>
        <div className="flex justify-between items-center font-[Poppins] py-4">
          <div>
            <h1 className="text-lg md:text-2xl">
              Covid-19 Tracker
              <span className="text-base md:text-xl"> | Thailand</span>
            </h1>
          </div>
          <div className="text-base md:text-xl">
            <a
              href="https://github.com/Kittonn"
              rel="noopener noreferrer"
              target="_blank"
            >
              <AiFillGithub className="text-3xl" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
