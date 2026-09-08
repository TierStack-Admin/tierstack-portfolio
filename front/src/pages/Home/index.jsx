export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4 text-center">
      <h1 className="text-5xl md:text-7xl font-display font-bold text-accent-dark-green mb-6 tracking-tight">
        Elevate Your <span className="text-primary-container">Tech Portfolio</span>
      </h1>
      <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl font-sans mb-10 leading-relaxed">
        Welcome to TierStack. We build scalable, highly performant, and beautifully designed solutions tailored for modern B2B technology leaders.
      </p>
      <div className="flex gap-4">
        <button className="px-8 py-3 bg-accent-dark-green text-surface-off-white font-medium rounded-lg hover:bg-on-surface transition-colors shadow-lg">
          Get Started
        </button>
        <button className="px-8 py-3 bg-surface-light-gray text-on-surface font-medium rounded-lg hover:bg-outline-variant transition-colors shadow-sm">
          Learn More
        </button>
      </div>
    </div>
  );
}
