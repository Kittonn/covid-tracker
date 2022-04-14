import React, { useState } from "react";
import Container from "../Container";
import { type } from "../../Data/case_type";
import { change_data } from "../../Store/timelineCaseSlice";
import { useDispatch } from "react-redux";

const TimelineCaseSelect: React.FC = () => {
  const [selected, setSelected] = useState<string>(type[0].value);
  const dispatch = useDispatch();
  return (
    <Container>
      <div>
        <select
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value);
            dispatch(change_data(e.target.value));
          }}
        >
          {type.map((item) => {
            return (
              <option key={item.id} value={item.value}>
                {item.text}
              </option>
            );
          })}
        </select>
      </div>
    </Container>
  );
};

export default TimelineCaseSelect;
