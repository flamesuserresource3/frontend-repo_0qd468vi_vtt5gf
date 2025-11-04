import { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, BarChart2, FileText, Users } from 'lucide-react';

export default function AdminDashboard() {
  const [tab, setTab] = useState('overview');

  return (
    <section id="admin" className="bg-black text-white py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Admin Dashboard</h2>
            <p className="mt-2 text-gray-400">Manage content and monitor performance with a clean, minimal UI.</p>
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/15 hover:bg-white/10">
            <Settings size={16} /> Settings
          </button>
        </div>

        {/* Tabs */}
        <div className="mt-8 inline-flex rounded-lg border border-white/10 bg-white/5 p-1">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'posts', label: 'Posts' },
            { id: 'users', label: 'Users' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`relative px-4 py-2 rounded-md text-sm transition-colors ${
                tab === t.id ? 'text-black' : 'text-gray-300 hover:text-white'
              }`}
            >
              {tab === t.id && (
                <motion.span
                  layoutId="dash-tab"
                  className="absolute inset-0 rounded-md bg-white"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{t.label}</span>
            </button>
          ))}
        </div>

        {tab === 'overview' && <Overview />}
        {tab === 'posts' && <Posts />}
        {tab === 'users' && <UsersPanel />}
      </div>
    </section>
  );
}

function StatCard({ icon: Icon, label, value, change }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-emerald-400/20 to-cyan-400/10 blur-2xl" />
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">{label}</p>
          <p className="mt-1 text-2xl font-semibold">{value}</p>
          <p className={`mt-1 text-xs ${change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>{change} this week</p>
        </div>
        <div className="p-3 rounded-xl bg-white/10 border border-white/10">
          <Icon size={20} />
        </div>
      </div>
    </div>
  );
}

function Overview() {
  return (
    <div className="mt-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={BarChart2} label="Visits" value="12,480" change="+8%" />
        <StatCard icon={FileText} label="Posts" value="36" change="+2%" />
        <StatCard icon={Users} label="Subscribers" value="2,145" change="+5%" />
        <StatCard icon={Settings} label="Tasks" value="7" change="-1%" />
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Recent Activity</h3>
          <span className="text-xs text-gray-400">Last 24 hours</span>
        </div>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-300">
          <div className="rounded-lg border border-white/10 p-4 bg-black/30">New post published: Motion Systems</div>
          <div className="rounded-lg border border-white/10 p-4 bg-black/30">User signup: alex@domain.com</div>
          <div className="rounded-lg border border-white/10 p-4 bg-black/30">Newsletter sent: Issue #12</div>
          <div className="rounded-lg border border-white/10 p-4 bg-black/30">Comment approved on Spline article</div>
          <div className="rounded-lg border border-white/10 p-4 bg-black/30">Dashboard theme updated</div>
          <div className="rounded-lg border border-white/10 p-4 bg-black/30">3 new subscribers joined</div>
        </div>
      </div>
    </div>
  );
}

function Posts() {
  const rows = [
    { id: 'PS-036', title: 'Designing Motion Systems', status: 'Published', views: 1840 },
    { id: 'PS-035', title: 'Minimal Futuristic UI', status: 'Draft', views: 0 },
    { id: 'PS-034', title: '3D on the Web with Spline', status: 'Published', views: 920 },
  ];

  return (
    <div className="mt-8">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-white/5 text-left text-gray-300">
              <tr>
                <th className="px-6 py-4 font-medium">ID</th>
                <th className="px-6 py-4 font-medium">Title</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Views</th>
                <th className="px-6 py-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.id} className={`border-t border-white/10 ${i % 2 === 0 ? 'bg-black/20' : ''}`}>
                  <td className="px-6 py-4">{r.id}</td>
                  <td className="px-6 py-4">{r.title}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      r.status === 'Published'
                        ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-400/20'
                        : 'bg-yellow-500/10 text-yellow-300 border border-yellow-400/20'
                    }`}>{r.status}</span>
                  </td>
                  <td className="px-6 py-4">{r.views.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <button className="px-3 py-1 rounded-md border border-white/15 hover:bg-white/10">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function UsersPanel() {
  const users = [
    { name: 'Alex Carter', role: 'Admin' },
    { name: 'Jordan Smith', role: 'Editor' },
    { name: 'Riley Sun', role: 'Subscriber' },
  ];

  return (
    <div className="mt-8 grid md:grid-cols-2 gap-6">
      {users.map((u) => (
        <div key={u.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">User</p>
              <p className="text-lg font-medium">{u.name}</p>
            </div>
            <span className="px-3 py-1 rounded-md text-xs bg-white/10 border border-white/10">{u.role}</span>
          </div>
          <div className="mt-4 flex gap-2">
            <button className="px-3 py-1 rounded-md border border-white/15 hover:bg-white/10">Message</button>
            <button className="px-3 py-1 rounded-md border border-white/15 hover:bg-white/10">Promote</button>
          </div>
        </div>
      ))}
    </div>
  );
}
