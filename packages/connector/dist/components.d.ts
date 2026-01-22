import type { FastifyInstance } from 'fastify';
import type { Components } from './types.js';
/**
 * Helper function to remove x-extensions from the schema
 * @param obj Schema object
 * @returns object without x-extensions
 */
export declare const removeXtensions: (obj: unknown) => void;
/**
 * Helper function to remove x-extensions from the schema
 * @param obj Schema object
 * @returns object where if $ref starts with #/ that prefix is removed
 */
export declare const removeRefPrefix: (obj: unknown) => void;
/**
 * Function registering components (schema) to the fastify instance
 * @param fastify Fastify instance
 * @param components Components object from the OpenAPI specification
 */
export declare const registerComponents: (fastify: FastifyInstance, components?: Components) => void;
