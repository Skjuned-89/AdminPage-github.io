import { Bell, Search } from "lucide-react";
import { motion } from "framer-motion";

const InvoiceHeader = () => {
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

      className="flex items-center justify-between"
    >

      <div>

        <p className="text-cyan-400">
          Dashboard / Invoices
        </p>

        <h1 className="text-4xl font-bold text-white mt-2">
          Invoice Management
        </h1>

      </div>

      <div className="flex items-center gap-4">

        <div className="flex items-center gap-3 bg-[#111827] border border-cyan-500/20 px-5 py-3 rounded-2xl">

          <Search className="text-cyan-400" />

          <input
            type="text"
            placeholder="Search invoice..."
            className="bg-transparent outline-none text-white placeholder:text-gray-400"
          />

        </div>

        <motion.button whileHover={{rotate:20}} className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center text-white">

          <Bell />

        </motion.button>

      </div>

    </motion.div>
  );
};

export default InvoiceHeader;