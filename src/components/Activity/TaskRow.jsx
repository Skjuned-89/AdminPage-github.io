import { motion } from "framer-motion";
import StatusBadge from "./StatusBadge";

export default function TaskRow({ task, index = 0 }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
      }}
      whileHover={{
        x: 8,
      }}
      className="grid grid-cols-6 gap-4 bg-[#1e293b] rounded-2xl p-5 items-center"
    >
      <div>
        <h1 className="font-semibold text-lg text-white">
          {task.task}
        </h1>

        <p className="text-sm mt-1 text-gray-400">
          {task.description}
        </p>
      </div>

      <div>
        <p className="font-medium text-gray-300">
          {task.deadline}
        </p>
      </div>

      <div>
        <p className="text-gray-300">
          {task.time}
        </p>
      </div>

      <div>
        <StatusBadge text={task.type} />
      </div>

      <div>
        <StatusBadge text={task.priority} />
      </div>

      <div className="flex justify-end">
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="px-4 py-2 rounded-xl bg-cyan-500 text-white hover:bg-cyan-400 transition-all duration-300"
        >
          Open
        </motion.button>
      </div>
    </motion.div>
  );
}
