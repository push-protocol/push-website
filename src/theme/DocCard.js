/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import {
  // findFirstCategoryLink,
  useDocById,
} from '@docusaurus/theme-common/internal';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
function CardContainer({ href, children }) {
  return (
    <Link
      href={useBaseUrl(href)}
      className={clsx('card padding--lg', styles.cardContainer)}
    >
      {children}
    </Link>
  );
}
function CardLayout({ href, icon, title, description }) {
  return (
    <CardContainer href={useBaseUrl(href)}>
      <h2 className={clsx('text--truncate', styles.cardTitle)} title={title}>
        {icon} {title}
      </h2>
      {description && (
        <p
          className={clsx('text--truncate', styles.cardDescription)}
          title={description}
        >
          {description}
        </p>
      )}
    </CardContainer>
  );
}
function CardCategory({ item }) {
  return (
    <CardLayout
      icon='🗃️'
      title={item.label}
      description={
        item.description ??
        translate(
          {
            message: '{count} items',
            id: 'theme.docs.DocCard.categoryDescription',
            description:
              'The default description for a category card in the generated index about how many items this category includes',
          },
          { count: item.items.length }
        )
      }
    />
  );
}
function CardLink({ item }) {
  const doc = useDocById(item.docId ?? undefined);
  return (
    <CardLayout
      href={item.href}
      icon={''}
      title={item.label}
      description={item.description ?? doc?.description}
    />
  );
}
export default function DocCard({ item }) {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
