export const breakpoints = {
  wMobile: "320px",
  wSemiMobile:"640px",
  wTablet: "768px",
  wLaptop: "1024px",
  wDesktop: "1440px",

}

export const devices = {
  mobile: `(min-width: ${breakpoints.wMobile})`,
  semiMobile: `(min-width: ${breakpoints.wSemiMobile})`,
  tablet: `(min-width: ${breakpoints.wTablet})`,
  laptop: `(min-width: ${breakpoints.wLaptop})`,
  desktop: `(min-width: ${breakpoints.wDesktop})`,
 
}