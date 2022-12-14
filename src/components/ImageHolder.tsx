// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
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
  const { src, srcSet, alt, ...restProps } = props || {};

  return (
    <img
      src={getPublicImagePath(src)}
      srcSet={getSrcSet(srcSet)}
      alt={alt}
      {...restProps}
    />
  );
}

export default ImageHolder;