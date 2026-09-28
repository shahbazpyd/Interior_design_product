import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to elegantly merge Tailwind CSS classes
 * avoiding conflicts (e.g. padding top vs padding y).
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
