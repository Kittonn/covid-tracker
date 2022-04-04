import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCase } from "./store/covidAllCaseSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCase());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default App;
