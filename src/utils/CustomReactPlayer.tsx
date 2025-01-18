/* eslint-disable @typescript-eslint/ban-types */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';

import styled from 'styled-components';
import ReactPlayer from 'react-player';

type CustomReactPlayerProps = {
  url: string;
  playing?: boolean;
  width?: string;
  height?: string;
  loop?: boolean;
  muted?: boolean;
  className?: string;
  link?: string;
  alt?: string;
  title?: string;
};

const CustomReactPlayer: React.FC<CustomReactPlayerProps> = ({
  url,
  width = '100%',
  height = '100%',
  loop = true,
  muted = true,
  className,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
  };
  return (
    <>
      <VideoWrapper
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ReactPlayer
          url={url}
          playing={isPlaying}
          loop={loop}
          muted={muted}
          width={width}
          height={height}
          className={className}
          config={{
            file: {
              attributes: {
                controlsList: 'nofullscreen',
              },
            },
          }}
        />
      </VideoWrapper>
    </>
  );
};

export default CustomReactPlayer;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`;
