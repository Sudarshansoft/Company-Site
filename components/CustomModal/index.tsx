// CustomModal.js
import Image from "next/image";
import { X } from "lucide-react"; // Ensure this is imported

const CustomModal = ({ member, onClose }) => {
  if (!member) return null; // Do not render if no member is selected

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-lg bg-white px-6 pb-6 pt-12 shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevents modal close when clicking inside
      >
        {/* Close Icon at Top-Right */}
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        {/* Circular Image */}
        <div className="-mt-14 flex w-full justify-center">
          <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-white shadow-lg mt-6">
            <Image
              src={member.image}
              alt={member.name}
              width={112}
              height={112}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Title and Subtitle */}
        <div className="mb-4 mt-4 text-center">
          <h2 className="text-xl font-semibold">{member.name}</h2>
          <p className="text-sm text-gray-600">{member.title}</p>
        </div>

        {/* Scrollable Body */}
        <div className="mb-4 max-h-80 overflow-y-auto pr-1 text-gray-700">
          {member.bio}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;