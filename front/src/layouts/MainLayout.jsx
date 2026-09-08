import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 bg-surface-light-gray">
        {/* Navigation placeholder */}
        <nav>TierStack Portfolio</nav>
      </header>
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <footer className="p-4 bg-accent-dark-green text-surface-off-white">
        Footer
      </footer>
    </div>
  );
}
