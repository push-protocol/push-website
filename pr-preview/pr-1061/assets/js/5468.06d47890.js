"use strict";
exports.id = 5468;
exports.ids = [5468];
exports.modules = {

/***/ 35468:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AppKitModal: () => (/* reexport */ AppKitModal),
  W3mModal: () => (/* reexport */ W3mModal),
  W3mModalBase: () => (/* reexport */ W3mModalBase)
});

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js + 2 modules
var decorators = __webpack_require__(483419);
// EXTERNAL MODULE: ./node_modules/lit/directives/if-defined.js + 1 modules
var if_defined = __webpack_require__(734473);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js
var ConstantsUtil = __webpack_require__(824376);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js + 1 modules
var OptionsController = __webpack_require__(500026);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ModalController.js + 1 modules
var ModalController = __webpack_require__(91111);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js
var ChainController = __webpack_require__(806056);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js
var ConnectorController = __webpack_require__(236010);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js
var ApiController = __webpack_require__(188249);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js
var RouterController = __webpack_require__(778508);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/SIWXUtil.js
var SIWXUtil = __webpack_require__(801122);
;// ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/ModalUtil.js



const ModalUtil = {
    isUnsupportedChainView() {
        return (RouterController/* RouterController */.I.state.view === 'UnsupportedChain' ||
            (RouterController/* RouterController */.I.state.view === 'SwitchNetwork' &&
                RouterController/* RouterController */.I.state.history.includes('UnsupportedChain')));
    },
    async safeClose() {
        if (this.isUnsupportedChainView()) {
            ModalController/* ModalController */.W.shake();
            return;
        }
        const isSIWXCloseDisabled = await SIWXUtil/* SIWXUtil */.U.isSIWXCloseDisabled();
        if (isSIWXCloseDisabled) {
            ModalController/* ModalController */.W.shake();
            return;
        }
        ModalController/* ModalController */.W.close();
    }
};
//# sourceMappingURL=ModalUtil.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ThemeController.js
var ThemeController = __webpack_require__(568996);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js
var SnackController = __webpack_require__(121871);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js
var CoreHelperUtil = __webpack_require__(226742);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/index.js + 3 modules
var esm_exports = __webpack_require__(441454);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(926109);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(243494);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-card/styles.js

/* harmony default export */ const styles = ((0,lit/* css */.AH) `
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-card/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let WuiCard = class WuiCard extends lit/* LitElement */.WF {
    render() {
        return (0,lit/* html */.qy) `<slot></slot>`;
    }
};
WuiCard.styles = [ThemeUtil/* resetStyles */.W5, styles];
WuiCard = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-card')
], WuiCard);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-card.js

//# sourceMappingURL=wui-card.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js
var wui_flex = __webpack_require__(460310);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AlertController.js
var AlertController = __webpack_require__(471655);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/index.js + 5 modules
var wui_icon = __webpack_require__(976834);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/index.js + 1 modules
var wui_text = __webpack_require__(984206);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-flex/index.js + 1 modules
var layout_wui_flex = __webpack_require__(648832);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-alertbar/styles.js

/* harmony default export */ const wui_alertbar_styles = ((0,lit/* css */.AH) `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-alertbar/index.js
var wui_alertbar_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let WuiAlertBar = class WuiAlertBar extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.message = '';
        this.backgroundColor = 'accent-100';
        this.iconColor = 'accent-100';
        this.icon = 'info';
    }
    render() {
        this.style.cssText = `
      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});
   `;
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `;
    }
    onClose() {
        AlertController/* AlertController */.h.close();
    }
};
WuiAlertBar.styles = [ThemeUtil/* resetStyles */.W5, wui_alertbar_styles];
wui_alertbar_decorate([
    (0,decorators/* property */.MZ)()
], WuiAlertBar.prototype, "message", void 0);
wui_alertbar_decorate([
    (0,decorators/* property */.MZ)()
], WuiAlertBar.prototype, "backgroundColor", void 0);
wui_alertbar_decorate([
    (0,decorators/* property */.MZ)()
], WuiAlertBar.prototype, "iconColor", void 0);
wui_alertbar_decorate([
    (0,decorators/* property */.MZ)()
], WuiAlertBar.prototype, "icon", void 0);
WuiAlertBar = wui_alertbar_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-alertbar')
], WuiAlertBar);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-alertbar.js

//# sourceMappingURL=wui-alertbar.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-alertbar/styles.js

/* harmony default export */ const w3m_alertbar_styles = ((0,lit/* css */.AH) `
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-alertbar/index.js
var w3m_alertbar_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const presets = {
    info: {
        backgroundColor: 'fg-350',
        iconColor: 'fg-325',
        icon: 'info'
    },
    success: {
        backgroundColor: 'success-glass-reown-020',
        iconColor: 'success-125',
        icon: 'checkmark'
    },
    warning: {
        backgroundColor: 'warning-glass-reown-020',
        iconColor: 'warning-100',
        icon: 'warningCircle'
    },
    error: {
        backgroundColor: 'error-glass-reown-020',
        iconColor: 'error-125',
        icon: 'exclamationTriangle'
    }
};
let W3mAlertBar = class W3mAlertBar extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.open = AlertController/* AlertController */.h.state.open;
        this.onOpen(true);
        this.unsubscribe.push(AlertController/* AlertController */.h.subscribeKey('open', val => {
            this.open = val;
            this.onOpen(false);
        }));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        const { message, variant } = AlertController/* AlertController */.h.state;
        const preset = presets[variant];
        return (0,lit/* html */.qy) `
      <wui-alertbar
        message=${message}
        backgroundColor=${preset?.backgroundColor}
        iconColor=${preset?.iconColor}
        icon=${preset?.icon}
      ></wui-alertbar>
    `;
    }
    onOpen(isMounted) {
        if (this.open) {
            this.animate([
                { opacity: 0, transform: 'scale(0.85)' },
                { opacity: 1, transform: 'scale(1)' }
            ], {
                duration: 150,
                fill: 'forwards',
                easing: 'ease'
            });
            this.style.cssText = `pointer-events: auto`;
        }
        else if (!isMounted) {
            this.animate([
                { opacity: 1, transform: 'scale(1)' },
                { opacity: 0, transform: 'scale(0.85)' }
            ], {
                duration: 150,
                fill: 'forwards',
                easing: 'ease'
            });
            this.style.cssText = `pointer-events: none`;
        }
    }
};
W3mAlertBar.styles = w3m_alertbar_styles;
w3m_alertbar_decorate([
    (0,decorators/* state */.wk)()
], W3mAlertBar.prototype, "open", void 0);
W3mAlertBar = w3m_alertbar_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-alertbar')
], W3mAlertBar);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AccountController.js
var AccountController = __webpack_require__(863450);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js
var AssetUtil = __webpack_require__(527601);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AssetController.js
var AssetController = __webpack_require__(773337);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js
var EventsController = __webpack_require__(390184);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-link/styles.js

/* harmony default export */ const wui_icon_link_styles = ((0,lit/* css */.AH) `
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-link/index.js
var wui_icon_link_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let WuiIconLink = class WuiIconLink extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.size = 'md';
        this.disabled = false;
        this.icon = 'copy';
        this.iconColor = 'inherit';
    }
    render() {
        const borderRadius = this.size === 'lg' ? '--wui-border-radius-xs' : '--wui-border-radius-xxs';
        const padding = this.size === 'lg' ? '--wui-spacing-1xs' : '--wui-spacing-2xs';
        this.style.cssText = `
    --local-border-radius: var(${borderRadius});
    --local-padding: var(${padding});
`;
        return (0,lit/* html */.qy) `
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `;
    }
};
WuiIconLink.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, ThemeUtil/* colorStyles */.ck, wui_icon_link_styles];
wui_icon_link_decorate([
    (0,decorators/* property */.MZ)()
], WuiIconLink.prototype, "size", void 0);
wui_icon_link_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiIconLink.prototype, "disabled", void 0);
wui_icon_link_decorate([
    (0,decorators/* property */.MZ)()
], WuiIconLink.prototype, "icon", void 0);
wui_icon_link_decorate([
    (0,decorators/* property */.MZ)()
], WuiIconLink.prototype, "iconColor", void 0);
WuiIconLink = wui_icon_link_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-icon-link')
], WuiIconLink);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-link.js

//# sourceMappingURL=wui-icon-link.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-image/index.js + 1 modules
var wui_image = __webpack_require__(301608);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-box/index.js + 1 modules
var wui_icon_box = __webpack_require__(238436);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-select/styles.js

/* harmony default export */ const wui_select_styles = ((0,lit/* css */.AH) `
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-select/index.js
var wui_select_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let WuiSelect = class WuiSelect extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.imageSrc = '';
    }
    render() {
        return (0,lit/* html */.qy) `<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`;
    }
    imageTemplate() {
        if (this.imageSrc) {
            return (0,lit/* html */.qy) `<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;
        }
        return (0,lit/* html */.qy) `<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`;
    }
};
WuiSelect.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, ThemeUtil/* colorStyles */.ck, wui_select_styles];
wui_select_decorate([
    (0,decorators/* property */.MZ)()
], WuiSelect.prototype, "imageSrc", void 0);
WuiSelect = wui_select_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-select')
], WuiSelect);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-select.js

//# sourceMappingURL=wui-select.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tag/index.js + 1 modules
var wui_tag = __webpack_require__(481355);
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-tag.js

//# sourceMappingURL=wui-tag.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js
var exports_wui_text = __webpack_require__(945090);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConstantsUtil.js
var utils_ConstantsUtil = __webpack_require__(841482);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-header/styles.js

/* harmony default export */ const w3m_header_styles = ((0,lit/* css */.AH) `
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-header/index.js
var w3m_header_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












const BETA_SCREENS = ['SmartSessionList'];
function headings() {
    const connectorName = RouterController/* RouterController */.I.state.data?.connector?.name;
    const walletName = RouterController/* RouterController */.I.state.data?.wallet?.name;
    const networkName = RouterController/* RouterController */.I.state.data?.network?.name;
    const name = walletName ?? connectorName;
    const connectors = ConnectorController/* ConnectorController */.a.getConnectors();
    const isEmail = connectors.length === 1 && connectors[0]?.id === 'w3m-email';
    return {
        Connect: `Connect ${isEmail ? 'Email' : ''} Wallet`,
        Create: 'Create Wallet',
        ChooseAccountName: undefined,
        Account: undefined,
        AccountSettings: undefined,
        AllWallets: 'All Wallets',
        ApproveTransaction: 'Approve Transaction',
        BuyInProgress: 'Buy',
        ConnectingExternal: name ?? 'Connect Wallet',
        ConnectingWalletConnect: name ?? 'WalletConnect',
        ConnectingWalletConnectBasic: 'WalletConnect',
        ConnectingSiwe: 'Sign In',
        Convert: 'Convert',
        ConvertSelectToken: 'Select token',
        ConvertPreview: 'Preview convert',
        Downloads: name ? `Get ${name}` : 'Downloads',
        EmailLogin: 'Email Login',
        EmailVerifyOtp: 'Confirm Email',
        EmailVerifyDevice: 'Register Device',
        GetWallet: 'Get a wallet',
        Networks: 'Choose Network',
        OnRampProviders: 'Choose Provider',
        OnRampActivity: 'Activity',
        OnRampTokenSelect: 'Select Token',
        OnRampFiatSelect: 'Select Currency',
        Pay: 'How you pay',
        Profile: undefined,
        SwitchNetwork: networkName ?? 'Switch Network',
        SwitchAddress: 'Switch Address',
        Transactions: 'Activity',
        UnsupportedChain: 'Switch Network',
        UpgradeEmailWallet: 'Upgrade your Wallet',
        UpdateEmailWallet: 'Edit Email',
        UpdateEmailPrimaryOtp: 'Confirm Current Email',
        UpdateEmailSecondaryOtp: 'Confirm New Email',
        WhatIsABuy: 'What is Buy?',
        RegisterAccountName: 'Choose name',
        RegisterAccountNameSuccess: '',
        WalletReceive: 'Receive',
        WalletCompatibleNetworks: 'Compatible Networks',
        Swap: 'Swap',
        SwapSelectToken: 'Select token',
        SwapPreview: 'Preview swap',
        WalletSend: 'Send',
        WalletSendPreview: 'Review send',
        WalletSendSelectToken: 'Select Token',
        WhatIsANetwork: 'What is a network?',
        WhatIsAWallet: 'What is a wallet?',
        ConnectWallets: 'Connect wallet',
        ConnectSocials: 'All socials',
        ConnectingSocial: AccountController/* AccountController */.U.state.socialProvider
            ? AccountController/* AccountController */.U.state.socialProvider
            : 'Connect Social',
        ConnectingMultiChain: 'Select chain',
        ConnectingFarcaster: 'Farcaster',
        SwitchActiveChain: 'Switch chain',
        SmartSessionCreated: undefined,
        SmartSessionList: 'Smart Sessions',
        SIWXSignMessage: 'Sign In',
        PayLoading: 'Payment in progress'
    };
}
let W3mHeader = class W3mHeader extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.heading = headings()[RouterController/* RouterController */.I.state.view];
        this.network = ChainController/* ChainController */.W.state.activeCaipNetwork;
        this.networkImage = AssetUtil/* AssetUtil */.$.getNetworkImage(this.network);
        this.showBack = false;
        this.prevHistoryLength = 1;
        this.view = RouterController/* RouterController */.I.state.view;
        this.viewDirection = '';
        this.headerText = headings()[RouterController/* RouterController */.I.state.view];
        this.unsubscribe.push(AssetController/* AssetController */.j.subscribeNetworkImages(() => {
            this.networkImage = AssetUtil/* AssetUtil */.$.getNetworkImage(this.network);
        }), RouterController/* RouterController */.I.subscribeKey('view', val => {
            setTimeout(() => {
                this.view = val;
                this.headerText = headings()[val];
            }, utils_ConstantsUtil/* ConstantsUtil */.o.ANIMATION_DURATIONS.HeaderText);
            this.onViewChange();
            this.onHistoryChange();
        }), ChainController/* ChainController */.W.subscribeKey('activeCaipNetwork', val => {
            this.network = val;
            this.networkImage = AssetUtil/* AssetUtil */.$.getNetworkImage(this.network);
        }));
    }
    disconnectCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `;
    }
    onWalletHelp() {
        EventsController/* EventsController */.E.sendEvent({ type: 'track', event: 'CLICK_WALLET_HELP' });
        RouterController/* RouterController */.I.push('WhatIsAWallet');
    }
    async onClose() {
        await ModalUtil.safeClose();
    }
    rightHeaderTemplate() {
        const isSmartSessionsEnabled = OptionsController/* OptionsController */.H?.state?.features?.smartSessions;
        if (RouterController/* RouterController */.I.state.view !== 'Account' || !isSmartSessionsEnabled) {
            return this.closeButtonTemplate();
        }
        return (0,lit/* html */.qy) `<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${() => RouterController/* RouterController */.I.push('SmartSessionList')}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `;
    }
    closeButtonTemplate() {
        return (0,lit/* html */.qy) `
      <wui-icon-link
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `;
    }
    titleTemplate() {
        const isBeta = BETA_SCREENS.includes(this.view);
        return (0,lit/* html */.qy) `
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${isBeta ? (0,lit/* html */.qy) `<wui-tag variant="main">Beta</wui-tag>` : null}
      </wui-flex>
    `;
    }
    leftHeaderTemplate() {
        const { view } = RouterController/* RouterController */.I.state;
        const isConnectHelp = view === 'Connect';
        const isEmbeddedEnable = OptionsController/* OptionsController */.H.state.enableEmbedded;
        const isApproveTransaction = view === 'ApproveTransaction';
        const isConnectingSIWEView = view === 'ConnectingSiwe';
        const isAccountView = view === 'Account';
        const enableNetworkSwitch = OptionsController/* OptionsController */.H.state.enableNetworkSwitch;
        const shouldHideBack = isApproveTransaction || isConnectingSIWEView || (isConnectHelp && isEmbeddedEnable);
        if (isAccountView && enableNetworkSwitch) {
            return (0,lit/* html */.qy) `<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,if_defined/* ifDefined */.J)(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,if_defined/* ifDefined */.J)(this.networkImage)}
      ></wui-select>`;
        }
        if (this.showBack && !shouldHideBack) {
            return (0,lit/* html */.qy) `<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`;
        }
        return (0,lit/* html */.qy) `<wui-icon-link
      data-hidden=${!isConnectHelp}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`;
    }
    onNetworks() {
        if (this.isAllowedNetworkSwitch()) {
            EventsController/* EventsController */.E.sendEvent({ type: 'track', event: 'CLICK_NETWORKS' });
            RouterController/* RouterController */.I.push('Networks');
        }
    }
    isAllowedNetworkSwitch() {
        const requestedCaipNetworks = ChainController/* ChainController */.W.getAllRequestedCaipNetworks();
        const isMultiNetwork = requestedCaipNetworks ? requestedCaipNetworks.length > 1 : false;
        const isValidNetwork = requestedCaipNetworks?.find(({ id }) => id === this.network?.id);
        return isMultiNetwork || !isValidNetwork;
    }
    getPadding() {
        if (this.heading) {
            return ['l', '2l', 'l', '2l'];
        }
        return ['0', '2l', '0', '2l'];
    }
    onViewChange() {
        const { history } = RouterController/* RouterController */.I.state;
        let direction = utils_ConstantsUtil/* ConstantsUtil */.o.VIEW_DIRECTION.Next;
        if (history.length < this.prevHistoryLength) {
            direction = utils_ConstantsUtil/* ConstantsUtil */.o.VIEW_DIRECTION.Prev;
        }
        this.prevHistoryLength = history.length;
        this.viewDirection = direction;
    }
    async onHistoryChange() {
        const { history } = RouterController/* RouterController */.I.state;
        const buttonEl = this.shadowRoot?.querySelector('#dynamic');
        if (history.length > 1 && !this.showBack && buttonEl) {
            await buttonEl.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            }).finished;
            this.showBack = true;
            buttonEl.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            });
        }
        else if (history.length <= 1 && this.showBack && buttonEl) {
            await buttonEl.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            }).finished;
            this.showBack = false;
            buttonEl.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            });
        }
    }
    onGoBack() {
        RouterController/* RouterController */.I.goBack();
    }
};
W3mHeader.styles = w3m_header_styles;
w3m_header_decorate([
    (0,decorators/* state */.wk)()
], W3mHeader.prototype, "heading", void 0);
w3m_header_decorate([
    (0,decorators/* state */.wk)()
], W3mHeader.prototype, "network", void 0);
w3m_header_decorate([
    (0,decorators/* state */.wk)()
], W3mHeader.prototype, "networkImage", void 0);
w3m_header_decorate([
    (0,decorators/* state */.wk)()
], W3mHeader.prototype, "showBack", void 0);
w3m_header_decorate([
    (0,decorators/* state */.wk)()
], W3mHeader.prototype, "prevHistoryLength", void 0);
w3m_header_decorate([
    (0,decorators/* state */.wk)()
], W3mHeader.prototype, "view", void 0);
w3m_header_decorate([
    (0,decorators/* state */.wk)()
], W3mHeader.prototype, "viewDirection", void 0);
w3m_header_decorate([
    (0,decorators/* state */.wk)()
], W3mHeader.prototype, "headerText", void 0);
W3mHeader = w3m_header_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-header')
], W3mHeader);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-spinner/index.js + 1 modules
var wui_loading_spinner = __webpack_require__(508163);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-snackbar/styles.js

/* harmony default export */ const wui_snackbar_styles = ((0,lit/* css */.AH) `
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-snackbar/index.js
var wui_snackbar_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let WuiSnackbar = class WuiSnackbar extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.backgroundColor = 'accent-100';
        this.iconColor = 'accent-100';
        this.icon = 'checkmark';
        this.message = '';
        this.loading = false;
        this.iconType = 'default';
    }
    render() {
        return (0,lit/* html */.qy) `
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `;
    }
    templateIcon() {
        if (this.loading) {
            return (0,lit/* html */.qy) `<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`;
        }
        if (this.iconType === 'default') {
            return (0,lit/* html */.qy) `<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`;
        }
        return (0,lit/* html */.qy) `<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`;
    }
};
WuiSnackbar.styles = [ThemeUtil/* resetStyles */.W5, wui_snackbar_styles];
wui_snackbar_decorate([
    (0,decorators/* property */.MZ)()
], WuiSnackbar.prototype, "backgroundColor", void 0);
wui_snackbar_decorate([
    (0,decorators/* property */.MZ)()
], WuiSnackbar.prototype, "iconColor", void 0);
wui_snackbar_decorate([
    (0,decorators/* property */.MZ)()
], WuiSnackbar.prototype, "icon", void 0);
wui_snackbar_decorate([
    (0,decorators/* property */.MZ)()
], WuiSnackbar.prototype, "message", void 0);
wui_snackbar_decorate([
    (0,decorators/* property */.MZ)()
], WuiSnackbar.prototype, "loading", void 0);
wui_snackbar_decorate([
    (0,decorators/* property */.MZ)()
], WuiSnackbar.prototype, "iconType", void 0);
WuiSnackbar = wui_snackbar_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-snackbar')
], WuiSnackbar);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-snackbar.js

//# sourceMappingURL=wui-snackbar.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-snackbar/styles.js

/* harmony default export */ const w3m_snackbar_styles = ((0,lit/* css */.AH) `
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-snackbar/index.js
var w3m_snackbar_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const w3m_snackbar_presets = {
    loading: undefined,
    success: {
        backgroundColor: 'success-100',
        iconColor: 'success-100',
        icon: 'checkmark'
    },
    error: {
        backgroundColor: 'error-100',
        iconColor: 'error-100',
        icon: 'close'
    }
};
let W3mSnackBar = class W3mSnackBar extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.timeout = undefined;
        this.open = SnackController/* SnackController */.P.state.open;
        this.unsubscribe.push(SnackController/* SnackController */.P.subscribeKey('open', val => {
            this.open = val;
            this.onOpen();
        }));
    }
    disconnectedCallback() {
        clearTimeout(this.timeout);
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        const { message, variant, svg } = SnackController/* SnackController */.P.state;
        const preset = w3m_snackbar_presets[variant];
        const { icon, iconColor } = svg ?? preset ?? {};
        return (0,lit/* html */.qy) `
      <wui-snackbar
        message=${message}
        backgroundColor=${preset?.backgroundColor}
        iconColor=${iconColor}
        icon=${icon}
        .loading=${variant === 'loading'}
      ></wui-snackbar>
    `;
    }
    onOpen() {
        clearTimeout(this.timeout);
        if (this.open) {
            this.animate([
                { opacity: 0, transform: 'translateX(-50%) scale(0.85)' },
                { opacity: 1, transform: 'translateX(-50%) scale(1)' }
            ], {
                duration: 150,
                fill: 'forwards',
                easing: 'ease'
            });
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            if (SnackController/* SnackController */.P.state.autoClose) {
                this.timeout = setTimeout(() => SnackController/* SnackController */.P.hide(), 2500);
            }
        }
        else {
            this.animate([
                { opacity: 1, transform: 'translateX(-50%) scale(1)' },
                { opacity: 0, transform: 'translateX(-50%) scale(0.85)' }
            ], {
                duration: 150,
                fill: 'forwards',
                easing: 'ease'
            });
        }
    }
};
W3mSnackBar.styles = w3m_snackbar_styles;
w3m_snackbar_decorate([
    (0,decorators/* state */.wk)()
], W3mSnackBar.prototype, "open", void 0);
W3mSnackBar = w3m_snackbar_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-snackbar')
], W3mSnackBar);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/valtio/esm/vanilla.mjs + 1 modules
var vanilla = __webpack_require__(682419);
// EXTERNAL MODULE: ./node_modules/valtio/esm/vanilla/utils.mjs
var utils = __webpack_require__(204707);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/withErrorBoundary.js + 1 modules
var withErrorBoundary = __webpack_require__(923082);
;// ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/TooltipController.js



// -- State --------------------------------------------- //
const state = (0,vanilla/* proxy */.BX)({
    message: '',
    open: false,
    triggerRect: {
        width: 0,
        height: 0,
        top: 0,
        left: 0
    },
    variant: 'shade'
});
// -- Controller ---------------------------------------- //
const controller = {
    state,
    subscribe(callback) {
        return (0,vanilla/* subscribe */.B1)(state, () => callback(state));
    },
    subscribeKey(key, callback) {
        return (0,utils/* subscribeKey */.u$)(state, key, callback);
    },
    showTooltip({ message, triggerRect, variant }) {
        state.open = true;
        state.message = message;
        state.triggerRect = triggerRect;
        state.variant = variant;
    },
    hide() {
        state.open = false;
        state.message = '';
        state.triggerRect = {
            width: 0,
            height: 0,
            top: 0,
            left: 0
        };
    }
};
// Export the controller wrapped with our error boundary
const TooltipController = (0,withErrorBoundary/* withErrorBoundary */.X)(controller);
//# sourceMappingURL=TooltipController.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js
var exports_wui_icon = __webpack_require__(51636);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-tooltip/styles.js

/* harmony default export */ const w3m_tooltip_styles = ((0,lit/* css */.AH) `
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-tooltip/index.js
var w3m_tooltip_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let W3mTooltip = class W3mTooltip extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.open = TooltipController.state.open;
        this.message = TooltipController.state.message;
        this.triggerRect = TooltipController.state.triggerRect;
        this.variant = TooltipController.state.variant;
        this.unsubscribe.push(...[
            TooltipController.subscribe(newState => {
                this.open = newState.open;
                this.message = newState.message;
                this.triggerRect = newState.triggerRect;
                this.variant = newState.variant;
            })
        ]);
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        this.dataset['variant'] = this.variant;
        const topValue = this.triggerRect.top;
        const leftValue = this.triggerRect.left;
        this.style.cssText = `
    --w3m-tooltip-top: ${topValue}px;
    --w3m-tooltip-left: ${leftValue}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width / 2}px;
    --w3m-tooltip-display: ${this.open ? 'flex' : 'none'};
    --w3m-tooltip-opacity: ${this.open ? 1 : 0};
    `;
        return (0,lit/* html */.qy) `<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`;
    }
};
W3mTooltip.styles = [w3m_tooltip_styles];
w3m_tooltip_decorate([
    (0,decorators/* state */.wk)()
], W3mTooltip.prototype, "open", void 0);
w3m_tooltip_decorate([
    (0,decorators/* state */.wk)()
], W3mTooltip.prototype, "message", void 0);
w3m_tooltip_decorate([
    (0,decorators/* state */.wk)()
], W3mTooltip.prototype, "triggerRect", void 0);
w3m_tooltip_decorate([
    (0,decorators/* state */.wk)()
], W3mTooltip.prototype, "variant", void 0);
W3mTooltip = w3m_tooltip_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-tooltip'),
    (0,esm_exports/* customElement */.EM)('w3m-tooltip')
], W3mTooltip);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-router/styles.js

/* harmony default export */ const w3m_router_styles = ((0,lit/* css */.AH) `
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-router/index.js
var w3m_router_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let W3mRouter = class W3mRouter extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.resizeObserver = undefined;
        this.prevHeight = '0px';
        this.prevHistoryLength = 1;
        this.unsubscribe = [];
        this.view = RouterController/* RouterController */.I.state.view;
        this.viewDirection = '';
        this.unsubscribe.push(RouterController/* RouterController */.I.subscribeKey('view', val => this.onViewChange(val)));
    }
    firstUpdated() {
        this.resizeObserver = new ResizeObserver(([content]) => {
            const height = `${content?.contentRect.height}px`;
            if (this.prevHeight !== '0px') {
                this.style.setProperty('--prev-height', this.prevHeight);
                this.style.setProperty('--new-height', height);
                this.style.animation = 'w3m-view-height 150ms forwards ease';
                this.style.height = 'auto';
            }
            setTimeout(() => {
                this.prevHeight = height;
                this.style.animation = 'unset';
            }, utils_ConstantsUtil/* ConstantsUtil */.o.ANIMATION_DURATIONS.ModalHeight);
        });
        this.resizeObserver?.observe(this.getWrapper());
    }
    disconnectedCallback() {
        this.resizeObserver?.unobserve(this.getWrapper());
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        return (0,lit/* html */.qy) `<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`;
    }
    viewTemplate() {
        switch (this.view) {
            case 'AccountSettings':
                return (0,lit/* html */.qy) `<w3m-account-settings-view></w3m-account-settings-view>`;
            case 'Account':
                return (0,lit/* html */.qy) `<w3m-account-view></w3m-account-view>`;
            case 'AllWallets':
                return (0,lit/* html */.qy) `<w3m-all-wallets-view></w3m-all-wallets-view>`;
            case 'ApproveTransaction':
                return (0,lit/* html */.qy) `<w3m-approve-transaction-view></w3m-approve-transaction-view>`;
            case 'BuyInProgress':
                return (0,lit/* html */.qy) `<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;
            case 'ChooseAccountName':
                return (0,lit/* html */.qy) `<w3m-choose-account-name-view></w3m-choose-account-name-view>`;
            case 'Connect':
                return (0,lit/* html */.qy) `<w3m-connect-view></w3m-connect-view>`;
            case 'Create':
                return (0,lit/* html */.qy) `<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;
            case 'ConnectingWalletConnect':
                return (0,lit/* html */.qy) `<w3m-connecting-wc-view></w3m-connecting-wc-view>`;
            case 'ConnectingWalletConnectBasic':
                return (0,lit/* html */.qy) `<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;
            case 'ConnectingExternal':
                return (0,lit/* html */.qy) `<w3m-connecting-external-view></w3m-connecting-external-view>`;
            case 'ConnectingSiwe':
                return (0,lit/* html */.qy) `<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;
            case 'ConnectWallets':
                return (0,lit/* html */.qy) `<w3m-connect-wallets-view></w3m-connect-wallets-view>`;
            case 'ConnectSocials':
                return (0,lit/* html */.qy) `<w3m-connect-socials-view></w3m-connect-socials-view>`;
            case 'ConnectingSocial':
                return (0,lit/* html */.qy) `<w3m-connecting-social-view></w3m-connecting-social-view>`;
            case 'Downloads':
                return (0,lit/* html */.qy) `<w3m-downloads-view></w3m-downloads-view>`;
            case 'EmailLogin':
                return (0,lit/* html */.qy) `<w3m-email-login-view></w3m-email-login-view>`;
            case 'EmailVerifyOtp':
                return (0,lit/* html */.qy) `<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;
            case 'EmailVerifyDevice':
                return (0,lit/* html */.qy) `<w3m-email-verify-device-view></w3m-email-verify-device-view>`;
            case 'GetWallet':
                return (0,lit/* html */.qy) `<w3m-get-wallet-view></w3m-get-wallet-view>`;
            case 'Networks':
                return (0,lit/* html */.qy) `<w3m-networks-view></w3m-networks-view>`;
            case 'SwitchNetwork':
                return (0,lit/* html */.qy) `<w3m-network-switch-view></w3m-network-switch-view>`;
            case 'Profile':
                return (0,lit/* html */.qy) `<w3m-profile-view></w3m-profile-view>`;
            case 'SwitchAddress':
                return (0,lit/* html */.qy) `<w3m-switch-address-view></w3m-switch-address-view>`;
            case 'Transactions':
                return (0,lit/* html */.qy) `<w3m-transactions-view></w3m-transactions-view>`;
            case 'OnRampProviders':
                return (0,lit/* html */.qy) `<w3m-onramp-providers-view></w3m-onramp-providers-view>`;
            case 'OnRampActivity':
                return (0,lit/* html */.qy) `<w3m-onramp-activity-view></w3m-onramp-activity-view>`;
            case 'OnRampTokenSelect':
                return (0,lit/* html */.qy) `<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;
            case 'OnRampFiatSelect':
                return (0,lit/* html */.qy) `<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;
            case 'UpgradeEmailWallet':
                return (0,lit/* html */.qy) `<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;
            case 'UpdateEmailWallet':
                return (0,lit/* html */.qy) `<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;
            case 'UpdateEmailPrimaryOtp':
                return (0,lit/* html */.qy) `<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;
            case 'UpdateEmailSecondaryOtp':
                return (0,lit/* html */.qy) `<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;
            case 'UnsupportedChain':
                return (0,lit/* html */.qy) `<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;
            case 'Swap':
                return (0,lit/* html */.qy) `<w3m-swap-view></w3m-swap-view>`;
            case 'SwapSelectToken':
                return (0,lit/* html */.qy) `<w3m-swap-select-token-view></w3m-swap-select-token-view>`;
            case 'SwapPreview':
                return (0,lit/* html */.qy) `<w3m-swap-preview-view></w3m-swap-preview-view>`;
            case 'WalletSend':
                return (0,lit/* html */.qy) `<w3m-wallet-send-view></w3m-wallet-send-view>`;
            case 'WalletSendSelectToken':
                return (0,lit/* html */.qy) `<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;
            case 'WalletSendPreview':
                return (0,lit/* html */.qy) `<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;
            case 'WhatIsABuy':
                return (0,lit/* html */.qy) `<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;
            case 'WalletReceive':
                return (0,lit/* html */.qy) `<w3m-wallet-receive-view></w3m-wallet-receive-view>`;
            case 'WalletCompatibleNetworks':
                return (0,lit/* html */.qy) `<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;
            case 'WhatIsAWallet':
                return (0,lit/* html */.qy) `<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;
            case 'ConnectingMultiChain':
                return (0,lit/* html */.qy) `<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;
            case 'WhatIsANetwork':
                return (0,lit/* html */.qy) `<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;
            case 'ConnectingFarcaster':
                return (0,lit/* html */.qy) `<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;
            case 'SwitchActiveChain':
                return (0,lit/* html */.qy) `<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;
            case 'RegisterAccountName':
                return (0,lit/* html */.qy) `<w3m-register-account-name-view></w3m-register-account-name-view>`;
            case 'RegisterAccountNameSuccess':
                return (0,lit/* html */.qy) `<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;
            case 'SmartSessionCreated':
                return (0,lit/* html */.qy) `<w3m-smart-session-created-view></w3m-smart-session-created-view>`;
            case 'SmartSessionList':
                return (0,lit/* html */.qy) `<w3m-smart-session-list-view></w3m-smart-session-list-view>`;
            case 'SIWXSignMessage':
                return (0,lit/* html */.qy) `<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;
            case 'Pay':
                return (0,lit/* html */.qy) `<w3m-pay-view></w3m-pay-view>`;
            case 'PayLoading':
                return (0,lit/* html */.qy) `<w3m-pay-loading-view></w3m-pay-loading-view>`;
            default:
                return (0,lit/* html */.qy) `<w3m-connect-view></w3m-connect-view>`;
        }
    }
    onViewChange(newView) {
        TooltipController.hide();
        let direction = utils_ConstantsUtil/* ConstantsUtil */.o.VIEW_DIRECTION.Next;
        const { history } = RouterController/* RouterController */.I.state;
        if (history.length < this.prevHistoryLength) {
            direction = utils_ConstantsUtil/* ConstantsUtil */.o.VIEW_DIRECTION.Prev;
        }
        this.prevHistoryLength = history.length;
        this.viewDirection = direction;
        setTimeout(() => {
            this.view = newView;
        }, utils_ConstantsUtil/* ConstantsUtil */.o.ANIMATION_DURATIONS.ViewTransition);
    }
    getWrapper() {
        return this.shadowRoot?.querySelector('div');
    }
};
W3mRouter.styles = w3m_router_styles;
w3m_router_decorate([
    (0,decorators/* state */.wk)()
], W3mRouter.prototype, "view", void 0);
w3m_router_decorate([
    (0,decorators/* state */.wk)()
], W3mRouter.prototype, "viewDirection", void 0);
W3mRouter = w3m_router_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-router')
], W3mRouter);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-modal/styles.js

/* harmony default export */ const w3m_modal_styles = ((0,lit/* css */.AH) `
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.appkit-modal) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-modal/index.js
var w3m_modal_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














const SCROLL_LOCK = 'scroll-lock';
class W3mModalBase extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.abortController = undefined;
        this.hasPrefetched = false;
        this.enableEmbedded = OptionsController/* OptionsController */.H.state.enableEmbedded;
        this.open = ModalController/* ModalController */.W.state.open;
        this.caipAddress = ChainController/* ChainController */.W.state.activeCaipAddress;
        this.caipNetwork = ChainController/* ChainController */.W.state.activeCaipNetwork;
        this.shake = ModalController/* ModalController */.W.state.shake;
        this.filterByNamespace = ConnectorController/* ConnectorController */.a.state.filterByNamespace;
        this.initializeTheming();
        ApiController/* ApiController */.N.prefetchAnalyticsConfig();
        this.unsubscribe.push(...[
            ModalController/* ModalController */.W.subscribeKey('open', val => (val ? this.onOpen() : this.onClose())),
            ModalController/* ModalController */.W.subscribeKey('shake', val => (this.shake = val)),
            ChainController/* ChainController */.W.subscribeKey('activeCaipNetwork', val => this.onNewNetwork(val)),
            ChainController/* ChainController */.W.subscribeKey('activeCaipAddress', val => this.onNewAddress(val)),
            OptionsController/* OptionsController */.H.subscribeKey('enableEmbedded', val => (this.enableEmbedded = val)),
            ConnectorController/* ConnectorController */.a.subscribeKey('filterByNamespace', val => {
                if (this.filterByNamespace !== val && !ChainController/* ChainController */.W.getAccountData(val)?.caipAddress) {
                    ApiController/* ApiController */.N.fetchRecommendedWallets();
                    this.filterByNamespace = val;
                }
            })
        ]);
    }
    firstUpdated() {
        if (this.caipAddress) {
            if (this.enableEmbedded) {
                ModalController/* ModalController */.W.close();
                this.prefetch();
                return;
            }
            this.onNewAddress(this.caipAddress);
        }
        if (this.open) {
            this.onOpen();
        }
        if (this.enableEmbedded) {
            this.prefetch();
        }
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
        this.onRemoveKeyboardListener();
    }
    render() {
        this.style.cssText = `
      --local-border-bottom-mobile-radius: ${this.enableEmbedded ? 'clamp(0px, var(--wui-border-radius-l), 44px)' : '0px'};
    `;
        if (this.enableEmbedded) {
            return (0,lit/* html */.qy) `${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `;
        }
        return this.open
            ? (0,lit/* html */.qy) `
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `
            : null;
    }
    contentTemplate() {
        return (0,lit/* html */.qy) ` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,if_defined/* ifDefined */.J)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`;
    }
    async onOverlayClick(event) {
        if (event.target === event.currentTarget) {
            await this.handleClose();
        }
    }
    async handleClose() {
        await ModalUtil.safeClose();
    }
    initializeTheming() {
        const { themeVariables, themeMode } = ThemeController/* ThemeController */.W.state;
        const defaultThemeMode = esm_exports/* UiHelperUtil */.Zv.getColorTheme(themeMode);
        (0,esm_exports/* initializeTheming */.RF)(themeVariables, defaultThemeMode);
    }
    onClose() {
        this.open = false;
        this.classList.remove('open');
        this.onScrollUnlock();
        SnackController/* SnackController */.P.hide();
        this.onRemoveKeyboardListener();
    }
    onOpen() {
        this.open = true;
        this.classList.add('open');
        this.onScrollLock();
        this.onAddKeyboardListener();
    }
    onScrollLock() {
        const styleTag = document.createElement('style');
        styleTag.dataset['w3m'] = SCROLL_LOCK;
        styleTag.textContent = `
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `;
        document.head.appendChild(styleTag);
    }
    onScrollUnlock() {
        const styleTag = document.head.querySelector(`style[data-w3m="${SCROLL_LOCK}"]`);
        if (styleTag) {
            styleTag.remove();
        }
    }
    onAddKeyboardListener() {
        this.abortController = new AbortController();
        const card = this.shadowRoot?.querySelector('wui-card');
        card?.focus();
        window.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                this.handleClose();
            }
            else if (event.key === 'Tab') {
                const { tagName } = event.target;
                if (tagName && !tagName.includes('W3M-') && !tagName.includes('WUI-')) {
                    card?.focus();
                }
            }
        }, this.abortController);
    }
    onRemoveKeyboardListener() {
        this.abortController?.abort();
        this.abortController = undefined;
    }
    async onNewAddress(caipAddress) {
        const isSwitchingNamespace = ChainController/* ChainController */.W.state.isSwitchingNamespace;
        const nextConnected = CoreHelperUtil/* CoreHelperUtil */.w.getPlainAddress(caipAddress);
        const isDisconnectedInSameNamespace = !nextConnected && !isSwitchingNamespace;
        const isSwitchingNamespaceAndConnected = isSwitchingNamespace && nextConnected;
        if (isDisconnectedInSameNamespace) {
            ModalController/* ModalController */.W.close();
        }
        else if (isSwitchingNamespaceAndConnected) {
            RouterController/* RouterController */.I.goBack();
        }
        await SIWXUtil/* SIWXUtil */.U.initializeIfEnabled();
        this.caipAddress = caipAddress;
        ChainController/* ChainController */.W.setIsSwitchingNamespace(false);
    }
    onNewNetwork(nextCaipNetwork) {
        const prevCaipNetwork = this.caipNetwork;
        const prevCaipNetworkId = prevCaipNetwork?.caipNetworkId?.toString();
        const prevChainNamespace = prevCaipNetwork?.chainNamespace;
        const nextNetworkId = nextCaipNetwork?.caipNetworkId?.toString();
        const nextChainNamespace = nextCaipNetwork?.chainNamespace;
        const networkIdChanged = prevCaipNetworkId !== nextNetworkId;
        const namespaceChanged = prevChainNamespace !== nextChainNamespace;
        const isNetworkChangedInSameNamespace = networkIdChanged && !namespaceChanged;
        const wasUnsupportedNetwork = prevCaipNetwork?.name === ConstantsUtil/* ConstantsUtil */.o.UNSUPPORTED_NETWORK_NAME;
        const isConnectingExternal = RouterController/* RouterController */.I.state.view === 'ConnectingExternal';
        const isNotConnected = !ChainController/* ChainController */.W.getAccountData(nextCaipNetwork?.chainNamespace)
            ?.caipAddress;
        const isUnsupportedNetworkScreen = RouterController/* RouterController */.I.state.view === 'UnsupportedChain';
        const isModalOpen = ModalController/* ModalController */.W.state.open;
        let shouldGoBack = false;
        if (isModalOpen && !isConnectingExternal) {
            if (isNotConnected) {
                if (networkIdChanged) {
                    shouldGoBack = true;
                }
            }
            else if (isUnsupportedNetworkScreen) {
                shouldGoBack = true;
            }
            else if (isNetworkChangedInSameNamespace && !wasUnsupportedNetwork) {
                shouldGoBack = true;
            }
        }
        if (shouldGoBack && RouterController/* RouterController */.I.state.view !== 'SIWXSignMessage') {
            RouterController/* RouterController */.I.goBack();
        }
        this.caipNetwork = nextCaipNetwork;
    }
    prefetch() {
        if (!this.hasPrefetched) {
            ApiController/* ApiController */.N.prefetch();
            ApiController/* ApiController */.N.fetchWalletsByPage({ page: 1 });
            this.hasPrefetched = true;
        }
    }
}
W3mModalBase.styles = w3m_modal_styles;
w3m_modal_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], W3mModalBase.prototype, "enableEmbedded", void 0);
w3m_modal_decorate([
    (0,decorators/* state */.wk)()
], W3mModalBase.prototype, "open", void 0);
w3m_modal_decorate([
    (0,decorators/* state */.wk)()
], W3mModalBase.prototype, "caipAddress", void 0);
w3m_modal_decorate([
    (0,decorators/* state */.wk)()
], W3mModalBase.prototype, "caipNetwork", void 0);
w3m_modal_decorate([
    (0,decorators/* state */.wk)()
], W3mModalBase.prototype, "shake", void 0);
w3m_modal_decorate([
    (0,decorators/* state */.wk)()
], W3mModalBase.prototype, "filterByNamespace", void 0);
let W3mModal = class W3mModal extends W3mModalBase {
};
W3mModal = w3m_modal_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-modal')
], W3mModal);

let AppKitModal = class AppKitModal extends W3mModalBase {
};
AppKitModal = w3m_modal_decorate([
    (0,esm_exports/* customElement */.EM)('appkit-modal')
], AppKitModal);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/exports/w3m-modal.js

//# sourceMappingURL=w3m-modal.js.map

/***/ }),

/***/ 51636:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _src_components_wui_icon_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(976834);

//# sourceMappingURL=wui-icon.js.map

/***/ }),

/***/ 126071:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OA: () => (/* binding */ t),
/* harmony export */   WL: () => (/* binding */ i),
/* harmony export */   u$: () => (/* binding */ e)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
//# sourceMappingURL=directive.js.map


/***/ }),

/***/ 238436:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: WuiIconBox

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js + 2 modules
var decorators = __webpack_require__(483419);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/index.js + 5 modules
var wui_icon = __webpack_require__(976834);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(926109);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(243494);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-box/styles.js

/* harmony default export */ const styles = ((0,lit/* css */.AH) `
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-box/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let WuiIconBox = class WuiIconBox extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.size = 'md';
        this.backgroundColor = 'accent-100';
        this.iconColor = 'accent-100';
        this.background = 'transparent';
        this.border = false;
        this.borderColor = 'wui-color-bg-125';
        this.icon = 'copy';
    }
    render() {
        const iconSize = this.iconSize || this.size;
        const isLg = this.size === 'lg';
        const isXl = this.size === 'xl';
        const bgMix = isLg ? '12%' : '16%';
        const borderRadius = isLg ? 'xxs' : isXl ? 's' : '3xl';
        const isGray = this.background === 'gray';
        const isOpaque = this.background === 'opaque';
        const isColorChange = (this.backgroundColor === 'accent-100' && isOpaque) ||
            (this.backgroundColor === 'success-100' && isOpaque) ||
            (this.backgroundColor === 'error-100' && isOpaque) ||
            (this.backgroundColor === 'inverse-100' && isOpaque);
        let bgValueVariable = `var(--wui-color-${this.backgroundColor})`;
        if (isColorChange) {
            bgValueVariable = `var(--wui-icon-box-bg-${this.backgroundColor})`;
        }
        else if (isGray) {
            bgValueVariable = `var(--wui-color-gray-${this.backgroundColor})`;
        }
        this.style.cssText = `
       --local-bg-value: ${bgValueVariable};
       --local-bg-mix: ${isColorChange || isGray ? `100%` : bgMix};
       --local-border-radius: var(--wui-border-radius-${borderRadius});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor === 'wui-color-bg-125' ? `2px` : `1px`} solid ${this.border ? `var(--${this.borderColor})` : `transparent`}
   `;
        return (0,lit/* html */.qy) ` <wui-icon color=${this.iconColor} size=${iconSize} name=${this.icon}></wui-icon> `;
    }
};
WuiIconBox.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiIconBox.prototype, "size", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiIconBox.prototype, "backgroundColor", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiIconBox.prototype, "iconColor", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiIconBox.prototype, "iconSize", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiIconBox.prototype, "background", void 0);
__decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiIconBox.prototype, "border", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiIconBox.prototype, "borderColor", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiIconBox.prototype, "icon", void 0);
WuiIconBox = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-icon-box')
], WuiIconBox);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 301608:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: WuiImage

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js + 2 modules
var decorators = __webpack_require__(483419);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(926109);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(243494);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-image/styles.js

/* harmony default export */ const styles = ((0,lit/* css */.AH) `
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-image/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let WuiImage = class WuiImage extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.src = './path/to/image.jpg';
        this.alt = 'Image';
        this.size = undefined;
    }
    render() {
        this.style.cssText = `
      --local-width: ${this.size ? `var(--wui-icon-size-${this.size});` : '100%'};
      --local-height: ${this.size ? `var(--wui-icon-size-${this.size});` : '100%'};
      `;
        return (0,lit/* html */.qy) `<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`;
    }
    handleImageError() {
        this.dispatchEvent(new CustomEvent('onLoadError', { bubbles: true, composed: true }));
    }
};
WuiImage.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* colorStyles */.ck, styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiImage.prototype, "src", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiImage.prototype, "alt", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiImage.prototype, "size", void 0);
WuiImage = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-image')
], WuiImage);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 341200:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H: () => (/* reexport */ e)
});

// EXTERNAL MODULE: ./node_modules/lit-html/node/lit-html.js
var lit_html = __webpack_require__(240173);
// EXTERNAL MODULE: ./node_modules/lit-html/node/directive.js
var directive = __webpack_require__(126071);
;// ./node_modules/lit-html/node/directives/class-map.js

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=(0,directive/* directive */.u$)(class extends directive/* Directive */.WL{constructor(t){if(super(t),t.type!==directive/* PartType */.OA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((s=>t[s])).join(" ")+" "}update(s,[i]){if(void 0===this.st){this.st=new Set,void 0!==s.strings&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(i)}const r=s.element.classList;for(const t of this.st)t in i||(r.remove(t),this.st.delete(t));for(const t in i){const s=!!i[t];s===this.st.has(t)||this.nt?.has(t)||(s?(r.add(t),this.st.add(t)):(r.remove(t),this.st.delete(t)))}return lit_html/* noChange */.c0}});
//# sourceMappingURL=class-map.js.map

;// ./node_modules/lit/directives/class-map.js

//# sourceMappingURL=class-map.js.map


/***/ }),

/***/ 460310:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _src_layout_wui_flex_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(648832);

//# sourceMappingURL=wui-flex.js.map

/***/ }),

/***/ 481355:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: WuiTag

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js + 2 modules
var decorators = __webpack_require__(483419);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/index.js + 1 modules
var wui_text = __webpack_require__(984206);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(926109);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(243494);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tag/styles.js

/* harmony default export */ const styles = ((0,lit/* css */.AH) `
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tag/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let WuiTag = class WuiTag extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.variant = 'main';
        this.size = 'lg';
    }
    render() {
        this.dataset['variant'] = this.variant;
        this.dataset['size'] = this.size;
        const textVariant = this.size === 'md' ? 'mini-700' : 'micro-700';
        return (0,lit/* html */.qy) `
      <wui-text data-variant=${this.variant} variant=${textVariant} color="inherit">
        <slot></slot>
      </wui-text>
    `;
    }
};
WuiTag.styles = [ThemeUtil/* resetStyles */.W5, styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiTag.prototype, "variant", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiTag.prototype, "size", void 0);
WuiTag = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-tag')
], WuiTag);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 483419:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  MZ: () => (/* reexport */ n),
  wk: () => (/* reexport */ state_r)
});

// UNUSED EXPORTS: customElement, eventOptions, query, queryAll, queryAssignedElements, queryAssignedNodes, queryAsync, standardProperty

// EXTERNAL MODULE: ./node_modules/@lit/reactive-element/node/reactive-element.js + 4 modules
var reactive_element = __webpack_require__(740512);
;// ./node_modules/@lit/reactive-element/node/decorators/property.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:!0,type:String,converter:reactive_element/* defaultConverter */.W3,reflect:!1,hasChanged:reactive_element/* notEqual */.Ec},r=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),s.set(r.name,t),"accessor"===n){const{name:o}=r;return{set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t)}}throw Error("Unsupported decorator location: "+n)};function n(t){return(e,o)=>"object"==typeof o?r(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}
//# sourceMappingURL=property.js.map

;// ./node_modules/@lit/reactive-element/node/decorators/state.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function state_r(r){return n({...r,state:!0,attribute:!1})}
//# sourceMappingURL=state.js.map

;// ./node_modules/lit/decorators.js

//# sourceMappingURL=decorators.js.map


/***/ }),

/***/ 508163:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: WuiLoadingSpinner

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js + 2 modules
var decorators = __webpack_require__(483419);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(926109);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(243494);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-spinner/styles.js

/* harmony default export */ const styles = ((0,lit/* css */.AH) `
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-spinner/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let WuiLoadingSpinner = class WuiLoadingSpinner extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.color = 'accent-100';
        this.size = 'lg';
    }
    render() {
        this.style.cssText = `--local-color: ${this.color === 'inherit' ? 'inherit' : `var(--wui-color-${this.color})`}`;
        this.dataset['size'] = this.size;
        return (0,lit/* html */.qy) `<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`;
    }
};
WuiLoadingSpinner.styles = [ThemeUtil/* resetStyles */.W5, styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiLoadingSpinner.prototype, "color", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiLoadingSpinner.prototype, "size", void 0);
WuiLoadingSpinner = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-loading-spinner')
], WuiLoadingSpinner);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 591223:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Rt: () => (/* binding */ f),
/* harmony export */   sO: () => (/* binding */ i)
/* harmony export */ });
/* unused harmony exports TemplateResultType, clearPart, getCommittedValue, getDirectiveClass, insertPart, isCompiledTemplateResult, isDirectiveResult, isTemplateResult, removePart, setChildPartValue, setCommittedValue */
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(240173);

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:t}=_lit_html_js__WEBPACK_IMPORTED_MODULE_0__/* ._$LH */ .ge,i=o=>null===o||"object"!=typeof o&&"function"!=typeof o,n={HTML:1,SVG:2,MATHML:3},e=(o,t)=>void 0===t?void 0!==o?._$litType$:o?._$litType$===t,l=o=>null!=o?._$litType$?.h,c=o=>void 0!==o?._$litDirective$,d=o=>o?._$litDirective$,f=o=>void 0===o.strings,s=()=>document.createComment(""),r=(o,i,n)=>{const e=o._$AA.parentNode,l=void 0===i?o._$AB:i._$AA;if(void 0===n){const i=e.insertBefore(s(),l),c=e.insertBefore(s(),l);n=new t(i,c,o,o.options)}else{const t=n._$AB.nextSibling,i=n._$AM,c=i!==o;if(c){let t;n._$AQ?.(o),n._$AM=o,void 0!==n._$AP&&(t=o._$AU)!==i._$AU&&n._$AP(t)}if(t!==l||c){let o=n._$AA;for(;o!==t;){const t=o.nextSibling;e.insertBefore(o,l),o=t}}}return n},v=(o,t,i=o)=>(o._$AI(t,i),o),u={},m=(o,t=u)=>o._$AH=t,p=o=>o._$AH,M=o=>{o._$AP?.(!1,!0);let t=o._$AA;const i=o._$AB.nextSibling;for(;t!==i;){const o=t.nextSibling;t.remove(),t=o}},h=o=>{o._$AR()};
//# sourceMappingURL=directive-helpers.js.map


/***/ }),

/***/ 648832:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: WuiFlex

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js + 2 modules
var decorators = __webpack_require__(483419);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(926109);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/UiHelperUtil.js
var UiHelperUtil = __webpack_require__(163612);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(243494);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-flex/styles.js

/* harmony default export */ const styles = ((0,lit/* css */.AH) `
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-flex/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let WuiFlex = class WuiFlex extends lit/* LitElement */.WF {
    render() {
        this.style.cssText = `
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap && `var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap && `var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap && `var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding && UiHelperUtil/* UiHelperUtil */.Z.getSpacingStyles(this.padding, 0)};
      padding-right: ${this.padding && UiHelperUtil/* UiHelperUtil */.Z.getSpacingStyles(this.padding, 1)};
      padding-bottom: ${this.padding && UiHelperUtil/* UiHelperUtil */.Z.getSpacingStyles(this.padding, 2)};
      padding-left: ${this.padding && UiHelperUtil/* UiHelperUtil */.Z.getSpacingStyles(this.padding, 3)};
      margin-top: ${this.margin && UiHelperUtil/* UiHelperUtil */.Z.getSpacingStyles(this.margin, 0)};
      margin-right: ${this.margin && UiHelperUtil/* UiHelperUtil */.Z.getSpacingStyles(this.margin, 1)};
      margin-bottom: ${this.margin && UiHelperUtil/* UiHelperUtil */.Z.getSpacingStyles(this.margin, 2)};
      margin-left: ${this.margin && UiHelperUtil/* UiHelperUtil */.Z.getSpacingStyles(this.margin, 3)};
    `;
        return (0,lit/* html */.qy) `<slot></slot>`;
    }
};
WuiFlex.styles = [ThemeUtil/* resetStyles */.W5, styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "flexDirection", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "flexWrap", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "flexBasis", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "flexGrow", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "flexShrink", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "alignItems", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "justifyContent", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "columnGap", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "rowGap", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "gap", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "padding", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiFlex.prototype, "margin", void 0);
WuiFlex = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-flex')
], WuiFlex);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 723262:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kq: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _directive_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(591223);
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(126071);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=(i,t)=>{const e=i._$AN;if(void 0===e)return!1;for(const i of e)i._$AO?.(t,!1),s(i,t);return!0},o=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t}while(0===e?.size)},r=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),c(t)}};function h(i){void 0!==this._$AN?(o(this),this._$AM=i,r(this)):this._$AM=i}function n(i,t=!1,e=0){const r=this._$AH,h=this._$AN;if(void 0!==h&&0!==h.size)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)s(r[i],!1),o(r[i]);else null!=r&&(s(r,!1),o(r));else s(this,i)}const c=i=>{i.type==_directive_js__WEBPACK_IMPORTED_MODULE_1__/* .PartType */ .OA.CHILD&&(i._$AP??=n,i._$AQ??=h)};class f extends _directive_js__WEBPACK_IMPORTED_MODULE_1__/* .Directive */ .WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,t,e){super._$AT(i,t,e),r(this),this.isConnected=i._$AU}_$AO(i,t=!0){i!==this.isConnected&&(this.isConnected=i,i?this.reconnected?.():this.disconnected?.()),t&&(s(this,i),o(this))}setValue(t){if((0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_0__/* .isSingleExpression */ .Rt)(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}
//# sourceMappingURL=async-directive.js.map


/***/ }),

/***/ 734473:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* reexport */ o)
});

// EXTERNAL MODULE: ./node_modules/lit-html/node/lit-html.js
var lit_html = __webpack_require__(240173);
;// ./node_modules/lit-html/node/directives/if-defined.js

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o=o=>o??lit_html/* nothing */.s6;
//# sourceMappingURL=if-defined.js.map

;// ./node_modules/lit/directives/if-defined.js

//# sourceMappingURL=if-defined.js.map


/***/ }),

/***/ 945090:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _src_components_wui_text_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(984206);

//# sourceMappingURL=wui-text.js.map

/***/ }),

/***/ 976834:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: WuiIcon

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js + 2 modules
var decorators = __webpack_require__(483419);
// EXTERNAL MODULE: ./node_modules/lit-html/node/lit-html.js
var lit_html = __webpack_require__(240173);
// EXTERNAL MODULE: ./node_modules/lit-html/node/directive-helpers.js
var directive_helpers = __webpack_require__(591223);
// EXTERNAL MODULE: ./node_modules/lit-html/node/async-directive.js
var async_directive = __webpack_require__(723262);
;// ./node_modules/lit-html/node/directives/private-async-helpers.js
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=async(t,s)=>{for await(const i of t)if(!1===await s(i))return};class s{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise((t=>this.Z=t))}resume(){this.Z?.(),this.Y=this.Z=void 0}}
//# sourceMappingURL=private-async-helpers.js.map

// EXTERNAL MODULE: ./node_modules/lit-html/node/directive.js
var directive = __webpack_require__(126071);
;// ./node_modules/lit-html/node/directives/until.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n=t=>!(0,directive_helpers/* isPrimitive */.sO)(t)&&"function"==typeof t.then,h=1073741823;class c extends async_directive/* AsyncDirective */.Kq{constructor(){super(...arguments),this._$Cwt=h,this._$Cbt=[],this._$CK=new s(this),this._$CX=new i}render(...s){return s.find((t=>!n(t)))??lit_html/* noChange */.c0}update(s,i){const e=this._$Cbt;let r=e.length;this._$Cbt=i;const o=this._$CK,c=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<i.length&&!(t>this._$Cwt);t++){const s=i[t];if(!n(s))return this._$Cwt=t,s;t<r&&s===e[t]||(this._$Cwt=h,r=0,Promise.resolve(s).then((async t=>{for(;c.get();)await c.get();const i=o.deref();if(void 0!==i){const e=i._$Cbt.indexOf(s);e>-1&&e<i._$Cwt&&(i._$Cwt=e,i.setValue(t))}})))}return lit_html/* noChange */.c0}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const m=(0,directive/* directive */.u$)(c);
//# sourceMappingURL=until.js.map

;// ./node_modules/lit/directives/until.js

//# sourceMappingURL=until.js.map

;// ./node_modules/@reown/appkit-ui/dist/esm/src/utils/CacheUtil.js
class CacheUtil {
    constructor() {
        this.cache = new Map();
    }
    set(key, value) {
        this.cache.set(key, value);
    }
    get(key) {
        return this.cache.get(key);
    }
    has(key) {
        return this.cache.has(key);
    }
    delete(key) {
        this.cache.delete(key);
    }
    clear() {
        this.cache.clear();
    }
}
const globalSvgCache = new CacheUtil();
//# sourceMappingURL=CacheUtil.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(926109);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(243494);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/styles.js

/* harmony default export */ const styles = ((0,lit/* css */.AH) `
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const ICONS = {
    add: async () => (await __webpack_require__.e(/* import() */ 1476).then(__webpack_require__.bind(__webpack_require__, 661476))).addSvg,
    allWallets: async () => (await __webpack_require__.e(/* import() */ 3723).then(__webpack_require__.bind(__webpack_require__, 53723))).allWalletsSvg,
    arrowBottomCircle: async () => (await __webpack_require__.e(/* import() */ 6717).then(__webpack_require__.bind(__webpack_require__, 516717))).arrowBottomCircleSvg,
    appStore: async () => (await __webpack_require__.e(/* import() */ 9236).then(__webpack_require__.bind(__webpack_require__, 389236))).appStoreSvg,
    apple: async () => (await __webpack_require__.e(/* import() */ 1979).then(__webpack_require__.bind(__webpack_require__, 841979))).appleSvg,
    arrowBottom: async () => (await __webpack_require__.e(/* import() */ 5776).then(__webpack_require__.bind(__webpack_require__, 435776))).arrowBottomSvg,
    arrowLeft: async () => (await __webpack_require__.e(/* import() */ 6426).then(__webpack_require__.bind(__webpack_require__, 884045))).arrowLeftSvg,
    arrowRight: async () => (await __webpack_require__.e(/* import() */ 5133).then(__webpack_require__.bind(__webpack_require__, 235133))).arrowRightSvg,
    arrowTop: async () => (await __webpack_require__.e(/* import() */ 6040).then(__webpack_require__.bind(__webpack_require__, 756040))).arrowTopSvg,
    bank: async () => (await __webpack_require__.e(/* import() */ 261).then(__webpack_require__.bind(__webpack_require__, 580261))).bankSvg,
    browser: async () => (await __webpack_require__.e(/* import() */ 787).then(__webpack_require__.bind(__webpack_require__, 750787))).browserSvg,
    card: async () => (await __webpack_require__.e(/* import() */ 1029).then(__webpack_require__.bind(__webpack_require__, 771029))).cardSvg,
    checkmark: async () => (await __webpack_require__.e(/* import() */ 9390).then(__webpack_require__.bind(__webpack_require__, 679390))).checkmarkSvg,
    checkmarkBold: async () => (await __webpack_require__.e(/* import() */ 1824).then(__webpack_require__.bind(__webpack_require__, 31824))).checkmarkBoldSvg,
    chevronBottom: async () => (await __webpack_require__.e(/* import() */ 5214).then(__webpack_require__.bind(__webpack_require__, 665214))).chevronBottomSvg,
    chevronLeft: async () => (await __webpack_require__.e(/* import() */ 5664).then(__webpack_require__.bind(__webpack_require__, 645664))).chevronLeftSvg,
    chevronRight: async () => (await __webpack_require__.e(/* import() */ 2387).then(__webpack_require__.bind(__webpack_require__, 972387))).chevronRightSvg,
    chevronTop: async () => (await __webpack_require__.e(/* import() */ 9146).then(__webpack_require__.bind(__webpack_require__, 239146))).chevronTopSvg,
    chromeStore: async () => (await __webpack_require__.e(/* import() */ 2565).then(__webpack_require__.bind(__webpack_require__, 402565))).chromeStoreSvg,
    clock: async () => (await __webpack_require__.e(/* import() */ 4218).then(__webpack_require__.bind(__webpack_require__, 641837))).clockSvg,
    close: async () => (await __webpack_require__.e(/* import() */ 5943).then(__webpack_require__.bind(__webpack_require__, 305943))).closeSvg,
    compass: async () => (await __webpack_require__.e(/* import() */ 2011).then(__webpack_require__.bind(__webpack_require__, 92011))).compassSvg,
    coinPlaceholder: async () => (await __webpack_require__.e(/* import() */ 6929).then(__webpack_require__.bind(__webpack_require__, 576929))).coinPlaceholderSvg,
    copy: async () => (await __webpack_require__.e(/* import() */ 4554).then(__webpack_require__.bind(__webpack_require__, 124554))).copySvg,
    cursor: async () => (await __webpack_require__.e(/* import() */ 2161).then(__webpack_require__.bind(__webpack_require__, 362161))).cursorSvg,
    cursorTransparent: async () => (await __webpack_require__.e(/* import() */ 5518).then(__webpack_require__.bind(__webpack_require__, 795518))).cursorTransparentSvg,
    desktop: async () => (await __webpack_require__.e(/* import() */ 6355).then(__webpack_require__.bind(__webpack_require__, 276355))).desktopSvg,
    disconnect: async () => (await __webpack_require__.e(/* import() */ 4953).then(__webpack_require__.bind(__webpack_require__, 894953))).disconnectSvg,
    discord: async () => (await __webpack_require__.e(/* import() */ 7243).then(__webpack_require__.bind(__webpack_require__, 857243))).discordSvg,
    etherscan: async () => (await __webpack_require__.e(/* import() */ 70).then(__webpack_require__.bind(__webpack_require__, 260070))).etherscanSvg,
    extension: async () => (await __webpack_require__.e(/* import() */ 6618).then(__webpack_require__.bind(__webpack_require__, 806618))).extensionSvg,
    externalLink: async () => (await __webpack_require__.e(/* import() */ 877).then(__webpack_require__.bind(__webpack_require__, 360877))).externalLinkSvg,
    facebook: async () => (await __webpack_require__.e(/* import() */ 279).then(__webpack_require__.bind(__webpack_require__, 330279))).facebookSvg,
    farcaster: async () => (await __webpack_require__.e(/* import() */ 5426).then(__webpack_require__.bind(__webpack_require__, 15426))).farcasterSvg,
    filters: async () => (await __webpack_require__.e(/* import() */ 4052).then(__webpack_require__.bind(__webpack_require__, 84052))).filtersSvg,
    github: async () => (await __webpack_require__.e(/* import() */ 1496).then(__webpack_require__.bind(__webpack_require__, 11496))).githubSvg,
    google: async () => (await __webpack_require__.e(/* import() */ 9624).then(__webpack_require__.bind(__webpack_require__, 59624))).googleSvg,
    helpCircle: async () => (await __webpack_require__.e(/* import() */ 6561).then(__webpack_require__.bind(__webpack_require__, 566561))).helpCircleSvg,
    image: async () => (await __webpack_require__.e(/* import() */ 8842).then(__webpack_require__.bind(__webpack_require__, 88842))).imageSvg,
    id: async () => (await __webpack_require__.e(/* import() */ 4778).then(__webpack_require__.bind(__webpack_require__, 484778))).idSvg,
    infoCircle: async () => (await __webpack_require__.e(/* import() */ 4748).then(__webpack_require__.bind(__webpack_require__, 484748))).infoCircleSvg,
    lightbulb: async () => (await __webpack_require__.e(/* import() */ 6828).then(__webpack_require__.bind(__webpack_require__, 176828))).lightbulbSvg,
    mail: async () => (await __webpack_require__.e(/* import() */ 307).then(__webpack_require__.bind(__webpack_require__, 692688))).mailSvg,
    mobile: async () => (await __webpack_require__.e(/* import() */ 9385).then(__webpack_require__.bind(__webpack_require__, 669385))).mobileSvg,
    more: async () => (await __webpack_require__.e(/* import() */ 4230).then(__webpack_require__.bind(__webpack_require__, 494230))).moreSvg,
    networkPlaceholder: async () => (await __webpack_require__.e(/* import() */ 2901).then(__webpack_require__.bind(__webpack_require__, 522901))).networkPlaceholderSvg,
    nftPlaceholder: async () => (await __webpack_require__.e(/* import() */ 5410).then(__webpack_require__.bind(__webpack_require__, 435410))).nftPlaceholderSvg,
    off: async () => (await __webpack_require__.e(/* import() */ 2658).then(__webpack_require__.bind(__webpack_require__, 812658))).offSvg,
    playStore: async () => (await __webpack_require__.e(/* import() */ 7469).then(__webpack_require__.bind(__webpack_require__, 877469))).playStoreSvg,
    plus: async () => (await __webpack_require__.e(/* import() */ 1035).then(__webpack_require__.bind(__webpack_require__, 511035))).plusSvg,
    qrCode: async () => (await __webpack_require__.e(/* import() */ 2016).then(__webpack_require__.bind(__webpack_require__, 72016))).qrCodeIcon,
    recycleHorizontal: async () => (await __webpack_require__.e(/* import() */ 4987).then(__webpack_require__.bind(__webpack_require__, 884987))).recycleHorizontalSvg,
    refresh: async () => (await __webpack_require__.e(/* import() */ 5452).then(__webpack_require__.bind(__webpack_require__, 85452))).refreshSvg,
    search: async () => (await __webpack_require__.e(/* import() */ 8127).then(__webpack_require__.bind(__webpack_require__, 938127))).searchSvg,
    send: async () => (await __webpack_require__.e(/* import() */ 4725).then(__webpack_require__.bind(__webpack_require__, 674725))).sendSvg,
    swapHorizontal: async () => (await __webpack_require__.e(/* import() */ 6780).then(__webpack_require__.bind(__webpack_require__, 416780))).swapHorizontalSvg,
    swapHorizontalMedium: async () => (await __webpack_require__.e(/* import() */ 1975).then(__webpack_require__.bind(__webpack_require__, 251975))).swapHorizontalMediumSvg,
    swapHorizontalBold: async () => (await __webpack_require__.e(/* import() */ 3967).then(__webpack_require__.bind(__webpack_require__, 643967))).swapHorizontalBoldSvg,
    swapHorizontalRoundedBold: async () => (await __webpack_require__.e(/* import() */ 6188).then(__webpack_require__.bind(__webpack_require__, 486188))).swapHorizontalRoundedBoldSvg,
    swapVertical: async () => (await __webpack_require__.e(/* import() */ 1538).then(__webpack_require__.bind(__webpack_require__, 31538))).swapVerticalSvg,
    telegram: async () => (await __webpack_require__.e(/* import() */ 2692).then(__webpack_require__.bind(__webpack_require__, 792692))).telegramSvg,
    threeDots: async () => (await __webpack_require__.e(/* import() */ 5420).then(__webpack_require__.bind(__webpack_require__, 565420))).threeDotsSvg,
    twitch: async () => (await __webpack_require__.e(/* import() */ 4736).then(__webpack_require__.bind(__webpack_require__, 54736))).twitchSvg,
    twitter: async () => (await __webpack_require__.e(/* import() */ 2931).then(__webpack_require__.bind(__webpack_require__, 192931))).xSvg,
    twitterIcon: async () => (await __webpack_require__.e(/* import() */ 4477).then(__webpack_require__.bind(__webpack_require__, 934477))).twitterIconSvg,
    verify: async () => (await __webpack_require__.e(/* import() */ 2026).then(__webpack_require__.bind(__webpack_require__, 182026))).verifySvg,
    verifyFilled: async () => (await __webpack_require__.e(/* import() */ 4067).then(__webpack_require__.bind(__webpack_require__, 644067))).verifyFilledSvg,
    wallet: async () => (await __webpack_require__.e(/* import() */ 6530).then(__webpack_require__.bind(__webpack_require__, 706530))).walletSvg,
    walletConnect: async () => (await __webpack_require__.e(/* import() */ 5806).then(__webpack_require__.bind(__webpack_require__, 665806))).walletConnectSvg,
    walletConnectLightBrown: async () => (await __webpack_require__.e(/* import() */ 5806).then(__webpack_require__.bind(__webpack_require__, 665806))).walletConnectLightBrownSvg,
    walletConnectBrown: async () => (await __webpack_require__.e(/* import() */ 5806).then(__webpack_require__.bind(__webpack_require__, 665806))).walletConnectBrownSvg,
    walletPlaceholder: async () => (await __webpack_require__.e(/* import() */ 4714).then(__webpack_require__.bind(__webpack_require__, 774714))).walletPlaceholderSvg,
    warningCircle: async () => (await __webpack_require__.e(/* import() */ 6348).then(__webpack_require__.bind(__webpack_require__, 576348))).warningCircleSvg,
    x: async () => (await __webpack_require__.e(/* import() */ 2931).then(__webpack_require__.bind(__webpack_require__, 192931))).xSvg,
    info: async () => (await __webpack_require__.e(/* import() */ 5823).then(__webpack_require__.bind(__webpack_require__, 555823))).infoSvg,
    exclamationTriangle: async () => (await __webpack_require__.e(/* import() */ 5179).then(__webpack_require__.bind(__webpack_require__, 895179))).exclamationTriangleSvg,
    reown: async () => (await __webpack_require__.e(/* import() */ 1978).then(__webpack_require__.bind(__webpack_require__, 691978))).reownSvg
};
async function getSvg(name) {
    if (globalSvgCache.has(name)) {
        return globalSvgCache.get(name);
    }
    const importFn = ICONS[name] ?? ICONS.copy;
    const svgPromise = importFn();
    globalSvgCache.set(name, svgPromise);
    return svgPromise;
}
let WuiIcon = class WuiIcon extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.size = 'md';
        this.name = 'copy';
        this.color = 'fg-300';
        this.aspectRatio = '1 / 1';
    }
    render() {
        this.style.cssText = `
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `;
        return (0,lit/* html */.qy) `${m(getSvg(this.name), (0,lit/* html */.qy) `<div class="fallback"></div>`)}`;
    }
};
WuiIcon.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* colorStyles */.ck, styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiIcon.prototype, "size", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiIcon.prototype, "name", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiIcon.prototype, "color", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiIcon.prototype, "aspectRatio", void 0);
WuiIcon = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-icon')
], WuiIcon);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 984206:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: WuiText

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js + 2 modules
var decorators = __webpack_require__(483419);
// EXTERNAL MODULE: ./node_modules/lit/directives/class-map.js + 1 modules
var class_map = __webpack_require__(341200);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(926109);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(243494);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/styles.js

/* harmony default export */ const styles = ((0,lit/* css */.AH) `
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let WuiText = class WuiText extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.variant = 'paragraph-500';
        this.color = 'fg-300';
        this.align = 'left';
        this.lineClamp = undefined;
    }
    render() {
        const classes = {
            [`wui-font-${this.variant}`]: true,
            [`wui-color-${this.color}`]: true,
            [`wui-line-clamp-${this.lineClamp}`]: this.lineClamp ? true : false
        };
        this.style.cssText = `
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `;
        return (0,lit/* html */.qy) `<slot class=${(0,class_map/* classMap */.H)(classes)}></slot>`;
    }
};
WuiText.styles = [ThemeUtil/* resetStyles */.W5, styles];
__decorate([
    (0,decorators/* property */.MZ)()
], WuiText.prototype, "variant", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiText.prototype, "color", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiText.prototype, "align", void 0);
__decorate([
    (0,decorators/* property */.MZ)()
], WuiText.prototype, "lineClamp", void 0);
WuiText = __decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-text')
], WuiText);

//# sourceMappingURL=index.js.map

/***/ })

};
;