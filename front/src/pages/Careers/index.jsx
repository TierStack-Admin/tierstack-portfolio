import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import CareersHeroSection from './components/CareersHeroSection';
import WhyJoinSection from './components/WhyJoinSection';
import JobListSection from './components/JobListSection';
import ApplicationModal from './components/ApplicationModal';
import CtaBanner from '../../components/common/CtaBanner';

const Careers = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await api.get('/career');
        setJobs(data.data || []);
      } catch {
        setError('Unable to load open positions. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="w-full bg-surface-off-white">
      <CareersHeroSection />
      <WhyJoinSection />
      <JobListSection jobs={jobs} loading={loading} error={error} onApply={setSelectedJob} />

      <section className="pb-20 md:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaBanner
          headline="Don't see the right role?"
          subheadline="Send us your resume. We're always looking for exceptional talent."
          buttonText="Contact Us"
          buttonAction={() => navigate('/contact')}
          variant="dark"
        />
      </section>

      <ApplicationModal
        job={selectedJob}
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
      />
    </div>
  );
};

export default Careers;
