"use client";

import { useEffect, type RefObject } from "react";

type DismissOptions = {
  containerRef: RefObject<HTMLElement | null>;
  triggerRef: RefObject<HTMLElement | null>;
  initialFocus?: string;
};

/**
 * Closes an open popup on Escape, outside pointer press, or focus leaving it.
 * Escape is handled on the container itself so nested popups close innermost-first.
 */
export function useDismiss(
  open: boolean,
  setOpen: (open: boolean) => void,
  { containerRef, triggerRef, initialFocus }: DismissOptions,
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!open || !container) return;

    if (initialFocus) container.querySelector<HTMLElement>(initialFocus)?.focus();

    function isOutside(target: EventTarget | null) {
      return (
        target instanceof Node &&
        !container?.contains(target) &&
        !triggerRef.current?.contains(target)
      );
    }

    function onPointerDown(event: PointerEvent) {
      if (isOutside(event.target)) setOpen(false);
    }

    function onFocusIn(event: FocusEvent) {
      if (isOutside(event.target)) setOpen(false);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      event.preventDefault();
      event.stopPropagation();
      setOpen(false);
      triggerRef.current?.focus();
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("focusin", onFocusIn);
    container.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("focusin", onFocusIn);
      container.removeEventListener("keydown", onKeyDown);
    };
  }, [open, setOpen, containerRef, triggerRef, initialFocus]);
}
