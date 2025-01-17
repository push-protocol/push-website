/* eslint-disable @typescript-eslint/ban-types */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import ReactPlayer from 'react-player';

type CustomReactPlayerProps = {
  url: string;
  playing: boolean;
  width?: string;
  height?: string;
  loop?: boolean;
  muted?: boolean;
  className?: string;
};

const CustomReactPlayer: React.FC<CustomReactPlayerProps> = ({
  url,
  playing,
  width = '100%',
  height = '100%',
  loop = true,
  muted = true,
  className,
}) => {
  return (
    <ReactPlayer
      url={url}
      playing={playing}
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
  );
};

export default CustomReactPlayer;
