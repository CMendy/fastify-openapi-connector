import { removeRefPrefix, removeXtensions } from './components.js';
const cleanSchema = (value) => {
    const filteredValue = structuredClone(value);
    removeXtensions(filteredValue);
    removeRefPrefix(filteredValue);
    return filteredValue;
};
/**
 * Helper function to create route schema from the OpenAPI specification
 * @param params OAS parameters object
 * @param contentTypes Priority list of content types we try to set for validation of bodySchema
 * @param requestBody OAS requestBody object
 * @param responses OAS responses object
 * @returns Fastify schema object
 */
export const createRouteSchema = (params, contentTypes, requestBody, responses, validateResponse) => {
    let bodySchema;
    // https://fastify.dev/docs/latest/Reference/Validation-and-Serialization/#validation-and-serialization
    // By default we set 'application/json', but can be overriden by user. For example 'application/scim+json' might be needed.
    for (const contentType of contentTypes) {
        // biome-ignore lint/suspicious/noExplicitAny: We not sure what we have
        bodySchema ?? (bodySchema = requestBody?.content?.[contentType]?.schema);
    }
    // Fastify have stupid validation where if we add the property as undefine it will show warning
    const schema = {};
    if (bodySchema) {
        schema.body = cleanSchema(bodySchema);
    }
    if (params.query) {
        schema.querystring = cleanSchema(params.query);
    }
    if (params.path) {
        schema.params = cleanSchema(params.path);
    }
    if (params.header) {
        schema.headers = cleanSchema(params.header);
    }
    if (validateResponse === true && responses) {
        schema.response = cleanSchema(responses);
    }
    return schema;
};
