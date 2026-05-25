import { motion } from "framer-motion";

const activities = [
  {
    title: "Payment Received",
    subtitle: "From client",
    value: "+$1,200",
    valueClass: "text-green-400",
  },
  {
    title: "New Order",
    subtitle: "Store purchase",
    value: "320 Items",
    valueClass: "text-cyan-400",
  },
  {
    title: "Server Cost",
    subtitle: "Monthly expense",
    value: "-$240",
    valueClass: "text-red-400",
  },
];

const RecentActivity = () => {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      className="bg-[#111827] border border-cyan-500/20 rounded-3xl p-6"
    >
      <h1 className="text-2xl font-bold text-white mb-6">Recent Activity</h1>

      <div className="flex flex-col gap-5">
        {activities.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              x: 8,
            }}
            className="flex items-center justify-between bg-[#1e293b] p-4 rounded-2xl"
          >
            <div>
              <h1 className="font-semibold text-gray-300">{item.title}</h1>
              <p className="text-gray-500 text-sm">{item.subtitle}</p>
            </div>

            <p className={`${item.valueClass} font-semibold`}>{item.value}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RecentActivity;
