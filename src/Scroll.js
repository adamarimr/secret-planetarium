import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "0.5px solid purple",
        height: "500px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
