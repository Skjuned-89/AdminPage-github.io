import { motion } from "framer-motion";
import AdminPageShell from "../components/AdminPageShell";
import ActivityHeader from "../components/Activity/ActivityHeader";
import ActivitySection from "../components/Activity/ActivitySection";
import { container, fadeUp, pageFade } from "../utils/motionVariants";

const activityTasks = [
  {
    task: "Homepage redesign",
    description: "Update hero section and navigation layout",
    deadline: "May 28, 2026",
    time: "4h 20m",
    type: "Design",
    priority: "High",
  },
  {
    task: "API integration",
    description: "Connect dashboard widgets to live endpoints",
    deadline: "Jun 02, 2026",
    time: "6h 10m",
    type: "Development",
    priority: "Medium",
  },
  {
    task: "QA review",
    description: "Regression pass on checkout and billing flows",
    deadline: "Jun 05, 2026",
    time: "2h 45m",
    type: "Testing",
    priority: "Low",
  },
];

const Activity = () => {
  return (
    <AdminPageShell title="Activity">
      <motion.div {...pageFade} className="flex flex-col">
        <ActivityHeader />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-6"
        >
          <motion.div variants={fadeUp}>
            <ActivitySection
              title="In Progress"
              count={activityTasks.length}
              tasks={activityTasks}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </AdminPageShell>
  );
};

export default Activity;
