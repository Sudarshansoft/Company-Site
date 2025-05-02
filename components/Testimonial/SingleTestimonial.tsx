import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content } = review;

  return (
    <div className="rounded-lg bg-white p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <div>
          <h3 className="mb-1.5 text-metatitle3 text-black dark:text-white">
            {name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {designation}
          </p>
        </div>
        {/* Add a wrapper div to enforce the circular shape */}
        <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
          <Image
            width={60}
            height={60}
            src={image}
            alt={`Photo of ${name}`}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300">{content}</p>
    </div>
  );
};

export default SingleTestimonial;