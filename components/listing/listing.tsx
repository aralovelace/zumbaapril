import Image from "next/image";

export const Listing = ({
  title,
  desc,
  img,
}: {
  title: string;
  desc: string;
  img: string;
}) => {
  return (
    <li className="mb-10">
      <div className="flex">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-md  text-white">
            <Image src={`/svg/${img}`} width={40} height={40} />
          </div>
        </div>
        <div className="ml-4">
          <h5 className="text-lg leading-6 text-gray-900 dark:text-white font-bold">
            {title}
          </h5>
          <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
            {desc}
          </p>
        </div>
      </div>
    </li>
  );
};
