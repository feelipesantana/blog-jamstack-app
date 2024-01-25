import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksHighlight extends Schema.Component {
  collectionName: 'components_blocks_highlights';
  info: {
    displayName: 'highlight';
    description: '';
    icon: 'sun';
  };
  attributes: {
    posts: Attribute.Component<'blog.post', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        max: 2;
      }>;
    teste: Attribute.String;
  };
}

export interface BlocksLive extends Schema.Component {
  collectionName: 'components_blocks_lives';
  info: {
    displayName: 'live_container';
    icon: 'lightbulb';
    description: '';
  };
  attributes: {
    posts: Attribute.Component<'blog.post', true>;
  };
}

export interface BlocksOnlineContainer extends Schema.Component {
  collectionName: 'components_blocks_online_containers';
  info: {
    displayName: 'online_container';
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
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.highlight': BlocksHighlight;
      'blocks.live': BlocksLive;
      'blocks.online-container': BlocksOnlineContainer;
      'blog.link': BlogLink;
      'blog.post': BlogPost;
    }
  }
}
