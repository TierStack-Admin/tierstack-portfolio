import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import PortfolioHeroSection from './components/PortfolioHeroSection';
import ProjectGridSection from './components/ProjectGridSection';
import CtaBanner from '../../components/common/CtaBanner';

const Services = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await api.get('/portfolio');
        setProjects(data.data || []);
      } catch {
        setError('Unable to load portfolio. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="w-full bg-surface-off-white">
      <PortfolioHeroSection />
      <ProjectGridSection projects={projects} loading={loading} error={error} />

      <section className="pb-20 md:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaBanner
          headline="Have a project in mind?"
          subheadline="Let's discuss your requirements and build something extraordinary together."
          buttonText="Start a Conversation"
          buttonAction={() => navigate('/contact')}
          variant="dark"
        />
      </section>
    </div>
  );
};

export default Services;
