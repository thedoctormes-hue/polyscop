import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Hero } from '@/sections/Hero';
import { Problem } from '@/sections/Problem';
import { Solution } from '@/sections/Solution';
import { Architecture } from '@/sections/Architecture';
import { Benefits } from '@/sections/Benefits';
import { Economics } from '@/sections/Economics';
import { Competitors } from '@/sections/Competitors';
import { Market } from '@/sections/Market';
import { Roadmap } from '@/sections/Roadmap';
import { Strategy } from '@/sections/Strategy';
import { Team } from '@/sections/Team';
import { Contact } from '@/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#040A14] text-[#E6F1FF] font-inter overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Architecture />
        <Benefits />
        <Economics />
        <Competitors />
        <Market />
        <Roadmap />
        <Strategy />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
