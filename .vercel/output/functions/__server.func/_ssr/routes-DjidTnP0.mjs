import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Layers, i as Minus, o as GripHorizontal, r as Search, s as Bell, t as X } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DjidTnP0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg hover:bg-primary/90",
			ghost: "bg-elevated text-fg hover:bg-elevated/80 border border-border",
			outline: "border border-border bg-transparent text-fg hover:bg-elevated",
			danger: "bg-elevated text-fg border border-border hover:border-fg/30"
		},
		size: {
			default: "h-11 px-4 text-sm rounded-md",
			sm: "h-9 px-3 text-sm rounded-sm",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function ControlsPanel({ overlayOpen, opacity, size, onToggle, onOpacity, onSize }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "flex flex-col gap-6 rounded-2xl border border-border bg-surface p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.16em] text-subtle",
					children: "Playground"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 text-lg font-medium tracking-tight",
					children: "Floating window"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: "Drag the overlay on the phone. Hide or close it, change size, or fade it. This is a clean overlay — the same idea as chat heads or a floating timer."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: onToggle,
				className: "w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-4" }), overlayOpen ? "Hide overlay" : "Show overlay"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "opacity",
					className: "text-sm font-medium",
					children: "Opacity"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-xs text-muted tabular-nums",
					children: [Math.round(opacity * 100), "%"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "opacity",
				type: "range",
				min: 40,
				max: 100,
				value: Math.round(opacity * 100),
				onChange: (e) => onOpacity(Number(e.target.value) / 100),
				className: "w-full accent-primary"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-sm font-medium",
				children: "Size"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: size === "compact" ? "default" : "ghost",
					onClick: () => onSize("compact"),
					children: "Compact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: size === "regular" ? "default" : "ghost",
					onClick: () => onSize("regular"),
					children: "Regular"
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border bg-elevated p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: "Android mapping"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-2 space-y-1.5 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Permission: SYSTEM_ALERT_WINDOW" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "API: WindowManager.addView" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Type: TYPE_APPLICATION_OVERLAY" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Drag: updateViewLayout on move" })
					]
				})]
			})
		]
	});
}
function FloatingWindow({ visible, opacity, size, boundsRef, onHide, onClose }) {
	const [pos, setPos] = (0, import_react.useState)({
		x: 48,
		y: 120
	});
	const drag = (0, import_react.useRef)(null);
	const [dragging, setDragging] = (0, import_react.useState)(false);
	const width = size === "compact" ? 220 : 268;
	const height = size === "compact" ? 168 : 220;
	(0, import_react.useEffect)(() => {
		function move(clientX, clientY) {
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
				y: Math.min(Math.max(8, nextY), maxY)
			});
		}
		function onMouseMove(e) {
			move(e.clientX, e.clientY);
		}
		function onTouchMove(e) {
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
	}, [
		boundsRef,
		width,
		height
	]);
	if (!visible) return null;
	function startDrag(clientX, clientY) {
		drag.current = {
			startX: clientX,
			startY: clientY,
			originX: pos.x,
			originY: pos.y
		};
		setDragging(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("absolute z-20 overflow-hidden border border-border bg-surface shadow-[0_18px_40px_-20px_rgba(0,0,0,0.8)]", dragging ? "cursor-grabbing" : ""),
		style: {
			left: pos.x,
			top: pos.y,
			width,
			opacity,
			borderRadius: 16,
			transition: dragging ? "none" : "width 250ms cubic-bezier(0.22,1,0.36,1), opacity 150ms ease"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-10 items-center gap-2 border-b border-border bg-elevated px-3 select-none",
			onMouseDown: (e) => startDrag(e.clientX, e.clientY),
			onTouchStart: (e) => {
				const t = e.touches[0];
				if (t) startDrag(t.clientX, t.clientY);
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripHorizontal, { className: "size-4 text-subtle" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "flex-1 text-sm font-medium tracking-tight",
					children: "Quick note"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Hide overlay",
					className: "grid size-7 place-items-center rounded-sm text-muted hover:bg-bg hover:text-fg",
					onClick: onHide,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3.5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Close overlay",
					className: "grid size-7 place-items-center rounded-sm text-muted hover:bg-bg hover:text-fg",
					onClick: onClose,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.14em] text-subtle",
					children: "Overlay demo"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-snug text-fg",
					children: "Drag the header. This is a normal floating window — notes, timers, or chat heads."
				}),
				size === "regular" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs leading-relaxed text-muted",
					children: "On Android this uses WindowManager + SYSTEM_ALERT_WINDOW. No result bypass. No encrypted fake login."
				}) : null
			]
		})]
	});
}
var NOTES = [
	{
		title: "Standup notes",
		body: "Ship overlay demo, keep the UI quiet."
	},
	{
		title: "Grocery",
		body: "Oat milk, tomatoes, black coffee."
	},
	{
		title: "Read later",
		body: "WindowManager overlay patterns, 2026."
	}
];
function PhoneStage({ overlayOpen, opacity, size, onHide, onClose }) {
	const stageRef = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto w-full max-w-[360px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-2xl border border-border bg-elevated p-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: stageRef,
				className: "relative overflow-hidden rounded-xl bg-bg",
				style: { height: 640 },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "flex items-center justify-between px-4 pt-5 pb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.16em] text-subtle",
							children: "Notes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 text-xl font-medium tracking-tight",
							children: "Today"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-9 place-items-center rounded-md border border-border text-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-9 place-items-center rounded-md border border-border text-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4" })
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2 px-3 pb-6",
						children: NOTES.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-lg border border-border bg-surface px-3.5 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-medium",
								children: note.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: note.body
							})]
						}, note.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingWindow, {
						visible: overlayOpen,
						opacity,
						size,
						boundsRef: stageRef,
						onHide,
						onClose
					})
				]
			})
		})
	});
}
function Home() {
	const [overlayOpen, setOverlayOpen] = (0, import_react.useState)(true);
	const [opacity, setOpacity] = (0, import_react.useState)(1);
	const [size, setSize] = (0, import_react.useState)("regular");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-dvh bg-bg text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-4 py-8 sm:py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-8 max-w-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.18em] text-subtle",
						children: "FloatPane"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-3xl font-medium tracking-tight sm:text-4xl",
						children: "A normal floating window"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-base leading-relaxed text-muted",
						children: "Interactive overlay on a phone mock. Drag it, hide it, resize it. Built as a web demo of Android overlay windows — not a result-bypass or fake login tool."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneStage, {
					overlayOpen,
					opacity,
					size,
					onHide: () => setOverlayOpen(false),
					onClose: () => setOverlayOpen(false)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ControlsPanel, {
					overlayOpen,
					opacity,
					size,
					onToggle: () => setOverlayOpen((v) => !v),
					onOpacity: setOpacity,
					onSize: setSize
				})]
			})]
		})
	});
}
//#endregion
export { Home as component };
