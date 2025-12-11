import { useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import { X } from 'lucide-react';

export function DraggableWindow({ id, position, onClose, title, children }) {

  const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform } =
    useDraggable({ id });

  // Merge current drag transform with saved position
  const style = {
    position: "absolute",
    zIndex: 1000,
    transform: transform
      ? `translate3d(${position.x + transform.x}px, ${position.y + transform.y}px, 0)`
      : `translate3d(${position.x}px, ${position.y}px, 0)`,
  };


  return (
    <div ref={setNodeRef} style={style}>
      {/* Header / Drag handle */}
      <div
        ref={setActivatorNodeRef}
        {...listeners}
        {...attributes}
        style={{
          background: "#4f46e5",
          color: "#fff",
          padding: "8px 12px",
          cursor: "move",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      >
        <span>{title}</span>
        <button
          onClick={onClose}
          style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          <X />
        </button>
      </div>

      {/* Content */}
      <div
        style={{
          background: "#fff",
          padding: "12px",
          border: "1px solid #ccc",
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
          minWidth: "200px",
        }}
      >
        {children}
      </div>
    </div>
  );
}