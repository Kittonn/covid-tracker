import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#14213d] text-white font-[Poppins] p-5 text-center text-sm md:text-lg tracking-wider">
      {`Copyright © ${new Date()
        .getFullYear()
        .toString()} Kittipod Lambangchang`}
    </div>
  );
};

export default Footer;
