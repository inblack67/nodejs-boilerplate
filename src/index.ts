import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import logger from 'loglevel';
import { connectDb } from './clients/db';
import { connectCache } from './clients/cache';
import postsRouter from './routes/posts';

const main = async () => 
  
  
  
  {
  logger.setLevel('DEBUG');
  dotenv.config({ path: '.env' });

  await connectDb();
  connectCache();

        const app = express();

  // middlewares
  app.use(express.json());
  app.use(morgan('tiny'));

  // routes
  app.use('/api/v1/posts', postsRouter);

  app.listen(process.env.PORT as string, () => {
    logger.debug(`Server started on port ${process.env.PORT}`);
  });
};

main().catch((err) => console.error('Server crashed', err));
