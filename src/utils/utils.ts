import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(n: number): string {
  return 'NPR ' + n.toLocaleString('NPR', { minimumFractionDigits: 0, maximumFractionDigits: 1 });
}


