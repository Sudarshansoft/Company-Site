type Props = {
  title: string;
  desc: string;
  icon: string;
};

const ChooseUsCard = ({ title, desc, icon }: Props) => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition">
      <img src={icon} alt={title} className="w-12 h-12 mb-4" />
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{desc}</p>
    </div>
  );
};

export default ChooseUsCard;
