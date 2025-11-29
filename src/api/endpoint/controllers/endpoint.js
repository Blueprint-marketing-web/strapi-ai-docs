'use strict';

/**
 * endpoint controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::endpoint.endpoint');
