import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Project slug is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    client: {
      type: String,
      trim: true,
      default: 'Internal Project',
    },
    summary: {
      type: String,
      required: [true, 'Project summary is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Project detailed description is required'],
    },
    coverImage: {
      type: String,
      required: [true, 'Cover image is required'],
    },
    technologies: [
      {
        type: String,
        trim: true,
      },
    ],
    liveUrl: {
      type: String,
      trim: true,
    },
    githubUrl: {
      type: String,
      trim: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Portfolio = mongoose.model('Portfolio', portfolioSchema);