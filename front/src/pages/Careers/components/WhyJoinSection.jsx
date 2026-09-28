import { motion } from 'framer-motion';

const perks = [
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Cutting-Edge Stack',
    desc: 'Work with the latest technologies—React, Node.js, AI/ML, and cloud-native architectures.',
  },
  {
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Remote-First Culture',
    desc: 'Work from anywhere in the world. We believe in outcomes, not office hours.',
  },
  {
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    title: 'Continuous Growth',
    desc: 'Conference budgets, mentorship programs, and a learning culture that fuels your career.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const WhyJoinSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-on-surface mb-4">
          Why Join <span className="text-accent-dark-green">TierStack</span>?
        </h2>
        <p className="text-on-surface-variant max-w-xl mx-auto">
          We invest in our people as much as our products.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {perks.map((perk) => (
          <motion.div
            key={perk.title}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl p-8 border border-outline-variant/30 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary-fixed/30 flex items-center justify-center mx-auto mb-5">
              <svg className="w-6 h-6 text-accent-dark-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={perk.icon} />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-on-surface text-lg mb-2">{perk.title}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">{perk.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyJoinSection;
