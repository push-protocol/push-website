// Define Size and Device
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

// Define Padding
export const globalsPadding = {};

// Define Margin
export const globalsMargin = {
  DEFAULT: {
    DESKTOP: {
      TOP: '0px',
      RIGHT: '30px',
      BOTTOM: '48px',
      LEFT: '30px',
    },
    TABLET: {
      TOP: '25px',
      RIGHT: '25px',
      BOTTOM: '25px',
      LEFT: '25px',
    },
    MOBILE: {
      TOP: '20px',
      RIGHT: '20px',
      BOTTOM: '20px',
      LEFT: '20px',
    },
  }
};

// Define Globals
const GLOBALS = {
  LINKS: {
    IOS_APP: 'https://apps.apple.com/app/ethereum-push-service-epns/id1528614910',
    ANDROID_APP: 'https://play.google.com/store/apps/details?id=io.epns.epns&hl=mr&gl=US',
  },

  // For Async Storage --> Represents Key and some Constants
  STORAGE: {},

  CONSTANTS: {
    HEADER_HEIGHT: 70,
    LEFT_BAR_WIDTH: 260,
  },

  ADJUSTMENTS: {
    PADDING: {
      DEFAULT: '20px',
      BIG: '40px',
      HUGE: '60px',
    },
    MARGIN: {
      VERTICAL: '30px',
      HORIZONTAL: '20px',

      DEFAULT: {
        DESKTOP: `${globalsMargin.DEFAULT.DESKTOP.TOP} ${globalsMargin.DEFAULT.DESKTOP.RIGHT} ${globalsMargin.DEFAULT.DESKTOP.BOTTOM} ${globalsMargin.DEFAULT.DESKTOP.LEFT}`,
        TABLET: `${globalsMargin.DEFAULT.TABLET.TOP} ${globalsMargin.DEFAULT.TABLET.RIGHT} ${globalsMargin.DEFAULT.TABLET.BOTTOM} ${globalsMargin.DEFAULT.TABLET.LEFT}`,
        MOBILE: `${globalsMargin.DEFAULT.MOBILE.TOP} ${globalsMargin.DEFAULT.MOBILE.RIGHT} ${globalsMargin.DEFAULT.MOBILE.BOTTOM} ${globalsMargin.DEFAULT.MOBILE.LEFT}`,
      },
    },
    RADIUS: {
      LARGE: '48px',
    },
    BLUR: {
      DEFAULT: 5,
    }
  },

  COLORS: {
    HIGHLIGHT: '#DD44B9',
    COLOR_LIGHT: '#FFF',
    COLOR_LIGHT_SECONDARY: 'FFF',
    COLOR_DARK: '#000',
    COLOR_DARK_SECONDARY: '#303C5E',
    BG_LIGHT: '#FFF',
    BG_DARK: '#121315',
    BG_LIGHT_SECONDARY: '#F0DCFF',
    BG_HIGHLIGHTED_LIGHT_TRANSPARENT: 'rgba(219, 171, 255, 0.7);',
    BG_HIGHLIGHTED_MID_TRANSPARENT: 'rgba(235, 216, 249, 0.5);',
    BG_GRADIENT_PRIMARY: 'linear-gradient(251.72deg, #DD44B9 14.29%, #8B6FD9 86.35%);'
  },
};
export default GLOBALS;
