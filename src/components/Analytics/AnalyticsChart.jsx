import { motion } from "framer-motion";
import { WEEK_CHART_DATA } from "../../constants/weekChartData";

const AnalyticsChart = () => {
  return (
    <div className="bg-[#111827] border border-cyan-500/20 rounded-3xl p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Sales Analytics
          </h1>

          <p className="text-gray-400 mt-1">
            Weekly performance
          </p>
        </div>

        <button className="px-5 py-3 rounded-2xl bg-cyan-500 text-white hover:bg-cyan-400 transition-all duration-300">
          Weekly
        </button>
      </div>

      <div className="h-[300px] flex items-end gap-3">
        {WEEK_CHART_DATA.map((item, index) => (
          <div style={{ height: item.height }}
            key={item.day}
            className="flex-1 flex flex-col items-center justify-end gap-2 "
          >
            <motion.div
              initial={{
                height: 0,
              }}
              animate={{
                height: item.height,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.05,
              }}
              className="w-full bg-cyan-500 rounded-t-3xl hover:bg-cyan-400 transition-all duration-300"
            />

            <span className="text-gray-400 text-sm font-medium shrink-0">
              {item.day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsChart;
