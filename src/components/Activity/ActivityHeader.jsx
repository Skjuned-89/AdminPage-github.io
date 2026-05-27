import { Settings, Plus } from "lucide-react";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";

export default function ActivityHeader() {
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
      <div>
        <h1 className="text-4xl font-bold text-white">
          Project Activity
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <SearchBar />

        <motion.button
          whileHover={{
            scale: 1.1,
            rotate: 10,
          }}
          className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center text-white"
        >
          <Settings />
        </motion.button>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-cyan-500 text-white font-medium hover:bg-cyan-400 transition-all duration-300"
        >
          <Plus size={18} />
          Add Task
        </motion.button>
      </div>
    </motion.div>
  );
}
