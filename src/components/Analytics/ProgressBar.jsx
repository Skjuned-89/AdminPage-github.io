import { motion } from "framer-motion";

const ProgressBar = ({
  title,
  value,
}) => {

  return (

    <div>

      <div className="flex items-center justify-between mb-2">

        <p className="text-white">
          {title}
        </p>

        <p className="text-cyan-400">
          {value}
        </p>

      </div>

      <div className="w-full h-3 bg-[#1e293b] rounded-full overflow-hidden">

        <motion.div

          initial={{
            width: 0,
          }}

          animate={{
            width: value,
          }}

          transition={{
            duration: 1,
          }}

          className="h-full bg-cyan-500 rounded-full"
        />

      </div>

    </div>
  );
};

export default ProgressBar;