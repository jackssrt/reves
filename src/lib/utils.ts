import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { resolve as _resolve } from "$app/paths";

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};
export type Resolvable = `https://${string}` | Parameters<typeof _resolve>[0];
const isExternal = (x: string): x is `https://${string}` => x.startsWith("https://");
export const resolve = (link: Resolvable) => {
	return isExternal(link) ? link : _resolve(link);
};
