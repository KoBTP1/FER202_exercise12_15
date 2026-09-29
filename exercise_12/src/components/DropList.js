import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function DropList() {
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDragOver = (index) => {
    if (draggingItem === null || draggingItem === index) return;

    const newItems = [...items];
    const draggedItemContent = newItems[draggingItem];

    newItems.splice(draggingItem, 1);
    newItems.splice(index, 0, draggedItemContent);

    setDraggingItem(index);
    setItems(newItems);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  return (
    <Container className="mt-4" style={{ maxWidth: "400px" }}>
      <h4 className="mb-3">Drag and Drop List</h4>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => {
              e.preventDefault();
              handleDragOver(index);
            }}
            onDragEnd={handleDragEnd}
            className={`list-group-item ${
              draggingItem === index ? "bg-light text-muted" : ""
            }`}
            style={{ cursor: "grab" }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default DropList;
