import type { FastifySchema } from 'fastify';
import type { ParsedParameter, SchemaParametersIn, SpecResponse } from './types.js';
/**
 * Helper function to create route schema from the OpenAPI specification
 * @param params OAS parameters object
 * @param contentTypes Priority list of content types we try to set for validation of bodySchema
 * @param requestBody OAS requestBody object
 * @param responses OAS responses object
 * @returns Fastify schema object
 */
export declare const createRouteSchema: (params: Record<SchemaParametersIn, ParsedParameter | undefined>, contentTypes: string[], requestBody?: unknown, responses?: SpecResponse, validateResponse?: boolean) => FastifySchema;
