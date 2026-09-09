import React, { useState } from 'react';
import Button from '../../../components/common/Button';

const GeneralInquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false });

    // Payload ready for future API consumption
    console.log('[API Payload - General Inquiry]:', formData);

    setTimeout(() => {
      setStatus({ submitting: false, submitted: true });
      setFormData({ fullName: '', email: '', subject: '', message: '' });
    }, 800);
  };

  if (status.submitted) {
    return (
      <div className="py-12 text-center bg-[#eefaf3] rounded-2xl p-8 border border-secondary-fixed">
        <div className="w-16 h-16 bg-secondary-fixed text-accent-dark-green rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-display font-bold text-accent-dark-green mb-2">Message Sent!</h3>
        <p className="text-on-surface-variant text-base max-w-md mx-auto mb-6">
          Thank you for reaching out. Our engineering solutions team will review your message and respond within 24 hours.
        </p>
        <Button
          variant="primary"
          onClick={() => setStatus({ submitting: false, submitted: false })}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-display font-bold text-on-surface mb-2">Send Us a Direct Message</h2>
        <p className="text-on-surface-variant text-sm">
          Have questions about our technology offerings or partnership models? Drop us a line below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-on-surface mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Alex Morgan"
            className="w-full px-4 py-3.5 rounded-xl border border-outline-variant/50 focus:border-accent-dark-green focus:ring-2 focus:ring-accent-dark-green/20 outline-none text-on-surface transition bg-surface-off-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-on-surface mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="alex@company.com"
            className="w-full px-4 py-3.5 rounded-xl border border-outline-variant/50 focus:border-accent-dark-green focus:ring-2 focus:ring-accent-dark-green/20 outline-none text-on-surface transition bg-surface-off-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-on-surface mb-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Inquiry regarding enterprise architecture"
            className="w-full px-4 py-3.5 rounded-xl border border-outline-variant/50 focus:border-accent-dark-green focus:ring-2 focus:ring-accent-dark-green/20 outline-none text-on-surface transition bg-surface-off-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-on-surface mb-2">
            How can we help you? <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your organization and what you are looking to achieve..."
            className="w-full px-4 py-3.5 rounded-xl border border-outline-variant/50 focus:border-accent-dark-green focus:ring-2 focus:ring-accent-dark-green/20 outline-none text-on-surface transition bg-surface-off-white resize-y"
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full sm:w-auto"
          disabled={status.submitting}
        >
          {status.submitting ? 'Sending...' : 'Send Message →'}
        </Button>
      </form>
    </div>
  );
};

export default GeneralInquiryForm;
