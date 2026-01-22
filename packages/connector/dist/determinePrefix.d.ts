import type { FastifyInstance } from 'fastify';
import type { Options, ServerObject } from './types.js';
export declare const determinePrefix: (instance: FastifyInstance, settings: Options["settings"], servers?: ServerObject[]) => string | undefined;
