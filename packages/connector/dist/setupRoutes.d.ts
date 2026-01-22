import type { FastifyInstance } from 'fastify';
import type { Components, OperationHandlers, OperationHandlersUntyped, PathsMap, SecurityHandlers, SecuritySpecification, SpecResponse } from './types.js';
export declare const validateSecurityObject: (security: unknown) => security is SecuritySpecification;
export declare const fixEmptyResponses: (responses?: SpecResponse) => SpecResponse | undefined;
export declare const setupRoutes: (fastify: FastifyInstance, routesInfo: {
    operationHandlers: OperationHandlersUntyped | OperationHandlers;
    paths: PathsMap;
    components: Components;
    globalSecurity?: SecuritySpecification;
    securityHandlers?: SecurityHandlers;
}, settings: {
    isWebhook: boolean;
    useXSecurity?: boolean;
    validateResponse?: boolean;
    contentTypes: string[];
}) => void;
