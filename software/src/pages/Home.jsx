import { motion } from "framer-motion";

export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center h-full">

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-7xl font-bold mb-8"
      >
        Historia Argentina
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-2xl text-gray-400"
      >
        1930 - 1982
      </motion.p>

    </div>
  );
}