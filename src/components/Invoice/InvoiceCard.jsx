import { motion } from "framer-motion";

const InvoiceCard = ({
  title,
  value,
}) => {

  return (

    <motion.div

      whileHover={{
        y: -5,
      }}

      className="bg-[#111827] border border-cyan-500/20 rounded-3xl p-6"
    >

      <p className="text-gray-400">
        {title}
      </p>

      <h1 className="text-2xl font-bold text-white mt-3">
        {value}
      </h1>

    </motion.div>
  );
};

export default InvoiceCard;