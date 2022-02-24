import SidebarOption from "components/SidebarOption/SidebarOption";
import React, { useEffect } from "react";

const Sidebar = ({ selectedOption = "categories", setSelectedOption }) => {
  const options = [
    { label: "Personal", id: "personal" },
    { label: "Categorias", id: "categories" },
    ,
    { label: "Productos", id: "products" },
  ];

  return (
    <div className="bg-whatkom">
      SIDEBAR
      <div className="flex flex-col">
        {options.map((option) => (
          <SidebarOption
            key={option.id}
            option={option}
            onClick={setSelectedOption}
            isSelected={selectedOption === option.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
