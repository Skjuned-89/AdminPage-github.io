import { motion } from "framer-motion";

import AdminPageShell from "../components/AdminPageShell";

import InvoiceHeader from "../components/Invoice/InvoiceHeader";
import InvoiceStats from "../components/Invoice/InvoiceStats";
import InvoiceTable from "../components/Invoice/InvoiceTable";
import InvoiceCard from "../components/Invoice/InvoiceCard";
import InvoiceSummary from "../components/Invoice/InvoiceSummary";

const Invoice = () => {

  const invoices = [
    {
      id: "#INV-1024",
      client: "John Doe",
      amount: "$540",
      status: "Paid",
      due: "May 28, 2026",
    },

    {
      id: "#INV-1025",
      client: "Alex Smith",
      amount: "$320",
      status: "Pending",
      due: "May 30, 2026",
    },

    {
      id: "#INV-1026",
      client: "Sarah Wilson",
      amount: "$890",
      status: "Overdue",
      due: "May 20, 2026",
    },
  ];

  return (

    <AdminPageShell title="Invoices">

      <motion.div

        initial={{
          opacity: 0,
        }}

        animate={{
          opacity: 1,
        }}

        className="flex flex-col"
      >

        <InvoiceHeader />

        {/* Stats */}
        <div className="grid grid-cols-3 gap-5 mt-6">

          <InvoiceStats
            title="Total Invoices"
            value="1,240"
          />

          <InvoiceStats
            title="Pending Amount"
            value="$5,420"
          />

          <InvoiceStats
            title="Paid Revenue"
            value="$18,940"
          />

        </div>

        {/* Table */}
        <div className="mt-6">

          <InvoiceTable
            invoices={invoices}
          />

        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-2 gap-6 mt-6">

          <InvoiceCard
            title="Latest Invoice"
            value="#INV-1026"
          />

          <InvoiceSummary />

        </div>

      </motion.div>

    </AdminPageShell>
  );
};

export default Invoice;