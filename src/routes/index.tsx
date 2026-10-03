import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ControlsPanel } from "@/components/controls-panel";
import { PhoneStage } from "@/components/phone-stage";
import type { OverlaySize } from "@/components/floating-window";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [overlayOpen, setOverlayOpen] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [size, setSize] = useState<OverlaySize>("regular");

  return (
    <main className="min-h-dvh bg-bg text-fg">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12">
        <header className="mb-8 max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-subtle">FloatPane</p>
          <h1 className="mt-2 text-3xl font-medium tracking-tight sm:text-4xl">
            A normal floating window
          </h1>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Interactive overlay on a phone mock. Drag it, hide it, resize it. Built as a web demo of Android overlay windows — not a result-bypass or fake login tool.
          </p>
        </header>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <PhoneStage
            overlayOpen={overlayOpen}
            opacity={opacity}
            size={size}
            onHide={() => setOverlayOpen(false)}
            onClose={() => setOverlayOpen(false)}
          />
          <ControlsPanel
            overlayOpen={overlayOpen}
            opacity={opacity}
            size={size}
            onToggle={() => setOverlayOpen((v) => !v)}
            onOpacity={setOpacity}
            onSize={setSize}
          />
        </div>
      </div>
    </main>
  );
}
