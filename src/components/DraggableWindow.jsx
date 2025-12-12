import { useDraggable } from "@dnd-kit/core";
import { X } from 'lucide-react';

export const DraggableWindow = ({ id, position, onClose, title, children }) => {

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
      <div className="bg-card-header text-background flex justify-between rounded-t-xl border-t-4 border-l-4 border-r-4 border-border p-4 cursor-move"
        ref={setActivatorNodeRef}
        {...listeners}
        {...attributes}
      >
        <span className="text-primary-foreground">{title}</span>
        <button className="cursor-pointer"
          onClick={onClose}
        >
          <X />
        </button>
      </div>
      <div className="bg-card p-12 rounded-b-xl border-4 border-border">
        {children}
      </div>
    </div>
  );
}