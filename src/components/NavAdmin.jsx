import { motion } from "framer-motion";
import { Search } from "lucide-react";

const NavAdmin = ({ Name, title = "Dashboard" }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="flex items-center justify-between mb-8"
    >
      <div>
        <p className="text-cyan-400 font-medium text-sm">
          Dashboard / {title}
        </p>
        <h1 className="text-3xl font-bold text-black mt-1">{title}</h1>
        <p className="text-gray-500 mt-1">Welcome back, {Name}</p>
      </div>

      <div className="flex items-center gap-3 bg-[#111827] border border-cyan-500/20 px-5 py-3 rounded-2xl hover:border-cyan-500 transition-all duration-300">
        <Search className="text-cyan-400" size={20} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-white placeholder:text-gray-400 w-[200px]"
        />
      </div>
    </motion.div>
  );
};

export default NavAdmin;
