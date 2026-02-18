"use client";

import { useState, useEffect } from "react";

/**
 * Debounce a value – returns a lagged copy that only updates
 * after `delay` ms of inactivity.
 *
 * @param value  The raw (fast-changing) value
 * @param delay  Debounce window in milliseconds (default 400)
 */
export function useDebounce<T>(value: T, delay = 400): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}
