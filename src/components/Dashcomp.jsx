import {
  TrendingUp,
  DollarSign,
  Users,
  ShoppingCart,
} from "lucide-react";

function StatCard({ title, value, icon: Icon }) {
  return (
    <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-lg transition-all duration-300">
      
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h1 className="text-3xl font-bold mt-2">{value}</h1>
      </div>

      <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center">
        <Icon className="text-cyan-600" />
      </div>
    </div>
  );
}

function ChartBox({ title }) {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl font-bold">{title}</h1>

        <button className="px-4 py-2 bg-gray-100 rounded-xl text-sm hover:bg-gray-200 transition-all">
          Weekly
        </button>
      </div>

      {/* Fake Chart */}
      <div className="h-[250px] flex items-end gap-4">
        <div className="w-full bg-cyan-400 h-[40%] rounded-t-xl"></div>
        <div className="w-full bg-cyan-400 h-[70%] rounded-t-xl"></div>
        <div className="w-full bg-cyan-400 h-[55%] rounded-t-xl"></div>
        <div className="w-full bg-cyan-400 h-[90%] rounded-t-xl"></div>
        <div className="w-full bg-cyan-400 h-[65%] rounded-t-xl"></div>
        <div className="w-full bg-cyan-400 h-[80%] rounded-t-xl"></div>
      </div>
    </div>
  );
}

function RecentActivity() {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
      <h1 className="text-xl font-bold mb-5">
        Recent Activity
      </h1>

      <div className="flex flex-col gap-4">
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-semibold">Payment Received</h1>
            <p className="text-gray-500 text-sm">
              From client
            </p>
          </div>

          <p className="text-green-500 font-bold">
            +$1,200
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-semibold">New Order</h1>
            <p className="text-gray-500 text-sm">
              Store purchase
            </p>
          </div>

          <p className="text-cyan-500 font-bold">
            320 Items
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-semibold">Server Cost</h1>
            <p className="text-gray-500 text-sm">
              Monthly expense
            </p>
          </div>

          <p className="text-red-500 font-bold">
            -$240
          </p>
        </div>
      </div>
    </div>
  );
}
// const userName = localStorage.getItem('user')
// const Name = JSON.parse(userName).username
export default function DashboardRight() {
  return (
    <div className="flex-1 bg-[#f5f7fb] p-6 overflow-y-auto w-full h-screen ">
      
      {/* Top */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-1">
            Welcome back, Name 👋
          </p>
        </div>

        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-3 rounded-2xl bg-white border border-gray-200 outline-none"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-5 mb-6">
        <StatCard
          title="Revenue"
          value="$12,540"
          icon={DollarSign}
        />

        <StatCard
          title="Users"
          value="1,240"
          icon={Users}
        />

        <StatCard
          title="Orders"
          value="560"
          icon={ShoppingCart}
        />

        <StatCard
          title="Growth"
          value="+24%"
          icon={TrendingUp}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-3 gap-6">
        
        <div className="col-span-2">
          <ChartBox title="Sales Analytics" />
        </div>

        <RecentActivity />
      </div>

      {/* Bottom Charts */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        <ChartBox title="Revenue Overview" />
        <ChartBox title="Traffic Report" />
      </div>
    </div>
  );
}