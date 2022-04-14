import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1000px] w-full px-5 mx-auto">{children}</div>
  );
};

export default Container;
