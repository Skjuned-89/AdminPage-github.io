import { motion } from "framer-motion";

const InvoiceStats = ({
  title,
  value,
}) => {

  return (

    <motion.div

      whileHover={{
        scale: 1.03,
        y: -5,
      }}

      className="bg-[#111827] border border-cyan-500/20 rounded-3xl p-6"
    >

      <p className="text-gray-400">
        {title}
      </p>

      <h1 className="text-4xl font-bold text-white mt-3">
        {value}
      </h1>

    </motion.div>
  );
};

export default InvoiceStats;