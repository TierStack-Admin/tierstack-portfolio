import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Button from '../../../components/common/Button';

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-surface-off-white">
      {/* Top bar */}
      <header className="bg-accent-dark-green text-surface-off-white px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-secondary-fixed/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-secondary-fixed" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </div>
          <span className="font-display font-semibold text-lg">TierStack Admin</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-surface-light-gray hidden sm:inline">
            {user?.name || user?.email}
          </span>
          <Button variant="outline" size="sm" onClick={handleLogout} className="!text-surface-off-white !border-surface-light-gray/30 hover:!bg-white/10">
            Sign Out
          </Button>
        </div>
      </header>

      {/* Dashboard content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <h1 className="text-3xl font-display font-bold text-on-surface mb-2">Dashboard</h1>
        <p className="text-on-surface-variant mb-10">
          Welcome back, {user?.name || 'Admin'}. Manage your content below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashCard title="Portfolio" desc="Manage projects" icon="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          <DashCard title="Careers" desc="Manage job listings" icon="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          <DashCard title="Applications" desc="Review submissions" icon="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </div>
      </motion.div>
    </div>
  );
};

const DashCard = ({ title, desc, icon }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="bg-white rounded-2xl p-6 border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
  >
    <div className="w-10 h-10 rounded-xl bg-secondary-fixed/30 flex items-center justify-center mb-4">
      <svg className="w-5 h-5 text-accent-dark-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
      </svg>
    </div>
    <h3 className="font-display font-semibold text-on-surface text-lg">{title}</h3>
    <p className="text-sm text-on-surface-variant mt-1">{desc}</p>
  </motion.div>
);

export default AdminDashboard;
