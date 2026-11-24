import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { resolve as _resolve } from "$app/paths";
import { localizeHref } from "./paraglide/runtime";
import type { Locale } from "./paraglide/runtime";
import type { Path } from "$app/types";
import { getLocale } from "./paraglide/runtime";

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};
export type Resolvable = `https://${string}` | Parameters<typeof _resolve>[0];
const isExternal = (x: string): x is `https://${string}` | `http://${string}` =>
	x.startsWith("https://") || x.startsWith("http://");
export const resolve = (link: Resolvable, locale: Locale = getLocale()) => {
	console.assert(link !== "", "tried to resolve an empty string");
	return isExternal(link) ? link : _resolve(localizeHref(link, { locale }) as Path);
};
