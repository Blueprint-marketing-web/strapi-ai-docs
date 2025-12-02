import type { Schema, Struct } from '@strapi/strapi';

export interface UiAttribute extends Struct.ComponentSchema {
  collectionName: 'components_ui_attributes';
  info: {
    displayName: 'Attribute';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['string', 'number', 'boolean', 'object', 'array', 'array of objects']
    >;
  };
}

export interface UiAttributeSection extends Struct.ComponentSchema {
  collectionName: 'components_ui_attribute_sections';
  info: {
    displayName: 'Attribute Section';
    icon: 'bulletList';
  };
  attributes: {
    attributes: Schema.Attribute.Component<'ui.attribute', true>;
    code: Schema.Attribute.Blocks;
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

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
      'ui.attribute': UiAttribute;
      'ui.attribute-section': UiAttributeSection;
      'ui.code-block': UiCodeBlock;
      'ui.endpoint-section': UiEndpointSection;
    }
  }
}
