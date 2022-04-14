import React from "react";

const ChartLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[300px] font-[Poppins] md:h-[400px] lg:h-[480px]">
      {children}
    </div>
  );
};

export default ChartLayout;
