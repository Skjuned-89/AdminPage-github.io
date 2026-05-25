import { motion } from "framer-motion";

const InvoiceSummary = () => {

  return (

    <motion.div

      whileHover={{
        y: -5,
      }}

      className="bg-[#111827] border border-cyan-500/20 rounded-3xl p-6"
    >

      <h1 className="text-2xl font-bold text-white">
        Monthly Summary
      </h1>

      <div className="mt-6 flex flex-col gap-5">

        <div className="flex items-center justify-between">

          <p className="text-gray-400">
            Paid
          </p>

          <p className="text-green-400 font-semibold">
            $18,940
          </p>

        </div>

        <div className="flex items-center justify-between">

          <p className="text-gray-400">
            Pending
          </p>

          <p className="text-yellow-400 font-semibold">
            $5,420
          </p>

        </div>

        <div className="flex items-center justify-between">

          <p className="text-gray-400">
            Overdue
          </p>

          <p className="text-red-400 font-semibold">
            $1,240
          </p>

        </div>

      </div>

    </motion.div>
  );
};

export default InvoiceSummary;