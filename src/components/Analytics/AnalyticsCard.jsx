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

        <h1 className="text-4xl font-bold text-white mt-2">
          {value}
        </h1>

      </div>

      <div className="w-14 h-14 rounded-2xl bg-cyan-500 flex items-center justify-center text-white">

        <Icon />

      </div>

    </motion.div>
  );
};

export default AnalyticsCard;