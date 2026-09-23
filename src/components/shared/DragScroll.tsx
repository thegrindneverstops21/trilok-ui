import { useRef, useState } from "react";
import type { PointerEvent, ReactNode } from "react";
import "../../styles/DragScroll.css";

interface DragScrollProps {
  children: ReactNode;
  className: string;
  label: string;
}

/** Shared movie/genre rail: mouse dragging, native touch swiping and keyboard scrolling. */
export const DragScroll = ({ children, className, label }: DragScrollProps) => {
  const start = useRef<{ pointerId: number; x: number; scroll: number } | null>(null);
  const [dragging, setDragging] = useState(false);

  const finishDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (start.current?.pointerId !== event.pointerId) return;
    start.current = null;
    setDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div
      className={`${className} drag-scroll${dragging ? " is-dragging" : ""}`}
      role="region"
      aria-label={`${label}. Swipe, drag, or use the arrow keys to browse.`}
      tabIndex={0}
      onDragStart={(event) => event.preventDefault()}
      onPointerDown={(event) => {
        // Leave touch gestures to the browser so horizontal swipes and page scrolling stay native.
        if (event.pointerType !== "mouse" || event.button !== 0) return;
        const rail = event.currentTarget;
        if (rail.scrollWidth <= rail.clientWidth) return;
        start.current = { pointerId: event.pointerId, x: event.clientX, scroll: rail.scrollLeft };
        // Capture keeps the drag working when the mouse leaves the rail before release.
        rail.setPointerCapture(event.pointerId);
        rail.focus({ preventScroll: true });
        setDragging(true);
        event.preventDefault();
      }}
      onPointerMove={(event) => {
        if (start.current?.pointerId !== event.pointerId) return;
        event.currentTarget.scrollLeft = start.current.scroll - (event.clientX - start.current.x);
      }}
      onPointerUp={finishDrag}
      onPointerCancel={finishDrag}
      onLostPointerCapture={finishDrag}
    >
      {children}
    </div>
  );
};
