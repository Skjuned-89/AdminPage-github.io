import { Search, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-3 bg-[#111827] border border-cyan-500/20 px-5 py-3 rounded-2xl hover:border-cyan-500 transition-all duration-300">
      <Search className="text-cyan-400" size={20} />

      <input
        type="text"
        placeholder="Search task..."
        className="bg-transparent outline-none text-white placeholder:text-gray-400 w-[220px]"
      />
  
      <motion.button
        whileHover={{
          scale: 1.1,
          rotate: 10,
        }}
        className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center text-white"
      >
        <SlidersHorizontal size={18} />
      </motion.button>
    </div>
  );
}
