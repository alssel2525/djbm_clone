export const BREAKPOINT_MOBILE = "mobile";
export const BREAKPOINT_TABLET = "tablet";
export const BREAKPOINT_PC = "pc";

const breakPoints = {
	mobile: 599, // 600
	tablet: 1279, // 1280
	pc: 1280,
};

/*
how to use

at styled components
${mediaQueries(BREAKPOINT_TABLET)} {
    // some css code;
}
*/
/**
 *
 * custom media query
 *
 * @param query const value ex) BREAKPOINT_MOBILE
 *
 * @returns string `@media (max-width: ${number}px)` or `@media (min-width: ${number}px)`
 *
 */

const mediaQuery = (query) => {
	if (query === BREAKPOINT_PC) return `@media (min-width: ${breakPoints[query]}px)`;
	return `@media (max-width: ${breakPoints[query]}px)`;
};

export default mediaQuery;