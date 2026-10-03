import { Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { OverlaySize } from "@/components/floating-window";

type Props = {
  overlayOpen: boolean;
  opacity: number;
  size: OverlaySize;
  onToggle: () => void;
  onOpacity: (v: number) => void;
  onSize: (s: OverlaySize) => void;
};

export function ControlsPanel({
  overlayOpen,
  opacity,
  size,
  onToggle,
  onOpacity,
  onSize,
}: Props) {
  return (
    <aside className="flex flex-col gap-6 rounded-2xl border border-border bg-surface p-5">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">Playground</p>
        <h2 className="mt-1 text-lg font-medium tracking-tight">Floating window</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Drag the overlay on the phone. Hide or close it, change size, or fade it. This is a clean overlay — the same idea as chat heads or a floating timer.
        </p>
      </div>

      <Button onClick={onToggle} className="w-full">
        <Layers className="size-4" />
        {overlayOpen ? "Hide overlay" : "Show overlay"}
      </Button>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="opacity" className="text-sm font-medium">
            Opacity
          </label>
          <span className="font-mono text-xs text-muted tabular-nums">{Math.round(opacity * 100)}%</span>
        </div>
        <input
          id="opacity"
          type="range"
          min={40}
          max={100}
          value={Math.round(opacity * 100)}
          onChange={(e) => onOpacity(Number(e.target.value) / 100)}
          className="w-full accent-primary"
        />
      </div>

      <div>
        <p className="mb-2 text-sm font-medium">Size</p>
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant={size === "compact" ? "default" : "ghost"}
            onClick={() => onSize("compact")}
          >
            Compact
          </Button>
          <Button
            variant={size === "regular" ? "default" : "ghost"}
            onClick={() => onSize("regular")}
          >
            Regular
          </Button>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-elevated p-4">
        <p className="text-sm font-medium">Android mapping</p>
        <ul className="mt-2 space-y-1.5 text-sm text-muted">
          <li>Permission: SYSTEM_ALERT_WINDOW</li>
          <li>API: WindowManager.addView</li>
          <li>Type: TYPE_APPLICATION_OVERLAY</li>
          <li>Drag: updateViewLayout on move</li>
        </ul>
      </div>
    </aside>
  );
}
