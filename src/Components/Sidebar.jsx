import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import WidgetLibrary from "./WidgetLibrary";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`bg-dark text-light p-3 d-flex flex-column ${
        open ? "sidebar-open" : "sidebar-closed"
      }`}
      style={{ transition: "width 0.3s ease" }}
    >
      <button
        className="btn btn-outline-light mb-3 align-self-start"
        onClick={() => setOpen(!open)}
      >
        <FiMenu />
      </button>
      {open && <WidgetLibrary />}
    </div>
  );
};

export default Sidebar;
