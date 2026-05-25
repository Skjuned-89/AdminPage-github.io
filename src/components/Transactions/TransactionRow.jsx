import { motion } from "framer-motion";
import TransactionStatus from "./TransactionStatus";

const TransactionRow = ({
  transaction,
}) => {

  return (

    <motion.div

      whileHover={{
        backgroundColor: "#1e293b",
      }}

      className="grid grid-cols-5 px-6 py-5 border-b border-cyan-500/10 text-white transition-all duration-300"
    >

      <p>{transaction.id}</p>

      <p>{transaction.user}</p>

      <p className="text-cyan-400">
        {transaction.amount}
      </p>

      <TransactionStatus
        status={transaction.status}
      />

      <p className="text-gray-400">
        {transaction.date}
      </p>

    </motion.div>
  );
};

export default TransactionRow;