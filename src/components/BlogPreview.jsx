import { motion } from 'framer-motion';

const posts = [
  {
    id: 1,
    title: 'Designing Motion Systems for Web3 Interfaces',
    excerpt: 'Principles, patterns, and performance techniques for fluid 60fps animations in complex apps.',
    tag: 'Motion',
    date: 'Oct 2025',
  },
  {
    id: 2,
    title: 'A Minimalist Approach to Futuristic UI',
    excerpt: 'How to balance bold visuals with clarity and usability for cutting-edge digital products.',
    tag: 'Design',
    date: 'Sep 2025',
  },
  {
    id: 3,
    title: '3D on the Web with Spline & React',
    excerpt: 'Practical tips for integrating interactive 3D scenes without sacrificing UX.',
    tag: '3D',
    date: 'Aug 2025',
  },
];

export default function BlogPreview() {
  return (
    <section id="blog" className="relative bg-black text-white py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.15),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Insights & Articles</h2>
            <p className="mt-2 text-gray-400">Thoughts on design, animation, and building for the decentralized web.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex px-4 py-2 rounded-md border border-white/15 hover:bg-white/10">View all</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-500/20 blur-2xl" />
              <div className="relative p-6">
                <div className="inline-flex items-center gap-2 text-xs text-emerald-300/90">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300">{post.tag}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">{post.date}</span>
                </div>
                <h3 className="mt-3 text-lg font-medium leading-snug group-hover:text-white/90">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-gray-300/90">{post.excerpt}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-white">
                  Read article
                  <svg className="transition-transform group-hover:translate-x-1" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
