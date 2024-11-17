import Joi from 'joi';
import { IPost } from '../interfaces/post';

export const createPostRequestSchema = Joi.object<IPost>({
  title: Joi.string().min(3).max(50).required(),
  description: Joi.string().min(100).max(500).optional(),
  author: Joi.string().required(),
  hide: Joi.boolean().default(false),
});
