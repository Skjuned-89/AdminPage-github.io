import { motion } from "framer-motion";
import InvoiceStatus from "./InvoiceStatus";

const InvoiceRow = ({
  invoice,
}) => {

  return (

    <motion.div

      whileHover={{
        backgroundColor: "#1e293b",
      }}

      className="grid grid-cols-5 px-6 py-5 border-b border-cyan-500/10 text-white transition-all duration-300"
    >

      <p>{invoice.id}</p>

      <p>{invoice.client}</p>

      <p className="text-cyan-400">
        {invoice.amount}
      </p>

      <InvoiceStatus
        status={invoice.status}
      />

      <p className="text-gray-400">
        {invoice.due}
      </p>

    </motion.div>
  );
};

export default InvoiceRow;