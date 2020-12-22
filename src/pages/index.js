import React from 'react';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import Hero from '../components/hero';
import usePosts from '../hooks/use-posts';
import { css } from '@emotion/react';

export default () => {
  const posts = usePosts();
  return (
    <>
      <Hero />
      <Layout>
        <div
          css={css`
            margin: 20px auto;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 1rem;
          `}
        >
          {posts.map(post => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </div>
      </Layout>
    </>
  );
};
