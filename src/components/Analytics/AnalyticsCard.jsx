import { motion } from "framer-motion";

const AnalyticsCard = ({
  title,
  value,
  icon: Icon,
}) => {

  return (

    <motion.div

      whileHover={{
        scale: 1.03,
        y: -6,
      }}

      transition={{
        duration: 0.3,
      }}

      className="bg-[#111827] border border-cyan-500/20 rounded-3xl p-5 flex items-center justify-between hover:shadow-2xl hover:shadow-cyan-500/10"
    >

      <div>

        <p className="text-gray-400">
          {title}
        </p>

        <h1 className="text-[2rem] font-bold text-white mt-2">
          {value}
        </h1>

      </div>

      <motion.div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center text-white" whileHover={{rotate:20}}>

        <Icon />

      </motion.div>

    </motion.div>
  );
};

export default AnalyticsCard;