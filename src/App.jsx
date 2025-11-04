import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BlogPreview from './components/BlogPreview';
import AdminDashboard from './components/AdminDashboard';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <BlogPreview />
        <AdminDashboard />

        {/* About / Contact section */}
        <section id="about" className="py-20 border-t border-white/10 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">About</h2>
              <p className="mt-4 text-gray-300 leading-relaxed">
                I’m a designer-engineer focused on crafting immersive, performant digital experiences. I love blending motion,
                3D, and crisp interfaces to tell stories and make products feel alive.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors">Work with me</a>
                <a href="#blog" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors">Browse articles</a>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">Focus</p>
                  <p className="mt-1">Web3 UI • Motion • 3D</p>
                </div>
                <div>
                  <p className="text-gray-400">Stack</p>
                  <p className="mt-1">React • Tailwind • FastAPI</p>
                </div>
                <div>
                  <p className="text-gray-400">Clients</p>
                  <p className="mt-1">Startups • Agencies • DAOs</p>
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="mt-1">Remote • Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-2 text-gray-400">Have a project in mind? Let’s build something great.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid md:grid-cols-2 gap-4">
              <input className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/30" placeholder="Your name" />
              <input type="email" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/30" placeholder="Email" />
              <input className="md:col-span-2 w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/30" placeholder="Subject" />
              <textarea rows="5" className="md:col-span-2 w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/30" placeholder="Tell me a bit about your project" />
              <div className="md:col-span-2">
                <button className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors">Send message</button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 bg-black py-8 text-center text-sm text-gray-400">© {new Date().getFullYear()} Flames Portfolio. All rights reserved.</footer>
    </div>
  );
}
