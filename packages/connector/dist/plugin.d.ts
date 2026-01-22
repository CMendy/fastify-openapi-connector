import type { FastifyPluginAsync } from 'fastify';
import type { Options } from './types.js';
/**
 * Plugin to connect Fastify with OpenAPI specification
 */
export declare const openApiConnectorPlugin: FastifyPluginAsync<Options>;
