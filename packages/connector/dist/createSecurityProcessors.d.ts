import type { FastifyReply, FastifyRequest } from 'fastify';
import type { SecurityHandlers, SecuritySpecification } from './types.js';
/**
 * Create security processors for Fastify
 * @param handlers Security handlers
 * @param securityObject Security object from OAS
 * @returns Fastify middleware if any handler is defined
 */
export declare const createSecurityProcessors: (handlers: SecurityHandlers, securityObject?: SecuritySpecification) => undefined | ((req: FastifyRequest, res: FastifyReply) => Promise<void>);
