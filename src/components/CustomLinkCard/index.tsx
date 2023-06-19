import React from "react";

import "../../css/custom.css";

const CustomLinkCard = (props) => {
  const { link, text, target, emoji } = props;
  return (
    <div
      style={{
        margin: "1.5rem 0",
        backgroundColor: "transparent",
        borderRadius: "0.5rem",
        border: `1px solid var(--ifm-custom-base)`,
        padding: "1.5rem",
        fontSize: "1.25rem",
        width: "100%",
        display: "flex",
        cursor:'pointer',
      }}
    >
      {emoji ? emoji : "📄" }
      <a href={link} target={target} style={{marginLeft:'0.8rem'}}>{text}</a>
    </div>
  );
};

export default CustomLinkCard;
