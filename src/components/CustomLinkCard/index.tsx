import React from "react";

import "../../css/custom.css";

const CustomLinkCard = (props) => {
  const { link, text, target, emoji } = props;
  const [isMouseHovered,setIsMouseHovered]=React.useState(false)
  return (
    <div
    onMouseEnter={()=>setIsMouseHovered(true)}
    onMouseLeave={()=>setIsMouseHovered(false)}
      style={{
        margin: "1.5rem 0",
        backgroundColor: "transparent",
        borderRadius: "0.5rem",
        border: '0.5px solid var(--ifm-custom-base)',
        padding: "0.8rem 1rem",
        fontSize: "1.25rem",
        width: "100%",
        display: "flex",
        alignItems:'center',
        cursor:'pointer',
        transition: 'all .2s ease-in-out',
        boxShadow: `${isMouseHovered?'rgba(0, 0, 0, 0.05) 0px 19px 43px':'none'}`,
        transform: `${isMouseHovered?'translate3d(0px, -1px, 0px)':'none'}`,
        wordBreak: "break-word"
      }}
    >
      {emoji ? emoji : "📄" }
      <a href={link} target={target} style={{marginLeft:'0.8rem', textDecoration:'none', color:`${isMouseHovered ? 'var(--ifm-color-primary)':'var(--ifm-custom-base)'}`}}>{text}</a>
    </div>
  );
};

export default CustomLinkCard;
