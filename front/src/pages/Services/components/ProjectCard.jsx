import { useState } from 'react';
import { motion } from 'framer-motion';

const resolveImageUrl = (url) => {
  if (!url) return null;
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
    return url;
  }
  return url.startsWith('/') ? url : `/${url}`;
};

const ProjectCard = ({ project }) => {
  const [imageError, setImageError] = useState(false);
  const imageUrl = resolveImageUrl(project.coverImage);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
    >
      <div className="relative h-52 bg-gradient-to-br from-accent-dark-green to-[#254236] overflow-hidden">
        {imageUrl && !imageError ? (
          <img
            src={imageUrl}
            alt={project.title}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-secondary-fixed/60">
            <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs font-medium tracking-wider uppercase text-surface-light-gray/70">
              {project.title || 'Project Preview'}
            </span>
          </div>
        )}
        {project.isFeatured && (
          <span className="absolute top-3 right-3 px-2.5 py-1 bg-primary-container text-on-surface text-xs font-bold rounded-lg shadow-sm">
            Featured
          </span>
        )}
      </div>

    <div className="p-6 flex flex-col flex-grow">
      <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">
        {project.client}
      </span>
      <h3 className="text-lg font-display font-semibold text-on-surface mb-2">{project.title}</h3>
      <p className="text-on-surface-variant text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
        {project.summary}
      </p>
      {project.technologies?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="px-2.5 py-0.5 bg-surface-light-gray text-on-surface-variant text-xs font-medium rounded-md">
              {tech}
            </span>
          ))}
        </div>
      )}
      <ProjectLinks liveUrl={project.liveUrl} githubUrl={project.githubUrl} />
    </div>
  </motion.div>
  );
};

const ProjectLinks = ({ liveUrl, githubUrl }) => (
  <div className="flex gap-3 mt-auto pt-2 border-t border-outline-variant/20">
    {liveUrl && (
      <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-accent-dark-green text-sm font-semibold hover:text-on-surface transition-colors gap-1.5">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        Live Demo
      </a>
    )}
    {githubUrl && (
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-on-surface-variant text-sm font-medium hover:text-on-surface transition-colors gap-1.5">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        Source
      </a>
    )}
  </div>
);

export default ProjectCard;
