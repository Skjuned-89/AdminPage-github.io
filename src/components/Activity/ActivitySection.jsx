import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import TaskRow from "./TaskRow";

export default function ActivitySection({
  title = "Tasks",
  count = 0,
  tasks = [],
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      className="bg-[#111827] border border-cyan-500/20 rounded-3xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-white">
            {title}
          </h1>

          <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white text-sm font-semibold">
            {count}
          </div>
        </div>

        <motion.button
          whileHover={{
            scale: 1.1,
            rotate: 90,
          }}
          className="w-12 h-12 rounded-2xl bg-cyan-500 text-white flex items-center justify-center"
        >
          <Plus />
        </motion.button>
      </div>

      <div className="flex flex-col gap-4">
        {tasks.map((task, index) => (
          <TaskRow key={index} task={task} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
