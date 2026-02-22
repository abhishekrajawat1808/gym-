import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Preferences from './components/Preferences';
import Subscriptions from './components/Subscriptions';
import Locations from './components/Locations';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-white font-sans selection:bg-[var(--color-brand)] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Preferences />
        <Subscriptions />
        <Locations />
      </main>
      <Footer />
    </div>
  );
}
