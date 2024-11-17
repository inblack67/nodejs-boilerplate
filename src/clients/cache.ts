import Redis from 'ioredis';
import logger from 'loglevel';

export const connectCache = () => {
  const redisClient = new Redis({ port: +process.env.REDIS_PORT!! });
  logger.debug('Cache Connected');
  return redisClient;
};
