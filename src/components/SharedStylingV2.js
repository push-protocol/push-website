// External Components
import { Link } from "react-router-dom";
import styled from "styled-components";

// Internal Configs
import GLOBALS, { device } from '@site/src/config/globals';
/**
 * Usage Hierarchy
 *
 * Section
 * 		Content
 * 			ItemH
 * 				ItemV  ItemV ItemV  ItemV
 * 			ItemH
 * 				ItemV  ItemV ItemV  ItemV
 */

export const HeroHeaderV2 = styled.h1`
  font-family: ${(props) => props.fontFamily || "Strawford, Helvetica, sans-serif"};
  color: ${(props) => props.color || GLOBALS.COLORS.FONT_LIGHT};
  font-size: 68px;
  line-height: 110%;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.03em;
  text-align: ${(props) => props.textAlign || "initial"};
  text-transform: none;
  text-shadow: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;

  @media ${device.tablet} {
    font-size: 36px;
  }
`;

// Section covers the entire width and height
export const SectionV2 = styled.section`
  align-items: ${(props) => props.alignItems || "center"};
  align-self: ${(props) => props.alignSelf || "stretch"};
  background: ${(props) =>
    props.gradient
      ? props.gradient
      : props.background
      ? props.background
      : "transparent" || "transparent"};
  display: ${(props) => props.display || "flex"};
  flex: ${(props) => props.flex || "1"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "center"};
  width: ${(props) => props.width || "auto"};
  margin: ${(props) => props.margin || "0px"};
  min-height: ${(props) => props.minHeight || "auto"};
  overflow: ${(props) => props.overflow || "initial"};
  padding: ${(props) => props.padding || "0px"};
  position: ${(props) => props.position || "relative"};
`;

export const ContentV2 = styled.div`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexDirection || "column"};
  position: ${(props) => props.position || "relative"};

  flex: ${(props) => props.flex || "1"};
  align-self: ${(props) => props.alignSelf || "stretch"};
  max-width: ${(props) => props.maxWidth || "1213px"};
  // max-width: 1140px;
  display: flex;
  justify-content: ${(props) => props.justifyContent || "center"};
  box-sizing: ${(props) => props.boxSizing || "content-box"};
  margin: ${(props) => props.margin || "initial"};
  padding: ${(props) =>
    props.padding || GLOBALS.ADJUSTMENTS.MARGIN.DEFAULT.DESKTOP};

  @media ${device.laptop} {
    padding: ${(props) =>
      props.padding || GLOBALS.ADJUSTMENTS.MARGIN.DEFAULT.TABLET};
  }

  @media ${device.mobileM} {
    padding: ${(props) =>
      props.padding || GLOBALS.ADJUSTMENTS.MARGIN.DEFAULT.MOBILE};
  }
`;

export const ItemBreakV2 = styled.div`
  flex-basis: 100%;
`;

export const ItemHV2 = styled.div`
  align-items: ${(props) => props.alignItems || "center"};
  align-self: ${(props) => props.alignSelf || "stretch"};
  background: ${(props) =>
    props.gradient
      ? props.gradient
      : props.background
      ? props.background
      : "transparent" || "transparent"};
  border: ${(props) => props.border || "initial"};
  border-radius: ${(props) => props.borderRadius || "initial"};
  bottom: ${(props) => props.bottom || "auto"};
  box-shadow: ${(props) => props.boxShadow || "initial"};
  display: ${(props) => props.display || "flex"};
  filter: ${(props) => props.filter || "initial"};
  flex: ${(props) => props.flex || "1"};
  flex-basis: ${(props) => props.flexBasis || "auto"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  flex-wrap: ${(props) => props.flexWrap || "wrap"};
  gap: ${(props) => props.gap || "normal"};
  font-size: ${(props) => props.fontSize || "initial"};
  height: ${(props) => props.height || "auto"};
  min-height: ${(props) => props.minHeight || "initial"};
  justify-content: ${(props) => props.justifyContent || "center"};
  left: ${(props) => props.left || "auto"};
  margin: ${(props) => props.margin || "0px"};
  max-width: ${(props) => props.maxWidth || "initial"};
  min-width: ${(props) => props.minWidth || "auto"};
  overflow: ${(props) => props.overflow || "initial"};
  padding: ${(props) => props.padding || "0px"};
  position: ${(props) => props.position || "relative"};
  right: ${(props) => props.right || "auto"};
  text-align: ${(props) => props.textAlign || "initial"};
  top: ${(props) => props.top || "auto"};
  width: ${(props) => props.width || "auto"};
  z-index: ${(props) => props.zIndex || "auto"};

  &:hover & {
    filter: ${(props) =>
      (props.filterHover
        ? props.filterHover
        : props.hover
        ? props.hover
        : "none") || "none"};
  }

  ${ItemBreakV2} {
    width: 0;
  }
`;

export const ItemVV2 = styled(ItemHV2)`
  flex: ${(props) => props.flex || "1"};
  flex-direction: ${(props) => props.flexDirection || "column"};

  ${ItemBreakV2} {
    height: 0;
    width: auto;
  }
`;

export const H1V2 = styled.h1`
  color: ${(props) => props.color || GLOBALS.COLORS.FONT_LIGHT};
  font-weight: ${(props) => props.fontWeight || 700};
  font-size: ${(props) =>
    props.fontSize || GLOBALS.ADJUSTMENTS.FONT.PRIMARY_HEADING.DESKTOP};
  text-transform: ${(props) => props.textTransform || "inherit"};
  margin: ${(props) => props.margin || "0px"};
  padding: ${(props) => props.padding || "0px"};
  letter-spacing: ${(props) => props.letterSpacing || "-0.03em"};
  font-family: ${(props) =>
    props.fontFamily || "Strawford, Helvetica, sans-serif"};
  text-align: ${(props) => props.textAlign || "inherit"};
  line-height: ${(props) => props.lineHeight || "110%"};
  text-shadow: none;
  z-index: ${(props) => props.zIndex || "auto"};

  @media ${device.laptop} {
    font-size: ${(props) =>
      props.fontSize || GLOBALS.ADJUSTMENTS.FONT.PRIMARY_HEADING.TABLET};
  }

  @media ${device.mobileM} {
    font-size: ${(props) =>
      props.fontSize || GLOBALS.ADJUSTMENTS.FONT.PRIMARY_HEADING.MOBILE};
  }
`;

export const H2V2 = styled.h2`
  color: ${(props) => props.color || GLOBALS.COLORS.FONT_DARK};
  font-weight: ${(props) => props.fontWeight || 700};
  text-shadow: none;
  font-size: ${(props) => props.fontSize || GLOBALS.ADJUSTMENTS.FONT.HEADING};
  text-transform: ${(props) => props.textTransform || "inherit"};
  margin: ${(props) => props.margin || "0px"};
  padding: ${(props) => props.padding || "0px"};
  letter-spacing: ${(props) => props.letterSpacing || "-0.02em"};
  font-family: ${(props) =>
    props.fontFamily || "Strawford, Helvetica, sans-serif"};
  text-align: ${(props) => props.textAlign || "inherit"};
  line-height: ${(props) => props.lineHeight || "110%"};
  text-shadow: none;
  z-index: ${(props) => props.zIndex || "auto"};

  @media ${device.laptop} {
    font-size: ${(props) =>
      props.fontSize || GLOBALS.ADJUSTMENTS.FONT.HEADING.TABLET};
  }

  @media ${device.mobileM} {
    font-size: ${(props) =>
      props.fontSize || GLOBALS.ADJUSTMENTS.FONT.HEADING.MOBILE};
  }
`;

export const H3V2 = styled.h3`
  color: ${(props) => props.color || GLOBALS.COLORS.FONT_DARK};
  font-weight: ${(props) => props.fontWeight || 700};
  text-shadow: none;
  font-size: ${(props) => props.fontSize || GLOBALS.ADJUSTMENTS.FONT.HEADING};
  text-transform: ${(props) => props.textTransform || "inherit"};
  margin: ${(props) => props.margin || "0px"};
  padding: ${(props) => props.padding || "0px"};
  letter-spacing: ${(props) => props.letterSpacing || "-0.02em"};
  font-family: ${(props) =>
    props.fontFamily || "Strawford, Helvetica, sans-serif"};
  text-align: ${(props) => props.textAlign || "inherit"};
  line-height: ${(props) => props.lineHeight || "110%"};
  text-shadow: none;
  z-index: ${(props) => props.zIndex || "auto"};

  @media ${device.laptop} {
    font-size: ${(props) =>
      props.fontSize || GLOBALS.ADJUSTMENTS.FONT.HEADING.TABLET};
  }

  @media ${device.mobileM} {
    font-size: ${(props) =>
      props.fontSize || GLOBALS.ADJUSTMENTS.FONT.HEADING.MOBILE};
  }
`;

export const ImageV2 = styled.img`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  display: ${(props) => props.display || "flex"};
  border-radius: ${(props) => props.borderRadius || 'initial'};
`;

export const Image1V2 = styled.img`
  width: 125%;
  height: auto;
  display: flex;
`;

export const SpanV2 = styled.span`
  flex: ${(props) => props.flex || "initial"};
  align-self: ${(props) => props.alignSelf || "auto"};
  color: ${(props) => props.color || "inherit"};
  background: ${(props) => props.background || "transparent"};
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) =>
    props.fontSize || GLOBALS.ADJUSTMENTS.FONT.NORMAL_TEXT.DESKTOP};
  text-transform: ${(props) => props.textTransform || "inherit"};
  margin: ${(props) => props.margin || "0px"};
  padding: ${(props) => props.padding || "0px"};
  letter-spacing: ${(props) => props.letterSpacing || "-0.03em"};
  text-align: ${(props) => props.textAlign || "initial"};
  line-height: ${(props) => props.lineHeight || "142%"};
  position: ${(props) => props.position || "initial"};
  right: ${(props) => props.right || "auto"};
  left: ${(props) => props.left || "auto"};
  bottom: ${(props) => props.bottom || "auto"};
  top: ${(props) => props.top || "auto"};
  z-index: ${(props) => props.zIndex || "auto"};

  @media ${device.laptop} {
    font-size: ${(props) =>
      props.fontSize || GLOBALS.ADJUSTMENTS.FONT.NORMAL_TEXT.TABLET};
  }

  @media ${device.mobileM} {
    font-size: ${(props) =>
      props.fontSize || GLOBALS.ADJUSTMENTS.FONT.NORMAL_TEXT.MOBILE};
  }
`;

export const ButtonV2 = styled.button`
  display: ${(props) => props.display || "initial"};
  line-height: ${(props) => props.lineHeight || "26px"};
  flex: ${(props) => props.flex || "initial"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-self: ${(props) => props.alignSelf || "auto"};
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || "inherit"};
  color: ${(props) => props.color || "#fff"};
  background: ${(props) => props.background || GLOBALS.COLORS.BG_DARK};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "14px 32px"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) =>
    props.borderRadius || GLOBALS.ADJUSTMENTS.RADIUS.SMALL};
  position: ${(props) => props.position || "relative"};
  text-decoration: ${(props) => props.textDecoration || "none"};
  overflow: ${(props) => props.overflow || "hidden"};
  z-index: ${(props) => props.zIndex || "3"};
  pointer: ${(props) => props.pointer || "hand"};
  cursor: ${(props) => props.cursor || "pointer"};
  font-family: ${(props) =>
    props.fontFamily || "Strawford, Helvetica, sans-serif"};

  @media ${device.laptop} {
    font-size: ${(props) =>
      props.fontSize || GLOBALS.ADJUSTMENTS.FONT.NORMAL_TEXT.TABLET};
  }

  @media ${device.mobileM} {
    font-size: ${(props) =>
      props.fontSize || GLOBALS.ADJUSTMENTS.FONT.NORMAL_TEXT.MOBILE};
  }

  &:before {
    background: ${(props) =>
      props.hover || (props.background ? props.background : "transparent")};
    bottom: 0;
    content: "";
    display: none;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  &:after {
    background: ${(props) => props.hoverBackground || "#000"};
    bottom: 0;
    content: "";
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  &:hover {
    border: ${(props) => props.hoverBorder || "inherit"};

    & svg > path {
      stroke: ${(props) => props.hoverSVGPathStroke || "auto"};
    }
  }

  &:hover:before {
    display: block;
  }

  &:hover:after {
    opacity: 0.08;
  }
  &:active:after {
    opacity: 0.15;
  }

  & > div {
    display: flex;
  }
`;

export const Atag = styled.a`
  display: ${(props) => props.display || "initial"};
  line-height: ${(props) => props.lineHeight || "26px"};
  flex: ${(props) => props.flex || "initial"};
  align-self: ${(props) => props.alignSelf || "auto"};
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
  font-weight: ${(props) => props.fontWeight || 500};
  font-size: ${(props) => props.fontSize || "inherit"};
  color: ${(props) => props.color || "#fff"} !important;
  background: ${(props) => props.background || GLOBALS.COLORS.BG_DARK};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "14px 32px"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) =>
    props.borderRadius || GLOBALS.ADJUSTMENTS.RADIUS.SMALL};
  position: ${(props) => props.position || "relative"};
  text-decoration: ${(props) => props.textDecoration || "none"};
  overflow: ${(props) => props.overflow || "hidden"};
  z-index: ${(props) => props.zIndex || "3"};
  pointer: ${(props) => props.pointer || "hand"};
  cursor: ${(props) => props.cursor || "pointer"};

  @media ${device.laptop} {
    font-size: ${(props) =>
      props.fontSize || GLOBALS.ADJUSTMENTS.FONT.NORMAL_TEXT.TABLET};
  }

  @media ${device.mobileM} {
    font-size: ${(props) =>
      props.fontSize || GLOBALS.ADJUSTMENTS.FONT.NORMAL_TEXT.MOBILE};
  }

  &:before {
    background: ${(props) =>
      props.hover || (props.background ? props.background : "transparent")};
    bottom: 0;
    content: "";
    display: none;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    border-radius: inherit;
  }

  &:after {
    background: ${(props) => props.hoverBackground || "#000"};
    bottom: 0;
    content: "";
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    border-radius: inherit;
  }

  &:hover:before {
    display: block;
  }

  &:hover:after {
    opacity: 0.08;
  }
  &:active:after {
    opacity: 0.15;
  }

  & > div {
    display: flex;
  }

  & .anchorSVGlink {
    width: 1em;
    height: 1em;
    margin-left: 3px;
  }
`;

export const PV2 = styled.p`
  flex: ${(props) => props.flex || "initial"};
  align-self: ${(props) => props.alignSelf || "auto"};
  color: ${(props) => props.color || "#000"};
  background: ${(props) => props.background || "transparent"};
  font-weight: ${(props) => props.fontWeight || 300};
  font-size: ${(props) => props.fontSize || "inherit"};
  text-transform: ${(props) => props.textTransform || "inherit"};
  margin: ${(props) => props.margin || "20px 0px"};
  padding: ${(props) => props.padding || "0px"};
  letter-spacing: ${(props) => props.letterSpacing || "inherit"};
  text-align: ${(props) => props.textAlign || "initial"};
`;

export const LinkToV2 = styled(Link)`
  font-family: ${(props) => props.fontFamily || "inherit"};
  line-height: ${(props) => props.lineHeight || "inherit"};
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  flex: ${(props) => props.flex || "initial"};
  align-self: ${(props) => props.alignSelf || "auto"};
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || "inherit"};
  color: ${(props) => props.color || "#fff"};
  background: ${(props) => props.background || "transparent"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "10px 15px"};
  letter-spacing: ${(props) => props.letterSpacing || "0.2em"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.borderRadius || "0px"};
  width: ${(props) => props.width || "initial"};

  position: relative;
  text-decoration: none;
  overflow: ${(props) => props.overflow || "hidden"};
  z-index: 3;

  filter: ${(props) => props.filter || "none"};

  cursor: ${(props) => (props.disabled ? "none" : "pointer")};

  &:hover & {
    filter: ${(props) =>
      (props.filterHover
        ? props.filterHover
        : props.hover
        ? props.hover
        : "none") || "none"};
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) =>
      props.hover || (props.background ? props.background : "transparent")};
    display: none;
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) => props.hoverBackground || "#000"};
    opacity: 0;
    z-index: -1;
  }

  &:hover:before {
    display: block;
  }

  &:hover:after {
    opacity: 0.08;
  }
  &:active:after {
    opacity: 0.15;
  }

  & .anchorSVGlink {
    width: 1em;
    height: 1em;
    margin-left: 3px;
  }
`;

export const BV2 = styled.span`
  color: ${(props) => props.color || "#000"};
  font-weight: ${(props) => props.fontWeight || "bold"};
`;

export const ULV2 = styled.ul``;

export const OLV2 = styled.ol``;

export const LIV2 = styled.li`
  margin: 10px 0px;
`;

// Docusaurus Specific
// Focus Anchor
export const AFocus = styled.a`
  color: #fff;
  background: #dd44b9;
  font-size: 15px;
  padding: 6px 12px 6px 8px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;

  &:before {
    content: "💡 ";
    position: relative;
  }

  &:hover {
    color: #000;
  }
`;

// Modal Container and Item - Small
export const ModalContainer = styled(ItemHV2)`
  align-items: center;
  gap: 26px;
  justify-content: flex-start;
  margin-bottom: var(--ifm-leading);
`;

export const ModalInner = styled(ButtonV2)`
  border: 1px solid #d9d9d9;
  border-radius: 16px;
  padding: 12px 16px;
  background: transparent;
  align-self: center;
  justify-content: center;
  display: flex;
  gap: 10px;

  & img {
    height: 32px;
    width: auto;
  }

  & span {
    display: flex;
    font-weight: 500;
    color: initial;
    align-self: center;
    align-items: center;
    text-align: center;
    margin: 0px 4px 0px 4px;
    justify-content: center;

    & svg {
      margin-left: 5px;
    }
  }

  &:hover {
    border: 1px solid #d53a94;
    background: transparent;

    & svg > path {
      stroke: #d53a94;
    }
  }

  &:hover:after {
    background: transparent;
  }
`;

export const ModalSmall = styled(ModalInner)``;

export const ModalMid = styled(ModalInner)`
  gap: 20px;
  padding: 30px 10px;
  justify-content: space-between;

  & img {
    height: 48px;
  }
`;

export const ModalMidEqual = styled(ModalMid)`
  min-width: 140px;
  align-self: stretch;
  justify-content: space-between;
  flex: 1;
`;

export const ModalWrapper = styled(ItemHV2)`
  gap: 5px;
  align-items: center;
  justify-content: center;
`;

export const SubHeader = styled.div`
  color: #6b6b6b;
  font-size: 25px;
  font-weight: bold;
  line-height: 34px;
  margin-bottom: 10px;
`;

export const ImageText = styled.div`
  color: #6b6b6b;
  text-align: center;
  font-size: 14px;
  margin-bottom: 20px;
`;
