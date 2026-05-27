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
import { Navigate, useNavigate, useLocation } from 'react-router-dom'
export default function Sidebar() {
  let Name, userName
  const isLoggedin = localStorage.getItem('isLoggedIn')
  if (isLoggedin) {
    userName = localStorage.getItem('user')
    Name = JSON.parse(userName).username
  }
  else {
    return <Navigate to='/' />
  }
  let navigate = useNavigate()
  const handleLogout = () => {
    localStorage.clear()
    navigate("/")

    // window.location.reload(); 
    // window.location.href="/"
    // if(!isLoggedin){
    //   return <Navigate to='/' replace />
    // }
  }
  const location = useLocation()

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      title: "Activity",
      icon: Activity,
      path: "/activity",
    },
    {
      title: "Analytics",
      icon: ChartColumn,
      path: "/analytics",
    },
    {
      title: "Transactions",
      icon: Receipt,
      path: "/transactions",
    },
    {
      title: "Invoices",
      icon: FileText,
      path: "/invoices",
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/settings",
    },
  ];

  const activeItem =
    menuItems.find((item) => item.path === location.pathname)?.title ?? "Dashboard"
  return (
    <div className="w-[280px] min-h-screen bg-[#111827] border-r border-white/10 flex flex-col justify-between p-5">

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

          <div className="flex flex-col gap-2">

            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  onClick={() => navigate(item.path)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 ${activeItem === item.title
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                >
                  <Icon className="w-5 h-5" />

                  <h1 className="font-medium">
                    {item.title}
                  </h1>
                </div>
              );
            })}

          </div>
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

          <LogOut className="text-gray-400 hover:text-red-500 cursor-pointer transition-all duration-300" onClick={handleLogout} />
        </div>
      </div>
    </div>
  );
}