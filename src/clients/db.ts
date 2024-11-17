import mongoose from "mongoose";
import logger from "loglevel";

export const connectDb = async () => {
  await mongoose.connect(process.env.DATABASE_URL as string, {
    maxPoolSize: 50, // max connections in the pool
    minPoolSize: 25, // min connections in the pool
    maxIdleTimeMS: 10000, // close connections which are idle after this much time

    waitQueueTimeoutMS: 5000, // wait for this much time for a connection to become available if the pool is full
    socketTimeoutMS: 25000, // timeout if no response from MongoDB server after this much time
    connectTimeoutMS: 10000, // timeout for initial connection after this much time
  });
  logger.debug("Database connected");
};
