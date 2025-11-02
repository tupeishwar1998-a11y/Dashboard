import React from "react";
import { useDrag } from "react-dnd";

const widgets = [
  { id: "graph", name: "Graph Widget" },
  { id: "text", name: "Text Widget" }
];

const WidgetItem = ({ widget }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "WIDGET",
    item: { widget },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="border rounded p-2 mb-2 bg-secondary text-white text-center"
      style={{
        cursor: "grab",
        opacity: isDragging ? 0.4 : 1,
      }}
    >
      {widget.name}
    </div>
  );
};

const WidgetLibrary = () => (
  <div>
    <h5 className="mb-3">Widget Library</h5>
    {widgets.map((w) => (
      <WidgetItem key={w.id} widget={w} />
    ))}
  </div>
);

export default WidgetLibrary;
