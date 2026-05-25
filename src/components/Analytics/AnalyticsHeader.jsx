import { Bell, Search } from "lucide-react";
import { motion } from "framer-motion";

const AnalyticsHeader = () => {
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

      className="flex items-center justify-between"
    >

      {/* Left */}
      <div>

        <p className="text-cyan-400 font-medium">
          Dashboard / Analytics
        </p>

        <h1 className="text-4xl font-bold text-black mt-2">
          Analytics Overview
        </h1>

      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="flex items-center gap-3 bg-[#111827] border border-cyan-500/20 px-5 py-3 rounded-2xl hover:border-cyan-500 transition-all duration-300">

          <Search
            className="text-cyan-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search analytics..."
            className="bg-transparent outline-none text-white placeholder:text-gray-400"
          />

        </div>

        {/* Notification */}
        <motion.button

          whileHover={{
            scale: 1.1,
            rotate: 10,
          }}

          className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center text-white"
        >

          <Bell />

        </motion.button>

      </div>

    </motion.div>
  );
};

export default AnalyticsHeader;