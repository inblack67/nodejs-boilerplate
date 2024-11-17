import { Request, Response } from 'express';
import Post from '../models/Post';
import { createPostRequestSchema } from '../validations/post';
import { IPost } from '../interfaces/post';
import { responseBody } from '../utils';
import { asyncHandler } from '../utils/asyncHandler';

export const createPost = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { error, value } = createPostRequestSchema.validate(req.body);
    if (error) {
      responseBody(res, {
        status: 400,
        success: false,
        message: 'Invalid request body',
        data: error.details
      });
      return;
    }
    const postBody: IPost = value;
    await Post.create(postBody);
    responseBody(res, {
      status: 200,
      success: true,
      message: 'Post created successfully'
    });
  }
);

export const getPosts = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    const posts = await Post.find().limit(10).lean();
    responseBody(res, {
      status: 200,
      success: true,
      data: posts
    });
  }
);

export const getPostById = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const post = await Post.findOne({ _id: req.params.id }).lean();
    responseBody(res, {
      status: 200,
      success: true,
      data: post
    });
  }
);

export const deletePostById = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    await Post.findOneAndDelete({ _id: req.query.id }).lean();
    responseBody(res, {
      status: 200,
      success: true,
      message: 'Post deleted successfully'
    });
  }
);
