import type { Schema, Struct } from '@strapi/strapi';

export interface UiCodeBlock extends Struct.ComponentSchema {
  collectionName: 'components_ui_code_blocks';
  info: {
    displayName: 'Code Block';
  };
  attributes: {
    code: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface UiEndpointSection extends Struct.ComponentSchema {
  collectionName: 'components_ui_endpoint_sections';
  info: {
    displayName: 'Endpoint Section';
    icon: 'code';
  };
  attributes: {
    code: Schema.Attribute.Component<'ui.code-block', true>;
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ui.code-block': UiCodeBlock;
      'ui.endpoint-section': UiEndpointSection;
    }
  }
}
