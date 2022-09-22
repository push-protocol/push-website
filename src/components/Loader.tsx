import React from 'react';
import styled from 'styled-components';


function Loader() {
    return (
        <LoadingContainer>
            loading ...
        </LoadingContainer>
    );
}


const LoadingContainer = styled.div`
    z-index: 9999999;
    background: #FFFFFF;
    color: green;
    font-size: 72px;
    opacity: 0.7;

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Loader;