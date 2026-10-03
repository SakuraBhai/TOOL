import { useEffect, useRef, useState } from "react";
import { GripHorizontal, Minus, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type OverlaySize = "compact" | "regular";

type Props = {
  visible: boolean;
  opacity: number;
  size: OverlaySize;
  boundsRef: React.RefObject<HTMLDivElement | null>;
  onHide: () => void;
  onClose: () => void;
};

export function FloatingWindow({
  visible,
  opacity,
  size,
  boundsRef,
  onHide,
  onClose,
}: Props) {
  const [pos, setPos] = useState({ x: 48, y: 120 });
  const drag = useRef<{
    startX: number;
    startY: number;
    originX: number;
    originY: number;
  } | null>(null);
  const [dragging, setDragging] = useState(false);

  const width = size === "compact" ? 220 : 268;
  const height = size === "compact" ? 168 : 220;

  useEffect(() => {
    function move(clientX: number, clientY: number) {
      if (!drag.current) return;
      const box = boundsRef.current?.getBoundingClientRect();
      if (!box) return;
      const dx = clientX - drag.current.startX;
      const dy = clientY - drag.current.startY;
      const nextX = drag.current.originX + dx;
      const nextY = drag.current.originY + dy;
      const maxX = Math.max(8, box.width - width - 8);
      const maxY = Math.max(8, box.height - height - 8);
      setPos({
        x: Math.min(Math.max(8, nextX), maxX),
        y: Math.min(Math.max(8, nextY), maxY),
      });
    }

    function onMouseMove(e: MouseEvent) {
      move(e.clientX, e.clientY);
    }
    function onTouchMove(e: TouchEvent) {
      const t = e.touches[0];
      if (t) move(t.clientX, t.clientY);
    }
    function end() {
      drag.current = null;
      setDragging(false);
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", end);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", end);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", end);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", end);
    };
  }, [boundsRef, width, height]);

  if (!visible) return null;

  function startDrag(clientX: number, clientY: number) {
    drag.current = {
      startX: clientX,
      startY: clientY,
      originX: pos.x,
      originY: pos.y,
    };
    setDragging(true);
  }

  return (
    <div
      className={cn(
        "absolute z-20 overflow-hidden border border-border bg-surface shadow-[0_18px_40px_-20px_rgba(0,0,0,0.8)]",
        dragging ? "cursor-grabbing" : "",
      )}
      style={{
        left: pos.x,
        top: pos.y,
        width,
        opacity,
        borderRadius: 16,
        transition: dragging ? "none" : "width 250ms cubic-bezier(0.22,1,0.36,1), opacity 150ms ease",
      }}
    >
      <div
        className="flex h-10 items-center gap-2 border-b border-border bg-elevated px-3 select-none"
        onMouseDown={(e) => startDrag(e.clientX, e.clientY)}
        onTouchStart={(e) => {
          const t = e.touches[0];
          if (t) startDrag(t.clientX, t.clientY);
        }}
      >
        <GripHorizontal className="size-4 text-subtle" />
        <p className="flex-1 text-sm font-medium tracking-tight">Quick note</p>
        <button
          type="button"
          aria-label="Hide overlay"
          className="grid size-7 place-items-center rounded-sm text-muted hover:bg-bg hover:text-fg"
          onClick={onHide}
        >
          <Minus className="size-3.5" />
        </button>
        <button
          type="button"
          aria-label="Close overlay"
          className="grid size-7 place-items-center rounded-sm text-muted hover:bg-bg hover:text-fg"
          onClick={onClose}
        >
          <X className="size-3.5" />
        </button>
      </div>
      <div className="p-3">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-subtle">Overlay demo</p>
        <p className="mt-2 text-sm leading-snug text-fg">
          Drag the header. This is a normal floating window — notes, timers, or chat heads.
        </p>
        {size === "regular" ? (
          <p className="mt-3 text-xs leading-relaxed text-muted">
            On Android this uses WindowManager + SYSTEM_ALERT_WINDOW. No result bypass. No encrypted fake login.
          </p>
        ) : null}
      </div>
    </div>
  );
}
