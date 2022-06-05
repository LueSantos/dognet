import React from "react";
import CategorySelect from "../../components/CategorySelect";
import Establishment from "../../components/Establishment";
import "./index.less";



function DashboardContainer() {
 

  return (
    <div className="my-dashboard">
     <CategorySelect />
     <Establishment />
    </div>
  );
}

export default DashboardContainer;