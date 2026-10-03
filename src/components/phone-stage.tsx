import { useRef } from "react";
import { Bell, Search } from "lucide-react";
import { FloatingWindow, type OverlaySize } from "@/components/floating-window";

const NOTES = [
  { title: "Standup notes", body: "Ship overlay demo, keep the UI quiet." },
  { title: "Grocery", body: "Oat milk, tomatoes, black coffee." },
  { title: "Read later", body: "WindowManager overlay patterns, 2026." },
];

type Props = {
  overlayOpen: boolean;
  opacity: number;
  size: OverlaySize;
  onHide: () => void;
  onClose: () => void;
};

export function PhoneStage({ overlayOpen, opacity, size, onHide, onClose }: Props) {
  const stageRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mx-auto w-full max-w-[360px]">
      <div className="rounded-2xl border border-border bg-elevated p-3">
        <div
          ref={stageRef}
          className="relative overflow-hidden rounded-xl bg-bg"
          style={{ height: 640 }}
        >
          <header className="flex items-center justify-between px-4 pt-5 pb-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">Notes</p>
              <h2 className="mt-1 text-xl font-medium tracking-tight">Today</h2>
            </div>
            <div className="flex gap-2">
              <span className="grid size-9 place-items-center rounded-md border border-border text-muted">
                <Search className="size-4" />
              </span>
              <span className="grid size-9 place-items-center rounded-md border border-border text-muted">
                <Bell className="size-4" />
              </span>
            </div>
          </header>
          <div className="space-y-2 px-3 pb-6">
            {NOTES.map((note) => (
              <article
                key={note.title}
                className="rounded-lg border border-border bg-surface px-3.5 py-3"
              >
                <h3 className="text-sm font-medium">{note.title}</h3>
                <p className="mt-1 text-sm text-muted">{note.body}</p>
              </article>
            ))}
          </div>

          <FloatingWindow
            visible={overlayOpen}
            opacity={opacity}
            size={size}
            boundsRef={stageRef}
            onHide={onHide}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  );
}
