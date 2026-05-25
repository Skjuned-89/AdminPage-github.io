import InvoiceRow from "./InvoiceRow";

const InvoiceTable = ({
  invoices,
}) => {

  return (

    <div className="bg-[#111827] border border-cyan-500/20 rounded-3xl overflow-hidden">

      {/* Header */}
      <div className="grid grid-cols-5 px-6 py-5 border-b border-cyan-500/10 text-gray-400 font-medium">

        <p>ID</p>
        <p>Client</p>
        <p>Amount</p>
        <p>Status</p>
        <p>Due Date</p>

      </div>

      {/* Rows */}
      <div className="flex flex-col">

        {invoices.map((item, index) => (

          <InvoiceRow
            key={index}
            invoice={item}
          />

        ))}

      </div>

    </div>
  );
};

export default InvoiceTable;