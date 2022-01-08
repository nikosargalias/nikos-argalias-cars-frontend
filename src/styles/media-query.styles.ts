export enum Breakpoints {
    mobile = '50px',
    tablet = '700px',
    laptop = '1200px',
}

export const device = {
    mobileS: `(min-width: ${Breakpoints.mobile})`,
    tablet: `(min-width: ${Breakpoints.tablet})`,
};
