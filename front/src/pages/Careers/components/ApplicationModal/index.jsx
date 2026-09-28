import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../../../../utils/api';
import ApplicationForm from './ApplicationForm';

const ApplicationModal = ({ job, isOpen, onClose }) => {
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', coverLetter: '' });
  const [resume, setResume] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, val]) => formData.append(key, val));
      if (resume) formData.append('resume', resume);
      await api.post(`/career/${job._id}/apply`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setSuccess(true);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit application.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setForm({ fullName: '', email: '', phone: '', coverLetter: '' });
    setResume(null);
    setSuccess(false);
    setError('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/50 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <ModalHeader job={job} onClose={handleClose} />
            {success ? (
              <SuccessMessage onClose={handleClose} />
            ) : (
              <ApplicationForm
                form={form}
                onChange={handleChange}
                onFileChange={(e) => setResume(e.target.files[0])}
                onSubmit={handleSubmit}
                submitting={submitting}
                error={error}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ModalHeader = ({ job, onClose }) => (
  <div className="flex items-start justify-between mb-6">
    <div>
      <h2 className="text-xl font-display font-bold text-on-surface">Apply for {job?.title}</h2>
      <p className="text-sm text-on-surface-variant mt-1">{job?.department} · {job?.location}</p>
    </div>
    <button onClick={onClose} className="p-1 hover:bg-surface-light-gray rounded-lg transition-colors">
      <svg className="w-5 h-5 text-on-surface-variant" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
);

const SuccessMessage = ({ onClose }) => (
  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
    <div className="w-16 h-16 rounded-full bg-secondary-fixed/30 flex items-center justify-center mx-auto mb-4">
      <svg className="w-8 h-8 text-accent-dark-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <h3 className="text-lg font-display font-semibold text-on-surface mb-2">Application Submitted!</h3>
    <p className="text-sm text-on-surface-variant mb-6">We'll review your application and get back to you soon.</p>
    <button onClick={onClose} className="px-6 py-2.5 bg-accent-dark-green text-surface-off-white rounded-xl font-medium hover:bg-on-surface transition-colors">
      Close
    </button>
  </motion.div>
);

export default ApplicationModal;
