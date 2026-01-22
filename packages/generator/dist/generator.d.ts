/// <reference types="node" resolution-mode="require"/>
import path from 'node:path';
/**
 * OAS Paths object
 */
export interface PathsObject {
    [method: string]: any;
}
/**
 * OAS object
 */
export interface OpenAPISpec {
    components?: {
        securitySchemes?: Record<string, unknown>;
    };
    paths?: PathsObject;
    webhooks?: PathsObject;
}
/**
 * Type of function that generates a file
 */
export type TemplateFunction = (imp: string, operationId: string, typesPath: string) => string;
/**
 * Handler info with optional tag for subfolder organization
 */
export interface HandlerInfo {
    operationId: string;
    tag?: string;
}
/**
 * Function to generate handler files
 * @param imp operationId
 * @param typesPath path to types file
 */
export declare const routeTemplateTyped: TemplateFunction;
/**
 * Function to generate untyped handler files
 * @param imp operationId
 * @param typesPath not used
 */
export declare const routeTemplateUntyped: TemplateFunction;
/**
 * Function to generate security files
 * @param name security name
 */
export declare const securityTemplate: (name: string) => string;
/**
 * Function to generate handler files
 * @param args setup arguments
 * @returns operationIds
 */
export declare const parseAndGenerateOperationHandlers: (args: {
    paths: PathsObject;
    filesPath: string;
    typesPath: string;
    typed: boolean;
    importExtension: string;
    usePathTagSubfolders?: boolean;
}) => Promise<HandlerInfo[]>;
/**
 * Function to generate security files
 * @param args setup arguments
 * @returns security hander names
 */
export declare const parseAndGenerateSecurity: (args: {
    security: Record<string, unknown>;
    filesPath: string;
}) => Promise<HandlerInfo[]>;
/**
 * Entry point function that generates the service and handler files
 * @param args Setup arguments
 */
export declare const generate: (args: {
    routesPath?: string;
    servicePath: string;
    spec: OpenAPISpec;
    typesPath: string;
    webhooksPath?: string;
    securityPath?: string;
    schemaFilePath: string;
    typed: boolean;
    overrideTypesFile: boolean;
    importExtension: string;
    usePathTagSubfolders?: boolean;
}) => Promise<void>;
/**
 * Function to generate handler files
 * @param args setup arguments
 */
export declare const generateHandlerFiles: (args: {
    handlers: HandlerInfo[];
    path: string;
    typesPath: string;
    templateFunction: TemplateFunction;
}) => Promise<void>;
/**
 * Function to generate handler imports
 * @param args setup arguments
 * @returns handler imports
 */
export declare const generateHandlerImports: (args: {
    handlers: HandlerInfo[];
    path: string;
    servicePath: string;
    importExtension: string;
}) => string[];
/**
 * Helper interface for sorting handlers
 */
export interface OrganizedHandlers {
    path?: string;
    handlers?: HandlerInfo[];
    exportName: string;
    typeName: string;
    importType: string;
}
/**
 * Sort handlers function, sorting based on path
 * @param a
 * @param b
 * @returns -1/0/1
 */
export declare const handlersSort: (a: OrganizedHandlers, b: OrganizedHandlers) => number;
/**
 * Function to get the relative schema file path from a base path
 * @param basePath Base file path
 * @param schemaPath Schema file path
 * @param importExtension Import extension
 * @returns Relative schema file path
 */
export declare const getRelativeSchemaFilePath: (basePath: string, schemaPath: string, importExtension: string) => string;
/**
 * Generets types file
 * @param typesFilePath Path where to generate
 * @param schemaPath  Path to schema file
 * @param overrideTypesFile Indicates that types file should be overrided if exists
 * @returns
 */
export declare const generateTypesFile: (typesFilePath: string, schemaPath: string, overrideTypesFile: boolean, importExtension: string) => void;
/**
 * Function to generate service file
 * @param args setup arguments
 */
export declare const generateServiceFile: (args: {
    pathHandlers?: HandlerInfo[];
    webhookHandlers?: HandlerInfo[];
    securityHandlers?: HandlerInfo[];
    routesPath?: string;
    webhooksPath?: string;
    securityPath?: string;
    servicePath: string;
    typed: boolean;
    importExtension: string;
    schemaFile: string;
}) => void;
