import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  // This function helps in merging two tailwind css properties and is used in MaxWidthWrapper component
  return twMerge(clsx(inputs));
}
