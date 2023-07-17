import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className="text-[100px] font-bold">Our Works</h1>
      {children}
    </div>
  );
};

export default Layout;
