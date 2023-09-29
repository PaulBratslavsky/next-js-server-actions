import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutFeatures extends Schema.Component {
  collectionName: 'components_layout_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface LayoutHero extends Schema.Component {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.features': LayoutFeatures;
      'layout.hero': LayoutHero;
    }
  }
}
