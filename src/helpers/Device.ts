export const Size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
};
  
const Device = {
    mobileS: `(max-width: ${Size.mobileS})`,
    mobileM: `(max-width: ${Size.mobileM})`,
    mobileL: `(max-width: ${Size.mobileL})`,
    tablet: `(max-width: ${Size.tablet})`,
    laptop: `(max-width: ${Size.laptop})`,
    laptopL: `(max-width: ${Size.laptopL})`,
    desktop: `(max-width: ${Size.desktop})`,
    desktopL: `(max-width: ${Size.desktop})`,
};

export default Device;