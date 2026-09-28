
const inputStyles = 'w-full px-4 py-3 rounded-xl border border-outline-variant/40 bg-surface-light-gray text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-accent-dark-green/50 focus:border-accent-dark-green transition-all text-sm';

const ApplicationForm = ({ form, onChange, onFileChange, onSubmit, submitting, error }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {error && (
        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm text-center">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="app-fullName" className="block text-sm font-medium text-on-surface mb-1">Full Name *</label>
        <input id="app-fullName" name="fullName" value={form.fullName} onChange={onChange} required placeholder="John Doe" className={inputStyles} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="app-email" className="block text-sm font-medium text-on-surface mb-1">Email *</label>
          <input id="app-email" name="email" type="email" value={form.email} onChange={onChange} required placeholder="john@email.com" className={inputStyles} />
        </div>
        <div>
          <label htmlFor="app-phone" className="block text-sm font-medium text-on-surface mb-1">Phone</label>
          <input id="app-phone" name="phone" value={form.phone} onChange={onChange} placeholder="+1 555-0123" className={inputStyles} />
        </div>
      </div>

      <div>
        <label htmlFor="app-resume" className="block text-sm font-medium text-on-surface mb-1">Resume (PDF) *</label>
        <input
          id="app-resume"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={onFileChange}
          required
          className="w-full text-sm text-on-surface-variant file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:bg-secondary-fixed/30 file:text-accent-dark-green file:font-medium hover:file:bg-secondary-fixed/50 file:cursor-pointer file:transition-colors cursor-pointer"
        />
      </div>

      <div>
        <label htmlFor="app-coverLetter" className="block text-sm font-medium text-on-surface mb-1">Cover Letter</label>
        <textarea
          id="app-coverLetter"
          name="coverLetter"
          value={form.coverLetter}
          onChange={onChange}
          rows={3}
          placeholder="Tell us why you're a great fit..."
          className={`${inputStyles} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3 rounded-xl bg-accent-dark-green text-surface-off-white font-semibold hover:bg-on-surface transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {submitting ? (
          <>
            <span className="w-4 h-4 border-2 border-surface-off-white/30 border-t-surface-off-white rounded-full animate-spin" />
            Submitting...
          </>
        ) : 'Submit Application'}
      </button>
    </form>
  );
};

export default ApplicationForm;
