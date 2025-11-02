import React from "react";
import { useDrop } from "react-dnd";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import GraphWidget from "./GraphWidget";

const DashboardGrid = ({ layout, setLayout, widgets, setWidgets }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "WIDGET",
    drop: (item, monitor) => {
      const { widget } = item;
      const id = `${widget.id}-${Date.now()}`;
      const newWidget = { id, type: widget.id };
      const newLayoutItem = { i: id, x: 0, y: 0, w: 4, h: 5 };

      setWidgets((prev) => [...prev, newWidget]);
      setLayout((prev) => [...prev, newLayoutItem]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className="dashboard-container border rounded p-2 bg-white"
      style={{
        border: isOver ? "2px dashed #0d6efd" : "2px dashed #ccc",
        minHeight: "80vh",
        transition: "border 0.2s ease",
      }}
    >
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={50}
        width={1000}
        onLayoutChange={setLayout}
        isResizable
        isDraggable
      >
        {widgets.map((w) => (
          <div
            key={w.id}
            className="bg-light border rounded shadow-sm p-2"
            data-grid={layout.find((l) => l.i === w.id)}
          >
            {w.type === "graph" ? (
              <GraphWidget />
            ) : (
              <p className="p-3">Text Widget</p>
            )}
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

export default DashboardGrid;
