/** `href` is locale-prefixed; the home link (`/fa`) must match exactly. */
export function isActiveLink(pathname: string, href: string, exact: boolean) {
  return exact ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
}
