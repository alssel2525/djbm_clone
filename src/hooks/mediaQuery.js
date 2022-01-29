export const BREAKPOINT_MOBILE = "mobile";
export const BREAKPOINT_TABLET = "tablet";

const breakPoints = {
	mobile: 599, // 600
	tablet: 1279, // 1280
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
 * @param query  const value ex) BREAKPOINT_MOBILE
 *
 * @returns {`@media (max-width: ${number}px)`}
 *
 */

const mediaQuery = (query) => {
	return `@media (max-width: ${breakPoints[query]}px)`;
};

export default mediaQuery;