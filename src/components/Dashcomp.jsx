import {
  TrendingUp,
  DollarSign,
  Users,
  ShoppingCart,
} from "lucide-react";
import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";
import NavAdmin from "./NavAdmin";
import StateCard from "./StateCard";
import ChartBox from "./ChartBox";
import RecentActivity from "./RecentActivity";
import { container, fadeUp, pageFade } from "../utils/motionVariants";

export default function DashboardRight() {
  let Name, userName;
  const isLoggedin = localStorage.getItem("isLoggedIn");
  if (isLoggedin) {
    userName = localStorage.getItem("user");
    Name = JSON.parse(userName).username;
  } else {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex-1 bg-transparentx p-6 overflow-y-auto w-full h-screen">
      <NavAdmin Name={Name} />

      <motion.div {...pageFade} className="flex flex-col">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-4 gap-3 mb-6"
        >
          <motion.div variants={fadeUp}>
            <StateCard title="Revenue" value="$12,540" icon={DollarSign} />
          </motion.div>
          <motion.div variants={fadeUp}>
            <StateCard title="Users" value="1,240" icon={Users} />
          </motion.div>
          <motion.div variants={fadeUp}>
            <StateCard title="Orders" value="560" icon={ShoppingCart} />
          </motion.div>
          <motion.div variants={fadeUp}>
            <StateCard title="Growth" value="+24%" icon={TrendingUp} />
          </motion.div>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-3 gap-3"
        >
          <motion.div variants={fadeUp} whileHover={{y:-8,}} className="col-span-2">
            <ChartBox title="Sales Analytics" />
          </motion.div>

          <motion.div variants={fadeUp} className="h-full">
            <RecentActivity />
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-3 mt-6"
        >
          <motion.div variants={fadeUp} whileHover={{y:-8,}}>
            <ChartBox title="Revenue Overview" />
          </motion.div>
          <motion.div variants={fadeUp} whileHover={{y:-8,}}>
            <ChartBox title="Traffic Report" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
