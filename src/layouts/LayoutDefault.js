import React from "react";

const LayoutDefault = ({ children }) => {
  return (
    <>
      <div className="header"></div>
      <div className="site-content">{children}</div>
      <div className="footer"></div>
    </>
  );
};

export default LayoutDefault;
