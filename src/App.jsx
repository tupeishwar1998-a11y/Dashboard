import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Sidebar from "./Components/Sidebar";
import DashboardGrid from "./Components/DashboardGrid";

function App() {
  const [widgets, setWidgets] = useState([]);
  const [layout, setLayout] = useState([]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="d-flex vh-100">
        <Sidebar />
        <main className="flex-grow-1 p-4 bg-light overflow-auto">
          <h3 className="mb-4">Dashboard</h3>
          <DashboardGrid
            layout={layout}
            setLayout={setLayout}
            widgets={widgets}
            setWidgets={setWidgets}
          />
        </main>
      </div>
    </DndProvider>
  );
}

export default App;
