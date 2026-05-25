import { motion } from "framer-motion";

import AdminPageShell from "../components/AdminPageShell";

import TransactionHeader from "../components/Transactions/TransactionHeader";
import TransactionStats from "../components/Transactions/TransactionStats";
import TransactionTable from "../components/Transactions/TransactionTable";
import TransactionCard from "../components/Transactions/TransactionCard";

const Transaction = () => {

  const transactions = [
    {
      id: "#TRX1024",
      user: "John Doe",
      amount: "$240",
      status: "Completed",
      date: "May 25, 2026",
    },

    {
      id: "#TRX1025",
      user: "Alex Smith",
      amount: "$180",
      status: "Pending",
      date: "May 24, 2026",
    },

    {
      id: "#TRX1026",
      user: "Sarah Wilson",
      amount: "$520",
      status: "Failed",
      date: "May 24, 2026",
    },
  ];

  return (

    <AdminPageShell title="Transactions">

      <motion.div

        initial={{
          opacity: 0,
        }}

        animate={{
          opacity: 1,
        }}

        className="flex flex-col"
      >

        <TransactionHeader />

        {/* Stats */}
        <div className="grid grid-cols-3 gap-5 mt-6">

          <TransactionStats
            title="Total Revenue"
            value="$24,500"
          />

          <TransactionStats
            title="Pending"
            value="$1,240"
          />

          <TransactionStats
            title="Completed"
            value="$18,400"
          />

        </div>

        {/* Table */}
        <div className="mt-6">

          <TransactionTable
            transactions={transactions}
          />

        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-2 gap-6 mt-6">

          <TransactionCard
            title="Payment Methods"
            value="Visa • Paypal • Stripe"
          />

          <TransactionCard
            title="Latest Invoice"
            value="#INV-2042"
          />

        </div>

      </motion.div>

    </AdminPageShell>
  );
};

export default Transaction;