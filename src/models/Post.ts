import mongoose from 'mongoose';
import { IPost } from '../interfaces/post';

const PostSchema = new mongoose.Schema<IPost>({
  title: {
    type: String,
    required: [true, 'title is required'],
    unique: true,
    trim: true,
    minlength: [3, 'title must be greater than 3 characters'],
    maxlength: [50, 'title cannot be more than 50 chars'],
  },

  description: {
    type: String,
    trim: true,
    minlength: [100, 'description must be greater than 100 chars'],
    maxlength: [500, 'description cannot be more than 500 chars'],
  },
  author: {
    type: String,
    required: [true, 'author is required'],
  },
  hide: {
    type: Boolean,
    required: [true, 'hide is required'],
    default: false,
  },
});

export default mongoose.model('Post', PostSchema);
