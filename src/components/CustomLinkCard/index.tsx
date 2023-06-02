import React from 'react'

import '../../css/custom.css'

const CustomLinkCard = (props) => {
    const { link, text } = props;
    return (
        <a href={ link }>
            <div style={{
                margin: '1.5rem 0',
                backgroundColor: 'transparent',
                borderRadius: '1rem',
                border: `1px solid var(--ifm-custom-base)`,
                padding: '1.5rem',
                fontSize: '1.25rem',
            }}>
                📄 { text }
            </div>
        </a>
    )
}

export default CustomLinkCard;
