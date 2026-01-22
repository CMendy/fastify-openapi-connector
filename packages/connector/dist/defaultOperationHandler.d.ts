import type { FastifyReply, FastifyRequest } from 'fastify';
/**
 * Default handler for operations that do not have a handler
 * @param req Fastify request
 * @param rep Fastify reply
 */
export declare const defaultHandler: (req: FastifyRequest, rep: FastifyReply) => Promise<void>;
