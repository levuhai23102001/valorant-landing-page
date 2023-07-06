import React from "react";

const TabsContent = ({ cName, children }) => {
  return (
    <div className="tab-content">
      <div className={cName}>{children}</div>
    </div>
  );
};

export default TabsContent;
