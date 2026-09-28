import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {User} from './features/auth/auth.model.js';
import { Job } from './features/career/career.model.js';
import {Project} from './features/portfolio/portfolio.model.js';

dotenv.config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('[INFO]: [SEED]: Database connected');

    // 1. Clear existing data
    await User.deleteMany({});
    await Job.deleteMany({});
    await Project.deleteMany({});
    console.log('[INFO]: [SEED]: Cleared existing database records');

    // 2. Create Admin User next
    // Use User.create() directly rather than calling a Controller or middleware
    await User.create({
      name: 'Admin User',
      email: 'admin@tierstack.com',
      password: 'Password123!', // Ensure your User model schema handles bcrypt hashing in a pre('save') hook
      role: 'admin',
    });

    // 3. Create Sample Jobs
    await Job.create([
      {
        title: 'Senior Full Stack Developer',
        department: 'Engineering',
        location: 'Remote',
        type: 'Full-time',
        description: 'Building modern web applications.',
        requirements: ['Node.js', 'React', 'MongoDB'],
      },
      {
        title: 'UI/UX Product Designer',
        department: 'Design',
        location: 'Remote',
        type: 'Full-time',
        description: 'Designing intuitive interfaces.',
        requirements: ['Figma', 'User Research'],
      },
    ]);

    // 4. Create Sample Projects
    await Project.create([
      {
        title: 'E-Commerce Platform Redesign',
        slug: 'e-commerce-platform-redesign',
        summary: 'Modernizing online retail.',
        description: 'Full stack web platform rebuild.',
        coverImage: 'uploads/sample-ecommerce.png',
        technologies: ['React', 'Node.js', 'MongoDB'],
        isFeatured: true,
        isPublished: true,
      },
    ]);

    console.log('[INFO]: [SEED]: Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('[ERROR]: [SEED ERROR]:', error.message);
    process.exit(1);
  }
};

seedDatabase();