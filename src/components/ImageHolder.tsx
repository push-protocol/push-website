// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// React + Web3 Essentials
import React from 'react';

function getPublicImagePath(relativePath) {
  return process.env.PUBLIC_URL + relativePath;
}

function getSrcSet(srcSet) {
  return srcSet.split(',')
    .map(srcSetItem => srcSetItem.trim())
    .map(srcSetItem => getPublicImagePath(srcSetItem))
    .join(', ');
}

function ImageHolder(props) {
  const { srcWebp, fallback ,src, srcSet, alt, ...restProps } = props || {};

  return (
    <picture> 
    <source
        srcSet={srcWebp}
        type="image/webp"
      />
      <source
        srcSet={fallback}
        type="image/jpeg"
      />
       <img
      src={getPublicImagePath(src)}
      srcSet={getSrcSet(srcSet)}
      alt={alt}
      {...restProps}
    />
     </picture> 
  );
}

export default React.memo(ImageHolder);