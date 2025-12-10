import { DndContext } from '@dnd-kit/core';
import { DraggableWindow } from './DraggableWindow';
import { useState } from 'react';

export const Drag = () => {
  const [showWindow, setShowWindow] = useState(true);

  return (
    <DndContext>
      {showWindow && (
        <DraggableWindow
          id="window-1"
          title="My Draggable Window"
          onClose={() => setShowWindow(false)}
        >
          <p>This is the content of the window.</p>
          <p>Drag me by the header and close me with X.</p>
        </DraggableWindow>
      )}
    </DndContext>
  );
}