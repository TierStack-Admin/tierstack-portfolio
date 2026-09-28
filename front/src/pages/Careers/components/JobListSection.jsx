import { motion } from 'framer-motion';

const JobCardSkeleton = () => (
  <div className="bg-white rounded-2xl p-6 md:p-8 border border-outline-variant/20 shadow-sm animate-pulse">
    <div className="flex items-center justify-between mb-4">
      <div className="h-6 w-24 bg-surface-light-gray rounded-md" />
      <div className="h-5 w-20 bg-surface-light-gray rounded-md" />
    </div>
    <div className="h-7 w-3/4 bg-surface-light-gray rounded-md mb-4" />
    <div className="space-y-2 mb-8">
      <div className="h-4 w-1/2 bg-surface-light-gray rounded-md" />
      <div className="h-4 w-1/3 bg-surface-light-gray rounded-md" />
    </div>
    <div className="h-10 w-full bg-surface-light-gray rounded-lg" />
  </div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const JobListSection = ({ jobs, loading, error, onApply }) => {
  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => <JobCardSkeleton key={i} />)}
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

  if (!jobs.length) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-outline-variant/30 rounded-3xl p-12 shadow-sm"
        >
          <div className="w-16 h-16 rounded-2xl bg-surface-light-gray flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-on-surface-variant" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-display font-semibold text-on-surface mb-2">No Open Positions</h3>
          <p className="text-on-surface-variant max-w-md mx-auto">
            We don't have open roles right now, but we're always looking for talent. Check back soon!
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {jobs.map((job) => (
          <motion.div key={job._id} variants={itemVariants}>
            <JobListCard job={job} onApply={onApply} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const JobListCard = ({ job, onApply }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="bg-white rounded-2xl p-6 md:p-8 border border-outline-variant/30 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
  >
    <div className="flex items-center justify-between mb-4">
      <span className="px-3 py-1 bg-secondary-fixed/40 text-accent-dark-green text-xs font-bold uppercase tracking-wider rounded-md">
        {job.department}
      </span>
      <span className="text-on-surface-variant text-sm font-medium flex items-center gap-1.5">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {job.type}
      </span>
    </div>
    <h3 className="text-xl font-display font-semibold text-on-surface mb-3">{job.title}</h3>
    <div className="flex items-center text-on-surface-variant text-sm mb-5 gap-1.5">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      {job.location}
    </div>
    <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
      {job.description}
    </p>
    <button
      onClick={() => onApply(job)}
      className="w-full py-3 rounded-xl border-2 border-accent-dark-green text-accent-dark-green font-semibold hover:bg-accent-dark-green hover:text-surface-off-white transition-all duration-300 mt-auto"
    >
      Apply Now
    </button>
  </motion.div>
);

export default JobListSection;
