import { Outlet } from 'react-router-dom';

export function ScaffoldViteReact19TypeScriptProjectWithSupabaseTailwindShadcnuiZustandTanStackQueryReactrouterdom() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <header className="bg-gray-900 border-b border-gray-700 py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-emerald-500">CoolFlow Pro</h1>
        <nav className="flex space-x-4">
          <a href="/dashboard" className="text-gray-400 hover:text-emerald-500 transition-colors">Dashboard</a>
          <a href="/customers" className="text-gray-400 hover:text-emerald-500 transition-colors">Customers</a>
          <a href="/schedule" className="text-gray-400 hover:text-emerald-500 transition-colors">Schedule</a>
        </nav>
      </header>
      <main className="flex-1 p-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
