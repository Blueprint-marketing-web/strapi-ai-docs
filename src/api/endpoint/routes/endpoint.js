'use strict';

/**
 * endpoint router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::endpoint.endpoint');
