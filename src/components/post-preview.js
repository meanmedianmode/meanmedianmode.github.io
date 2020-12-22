import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import TitleLink from './title-link';

export default ({ post: { title, excerpt, slug, category, image } }) => {
  return (
    <article
      css={css`
        margin-top: 0;
        padding-bottom: 1rem;
      `}
    >
      <Link
        to={slug}
        css={css`
          margin: 1rem 1rem 0 0;
          width: 100px;
        `}
      >
        <Image
          fluid={image.sharp.fluid}
          css={css`
            border: 1px solid lightgray;
            * {
              margin-top: 0;
            }
          `}
          alt={title}
        />
      </Link>
      <div
        css={css`
          text-align: center;
        `}
      >
        <h5
          css={css`
            color: #f42771;
            text-transform: uppercase;
            * {
              margin-top: 0;
            }
          `}
        >
          {category}
        </h5>
        <TitleLink to={slug}>{title}</TitleLink>
      </div>
    </article>
  );
};
