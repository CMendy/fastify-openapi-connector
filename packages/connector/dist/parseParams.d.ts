import type { ParsedParameter, ReferenceObject, SchemaParameter, SchemaParametersIn } from './types.js';
/**
 * Helper function to parse parameters from the OpenAPI specification
 * @param data OAS parameters object
 * @param params Existing parameters to extend
 * @returns Parameters parameters object
 */
export declare const parseParams: (data: (SchemaParameter | ReferenceObject)[], schemaParameters: Record<string, SchemaParameter>, params?: Record<SchemaParametersIn, ParsedParameter | undefined>) => Record<SchemaParametersIn, ParsedParameter | undefined>;
