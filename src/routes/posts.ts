import express from 'express';
import {
  getPosts,
  getPostById,
  createPost,
  deletePostById
} from '../controllers/posts';

const router = express.Router();

router.route('/').get(getPosts).post(createPost);

router.route('/:id').get(getPostById).delete(deletePostById);

export default router;
