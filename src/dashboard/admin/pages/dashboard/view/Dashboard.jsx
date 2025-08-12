
import { MetricsGrid, QuickActions, RecentActivity } from "../components";

const Dashboard = () => {
  return (
    <div className="flex">
      <main className="flex-1 bg-[#f8fbff] px-6 py-8">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-blue-600">Welcome, Admin User!</h1>
          <p className="text-gray-500">Supercharge your store with insights &amp; control</p>
        </header>

        <MetricsGrid />

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <QuickActions />
          <RecentActivity />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
