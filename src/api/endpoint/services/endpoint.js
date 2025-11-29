'use strict';

/**
 * endpoint service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::endpoint.endpoint');
