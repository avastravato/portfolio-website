import { DndContext } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { DraggableWindow } from './DraggableWindow';
import { useState } from 'react';

export const Drag = () => {
  const [showWindow, setShowWindow] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <DndContext
      modifiers={[restrictToWindowEdges]}
      onDragEnd={(event) => {
        const { delta } = event;
        setPosition(prev => ({
          x: prev.x + delta.x,
          y: prev.y + delta.y
        }))
      }}
    >
      {showWindow && (
        <DraggableWindow
          id="window-1"
          title="My Draggable Window"
          position={position}
          onClose={() => setShowWindow(false)}
        >
          <p>This is the content of the window.</p>
          <p>Drag me by the header and close me with X.</p>
        </DraggableWindow>
      )}
    </DndContext>
  );
}