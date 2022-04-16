import React from "react";
import ProvinceCaseSelect from "../Select/ProvinceCaseSelect";
import Container from "../Container";

const ProvinceCase: React.FC = () => {
  return (
    <div className="bg-[#e5e5e5] font-[Kanit] py-8">
      <Container>
        <ProvinceCaseSelect />
      </Container>
    </div>
  );
};

export default ProvinceCase;
