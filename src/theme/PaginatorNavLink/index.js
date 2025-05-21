/* eslint-disable no-unsafe-optional-chaining */
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
// import Link from "@docusaurus/Link";
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function PaginatorNavLink(props) {
  const { permalink, title, subLabel, isNext } = props;
  const history = useHistory();
  if ((history?.location?.pathname).includes('blog')) {
    return (
      <NavLink onClick={() => history.push(permalink)}>
        {subLabel && <div>{subLabel}</div>}
        <div>{title}</div>
      </NavLink>
    );
  } else
    return (
      <Link
        className={clsx(
          'pagination-nav__link',
          isNext ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'
        )}
        to={permalink}
      >
        {subLabel && <div className='pagination-nav__sublabel'>{subLabel}</div>}
        <div className='pagination-nav__label'>{title}</div>
      </Link>
    );
}

const NavLink = styled.div`
  text-decoration: none;
  color: var(--ifm-color-primary-blog);
  padding: 10px 20px;
  border-radius: 62px;
  font-size: 15px;
  font-weight: 500;

  font-family: Inter sans-serif;
  border: 1px solid #bac4d6;
  width: fit-content;
  cursor: pointer;
`;
