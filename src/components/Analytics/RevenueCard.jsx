import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";

const RevenueCard = () => {
  return (

    <motion.div

      initial={{
        opacity: 0,
        x: 40,
      }}

      animate={{
        opacity: 1,
        x: 0,
      }}

      transition={{
        duration: 0.5,
      }}

      className="bg-[#111827] border border-cyan-500/20 rounded-3xl p-6 h-full"
    >

      <h1 className="text-2xl font-bold text-white">
        Revenue Report
      </h1>

      <div className="mt-8 flex flex-col gap-6">

        <ProgressBar
          title="Frontend"
          value="85%"
        />

        <ProgressBar
          title="Backend"
          value="70%"
        />

        <ProgressBar
          title="Marketing"
          value="60%"
        />

      </div>

    </motion.div>
  );
};

export default RevenueCard;