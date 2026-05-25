import { motion } from "framer-motion";

import AdminPageShell from "../components/AdminPageShell";
import { container, fadeUp, pageFade } from "../utils/motionVariants";

import AnalyticsHeader from "../components/Analytics/AnalyticsHeader";
import AnalyticsCard from "../components/Analytics/AnalyticsCard";
import AnalyticsChart from "../components/Analytics/AnalyticsChart";
import RevenueCard from "../components/Analytics/RevenueCard";
import TrafficSource from "../components/Analytics/TrafficSource";

import {
  DollarSign,
  Users,
  TrendingUp,
  ShoppingCart,
} from "lucide-react";

const Analytics = () => {
  return (

    <AdminPageShell title="Analytics">

      <motion.div
        {...pageFade}
        className="flex flex-col"
      >

        {/* Header */}
        <AnalyticsHeader />

        {/* Top Cards */}
        <motion.div

          variants={container}

          initial="hidden"

          animate="show"

          className="grid grid-cols-4 gap-5 mt-6"
        >

          <motion.div variants={fadeUp}>

            <AnalyticsCard
              title="Revenue"
              value="$24,500"
              icon={DollarSign}
            />

          </motion.div>

          <motion.div variants={fadeUp}>

            <AnalyticsCard
              title="Users"
              value="12,420"
              icon={Users}
            />

          </motion.div>

          <motion.div variants={fadeUp}>

            <AnalyticsCard
              title="Orders"
              value="1,240"
              icon={ShoppingCart}
            />

          </motion.div>

          <motion.div variants={fadeUp}>

            <AnalyticsCard
              title="Growth"
              value="+32%"
              icon={TrendingUp}
            />

          </motion.div>

        </motion.div>

        {/* Charts Section */}
        <motion.div

          variants={container}

          initial="hidden"

          animate="show"

          className="grid grid-cols-3 gap-6 mt-6"
        >

          {/* Main Chart */}
          <motion.div
            variants={fadeUp}
            className="col-span-2"
          >

            <AnalyticsChart />

          </motion.div>

          {/* Revenue */}
          <motion.div variants={fadeUp}>

            <RevenueCard />

          </motion.div>

        </motion.div>

        {/* Bottom Section */}
        <motion.div

          variants={container}

          initial="hidden"

          animate="show"

          className="grid grid-cols-2 gap-6 mt-6"
        >

          <motion.div variants={fadeUp}>

            <TrafficSource />

          </motion.div>

          <motion.div variants={fadeUp}>

            <TrafficSource />

          </motion.div>

        </motion.div>

      </motion.div>

    </AdminPageShell>
  );
};

export default Analytics;