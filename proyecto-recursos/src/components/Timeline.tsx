import { useState } from "react";
import { timeline } from "../data/timeline";
import { motion } from "framer-motion";
export function Timeline() {
  const [selected, setSelected] = useState(timeline[0]);

  return (
    <div className="mt-10">
      {/* Línea horizontal */}
      <div className="flex items-center justify-between border-t-4 border-gray-300 relative">
        {timeline.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setSelected(item)}
          >
        <motion.div
  whileHover={{ scale: 1.3 }}
  whileTap={{ scale: 0.9 }}
  animate={{
    scale: selected.year === item.year ? 1.4 : 1,
    backgroundColor: selected.year === item.year ? "#ef4444" : "#2563eb"
  }}
  className="w-4 h-4 rounded-full transition"
/>
            <motion.span
  animate={{
    color: selected.year === item.year ? "#ef4444" : "#000"
  }}
  className="mt-2 text-sm font-semibold"
>
  {item.year}
</motion.span>
          </div>
        ))}
        </div>

      {/* Información del evento */}
     <motion.div
  key={selected.year}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="mt-8 p-6 bg-white shadow-xl rounded-2xl"
>
  <img
  src={selected.image}
  alt={selected.title}
  className="w-full h-64 object-cover rounded-xl mb-4"
/>
        <h3 className="text-2xl font-bold">{selected.title}</h3>
        <p className="mt-2 text-gray-600">{selected.description}</p>
</motion.div>
    </div>
  );
}