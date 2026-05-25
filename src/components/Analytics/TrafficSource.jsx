import { motion } from "framer-motion";

const TrafficSource = () => {

  const sources = [
    {
      name: "Direct",
      value: "45%",
    },
    {
      name: "Social Media",
      value: "30%",
    },
    {
      name: "Organic Search",
      value: "25%",
    },
  ];

  return (

    <motion.div

      whileHover={{
        y: -5,
      }}

      className="bg-[#111827] border border-cyan-500/20 rounded-3xl p-6"
    >

      <h1 className="text-2xl font-bold text-white mb-6">
        Traffic Sources
      </h1>

      <div className="flex flex-col gap-5">

        {sources.map((item, index) => (

          <motion.div

            key={index}

            whileHover={{
              x: 8,
            }}

            className="flex items-center justify-between bg-[#1e293b] p-4 rounded-2xl"
          >

            <p className="text-gray-300">
              {item.name}
            </p>

            <p className="text-cyan-400 font-semibold">
              {item.value}
            </p>

          </motion.div>

        ))}

      </div>

    </motion.div>
  );
};

export default TrafficSource;