import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksContainerPosts extends Schema.Component {
  collectionName: 'components_blocks_container_posts';
  info: {
    displayName: 'Container Posts';
    icon: 'lightbulb';
    description: '';
  };
  attributes: {
    posts: Attribute.Component<'blog.post', true>;
  };
}

export interface BlocksPrincipalPost extends Schema.Component {
  collectionName: 'components_blocks_principal_post';
  info: {
    displayName: 'Principal Post';
    description: '';
    icon: 'sun';
  };
  attributes: {
    posts: Attribute.Component<'blog.post', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        max: 2;
      }>;
  };
}

export interface BlocksSidePosts extends Schema.Component {
  collectionName: 'components_blocks_side_posts';
  info: {
    displayName: 'Side Posts';
    icon: 'star';
    description: '';
  };
  attributes: {
    posts: Attribute.Component<'blog.post', true>;
  };
}

export interface BlogLink extends Schema.Component {
  collectionName: 'components_blog_links';
  info: {
    displayName: 'link';
    icon: 'link';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
  };
}

export interface BlogPost extends Schema.Component {
  collectionName: 'components_blog_posts';
  info: {
    displayName: 'post';
    icon: 'archive';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    subtitle: Attribute.Text & Attribute.Required;
    article: Attribute.RichText;
    about: Attribute.Enumeration<
      [
        'live',
        'online',
        'pokerstars',
        'vegas',
        'bsop',
        'lifestyle',
        'h2club',
        'wsop',
        'ggpoker'
      ]
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.container_posts': BlocksContainerPosts;
      'blocks.principal_post': BlocksPrincipalPost;
      'blocks.side_posts': BlocksSidePosts;
      'blog.link': BlogLink;
      'blog.post': BlogPost;
    }
  }
}
