import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  title: string;
  desc: string;
  icon: ReactNode;
};

const ChooseUsCard = ({ title, desc, icon }: Props) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="w-full p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center"
    >
      <div className="mb-4 w-14 h-14 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{desc}</p>
    </motion.div>
  );
};

export default ChooseUsCard;
