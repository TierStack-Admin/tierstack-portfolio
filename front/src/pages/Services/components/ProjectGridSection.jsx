import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectCardSkeleton = () => (
  <div className="bg-white rounded-2xl overflow-hidden border border-outline-variant/20 shadow-sm animate-pulse">
    <div className="h-52 bg-surface-light-gray" />
    <div className="p-6 space-y-3">
      <div className="h-5 w-1/4 bg-surface-light-gray rounded" />
      <div className="h-6 w-3/4 bg-surface-light-gray rounded" />
      <div className="h-4 w-full bg-surface-light-gray rounded" />
      <div className="flex gap-2 pt-2">
        <div className="h-6 w-16 bg-surface-light-gray rounded-md" />
        <div className="h-6 w-16 bg-surface-light-gray rounded-md" />
      </div>
    </div>
  </div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ProjectGridSection = ({ projects, loading, error }) => {
  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => <ProjectCardSkeleton key={i} />)}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 text-center">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
          <p className="text-red-700 font-medium">{error}</p>
        </div>
      </section>
    );
  }

  if (!projects.length) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-outline-variant/30 rounded-3xl p-12 shadow-sm"
        >
          <div className="w-16 h-16 rounded-2xl bg-surface-light-gray flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-on-surface-variant" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-xl font-display font-semibold text-on-surface mb-2">Portfolio Coming Soon</h3>
          <p className="text-on-surface-variant max-w-md mx-auto">
            We're curating our best work. Check back soon for case studies and showcases.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div key={project._id || project.slug} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectGridSection;
