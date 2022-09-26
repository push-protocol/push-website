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
      TOP: '120px',
      RIGHT: '40px',
      BOTTOM: '120px',
      LEFT: '40px',
    },
    TABLET: {
      TOP: '60px',
      RIGHT: '25px',
      BOTTOM: '60px',
      LEFT: '25px',
    },
    MOBILE: {
      TOP: '40px',
      RIGHT: '20px',
      BOTTOM: '40px',
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
      HUGE: '60px',
      BIG: '40px',
      SMALL: '20px',
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
      MID: '32px',
      SMALL: '16px',
    },
    BLUR: {
      DEFAULT: 5,
      HEADER: 10,
    },
    FONT: {
      PRIMARY_HEADING: {
        DESKTOP: '62px',
        TABLET: '42px',
        MOBILE: '34px'
      },
      HEADING: {
        DESKTOP: '32px',
        TABLET: '28px',
        MOBILE: '26px'
      },
      HIGHLIGHTED_TEXT: {
        DESKTOP: '48px',
        TABLET: '40px',
        MOBILE: '32px'
      },
      NORMAL_TEXT: {
        DESKTOP: '20px',
        TABLET: '16px',
        MOBILE: '14px'
      } 
    }
  },

  COLORS: {
    HIGHLIGHT: '#DD44B9',
    FONT_LIGHT: '#FFF',
    FONT_LIGHT_SECONDARY: 'FFF',
    FONT_DARK: '#121315',
    FONT_DARK_SECONDARY: '#303C5E',
    BG_LIGHT: '#FFF',
    BG_DARK: '#121315',
    HEADER_BG_LIGHT: '#FFFFFFCC',
    HEADER_BG_DARK: '#121315CC',
    BG_DARK_SECONDARY: '#2A2A39',
    BG_LIGHT_SECONDARY: '#F0DCFF',
    BG_HIGHLIGHTED_LIGHT_TRANSPARENT: 'rgba(219, 171, 255, 0.7);',
    BG_HIGHLIGHTED_MID_TRANSPARENT: 'rgba(235, 216, 249, 0.5);',
    BG_GRADIENT_PRIMARY: 'linear-gradient(251.72deg, #DD44B9 14.29%, #8B6FD9 86.35%);'
  },
};
export default GLOBALS;
