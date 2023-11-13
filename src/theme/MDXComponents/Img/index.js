/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { useHistory } from "react-router-dom";

function transformImgClassName(className) {
  return clsx(className, styles.img);
}
export default function MDXImg(props) {
  const history = useHistory();
  const isBlog = (history?.location?.pathname).includes("blog");

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      loading="lazy"
      {...props}
      style={{ aspectRatio: isBlog && "16/9", objectFit: isBlog && "cover" }}
      className={transformImgClassName(props.className)}
    />
  );
}
