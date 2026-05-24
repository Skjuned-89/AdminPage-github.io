import {
  LayoutDashboard,
  Activity,
  ChartColumn,
  Receipt,
  FileText,
  Settings,
  LogOut,
  User,
} from "lucide-react";

function SidebarCard({ title, icon: Icon, active }) {
  return (
    <div
      className={`flex items-center gap-4 px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300
      ${active
          ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
          : "text-gray-300 hover:bg-white/10 hover:text-white"
        }`}
    >
      <Icon className="w-5 h-5" />
      <h1 className="font-medium">{title}</h1>
    </div>
  );
}
const userName = localStorage.getItem('user')
const Name = JSON.parse(userName).username

export default function Sidebar() {
  return (
    <div className="w-[280px] h-screen bg-[#111827] border-r border-white/10 flex flex-col justify-between p-5">

      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center text-white font-bold text-xl">
            A
          </div>

          <div>
            <h1 className="text-white text-xl font-bold">Admin Panel</h1>
            <p className="text-gray-400 text-sm">Dashboard</p>
          </div>
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-2">
          <SidebarCard
            title="Dashboard"
            icon={LayoutDashboard}
            active={true}
          />

          <SidebarCard
            title="Activity"
            icon={Activity}
          />

          <SidebarCard
            title="Analytics"
            icon={ChartColumn}
          />

          <SidebarCard
            title="Transactions"
            icon={Receipt}
          />

          <SidebarCard
            title="Invoices"
            icon={FileText}
          />

          <SidebarCard
            title="Settings"
            icon={Settings}
          />
        </div>
      </div>

      {/* Bottom Profile */}
      <div className="border-t border-white/10 pt-5">
        <div className="flex items-center justify-between bg-white/5 p-3 rounded-2xl">

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-cyan-500 flex items-center justify-center text-white">
              <User />
            </div>

            <div>
              <h1 className="text-white font-semibold">{Name}</h1>
              <p className="text-gray-400 text-sm">Administrator</p>
            </div>
          </div>

          <LogOut className="text-gray-400 hover:text-red-500 cursor-pointer transition-all duration-300" />
        </div>
      </div>
    </div>
  );
}