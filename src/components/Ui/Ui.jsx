import React from "react";
import Navbar from "../navbar/Navbar";

const Ui = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Ui;
