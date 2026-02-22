export default function Locations() {
  return (
    <section className="py-24 bg-[var(--color-bg)] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h3 className="text-[var(--color-brand)] font-semibold tracking-widest uppercase text-sm mb-4">Our Locations</h3>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-12 uppercase max-w-4xl">
          Our Global Presence: <span className="text-brand-gradient">Fitness</span> Centers Around The World
        </h2>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start mb-16">
          <div className="shrink-0">
            <p className="text-5xl sm:text-6xl font-black text-white mb-2">23<span className="text-[var(--color-brand)]">+</span></p>
            <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Countries</p>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            No matter where you are, our gyms are here to help you reach your fitness goals. With locations across the globe, finding a gym near you is easy. Explore our map and join our worldwide fitness community today.
          </p>
        </div>

        {/* Abstract Map Visualization */}
        <div className="relative w-full aspect-[2/1] opacity-60">
          <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain opacity-20 invert"></div>
          
          {/* Decorative dots representing locations */}
          <div className="absolute top-[30%] left-[20%] w-2 h-2 rounded-full bg-[var(--color-brand)] shadow-[0_0_10px_var(--color-brand)]"></div>
          <div className="absolute top-[40%] left-[25%] w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] shadow-[0_0_10px_var(--color-brand)]"></div>
          <div className="absolute top-[35%] left-[45%] w-2.5 h-2.5 rounded-full bg-[var(--color-brand)] shadow-[0_0_10px_var(--color-brand)]"></div>
          <div className="absolute top-[25%] left-[50%] w-2 h-2 rounded-full bg-[var(--color-brand)] shadow-[0_0_10px_var(--color-brand)]"></div>
          <div className="absolute top-[45%] left-[55%] w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] shadow-[0_0_10px_var(--color-brand)]"></div>
          <div className="absolute top-[30%] left-[75%] w-2 h-2 rounded-full bg-[var(--color-brand)] shadow-[0_0_10px_var(--color-brand)]"></div>
          <div className="absolute top-[55%] left-[80%] w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] shadow-[0_0_10px_var(--color-brand)]"></div>
          <div className="absolute top-[65%] left-[30%] w-2 h-2 rounded-full bg-[var(--color-brand)] shadow-[0_0_10px_var(--color-brand)]"></div>
          <div className="absolute top-[75%] left-[35%] w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] shadow-[0_0_10px_var(--color-brand)]"></div>
        </div>
      </div>
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[var(--color-brand)]/5 blur-[150px] rounded-full pointer-events-none"></div>
    </section>
  );
}
