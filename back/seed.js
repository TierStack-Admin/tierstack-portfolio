import mongoose from 'mongoose';
import { config } from './config/env.js';
import { User } from './features/auth/auth.model.js';
import { Job } from './features/career/career.model.js';
import { Portfolio } from './features/portfolio/portfolio.model.js';
import { logger } from './utils/logger.js';

const seedData = async () => {
  try {
    // 1. Connect to MongoDB
    await mongoose.connect(config.mongoUri);
    logger.info('[SEED]: Database connected');

    // 2. Clear existing collections
    await User.deleteMany({});
    await Job.deleteMany({});
    await Portfolio.deleteMany({});
    logger.info('[SEED]: Cleared existing database records');

    // 3. Seed Admin User
    const adminUser = await User.create({
      name: 'Admin User',
      email: 'admin@tierstack.com',
      password: 'Password123!', // Will be automatically hashed by User model pre-save hook
      role: 'admin',
    });
    logger.info(`[SEED]: Created Admin user (${adminUser.email})`);

    // 4. Seed Career Job Openings
    const jobs = await Job.insertMany([
      {
        title: 'Senior Full Stack Developer',
        department: 'Engineering',
        location: 'Remote',
        type: 'Full-time',
        description: 'We are seeking a Full Stack Developer experienced with Node.js, Express, React, and MongoDB.',
        requirements: [
          '3+ years of experience with Node.js and React',
          'Proficiency in RESTful API design and MongoDB',
          'Familiarity with monorepos and Git workflows',
        ],
        isActive: true,
      },
      {
        title: 'UI/UX Product Designer',
        department: 'Design',
        location: 'Hybrid',
        type: 'Full-time',
        description: 'Design intuitive dashboard interfaces and responsive client portfolio platforms.',
        requirements: [
          'Strong Figma portfolio demonstrating Web App design',
          'Experience working closely with frontend engineers',
        ],
        isActive: true,
      },
    ]);
    logger.info(`[SEED]: Created ${jobs.length} job postings`);

    // 5. Seed Portfolio Projects
    const projects = await Portfolio.insertMany([
      {
        title: 'E-Commerce Platform Redesign',
        slug: 'e-commerce-platform-redesign',
        client: 'RetailX',
        summary: 'A complete modernization of an online retail experience boosting conversion by 35%.',
        description: 'Rebuilt the legacy storefront using React, Tailwind CSS, and Node.js microservices.',
        coverImage: 'uploads/sample-ecommerce.png',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
        liveUrl: 'https://example.com',
        isFeatured: true,
        isPublished: true,
      },
      {
        title: 'SaaS Analytics Dashboard',
        slug: 'saas-analytics-dashboard',
        client: 'MetricsHQ',
        summary: 'Real-time data visualization platform processing thousands of telemetry events.',
        description: 'Built scalable backend pipelines and custom chart visualizers for high-volume metrics.',
        coverImage: 'uploads/sample-dashboard.png',
        technologies: ['TypeScript', 'Express', 'Tailwind CSS'],
        isFeatured: false,
        isPublished: true,
      },
    ]);
    logger.info(`[SEED]: Created ${projects.length} portfolio projects`);

    logger.info('[SEED]: Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    logger.error(`[SEED ERROR]: ${error.message}`);
    process.exit(1);
  }
};

seedData();