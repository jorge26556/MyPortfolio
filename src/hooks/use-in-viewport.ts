"use client";

import { useEffect, useState, type RefObject } from "react";

/**
 * Whether the referenced element is currently near the viewport.
 *
 * Used to stop work that is invisible anyway — most importantly the hero's
 * WebGL loop, which otherwise keeps rendering at 60fps while the visitor reads
 * the bottom of the page.
 */
export function useInViewport(
  ref: RefObject<Element | null>,
  { rootMargin = "200px" }: { rootMargin?: string } = {}
): boolean {
  const [inViewport, setInViewport] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setInViewport(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return inViewport;
}
