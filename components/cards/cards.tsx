import Image from "next/image";

export const Cards = ({
  title,
  desc,
  image,
  addClass,
}: {
  title: string;
  desc?: string;
  image: string;
  addClass?: string;
}) => {
  return (
    <div
      className={`w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6 shadow-lg rounded-lg dark:bg-gray-800 ${addClass}`}
    >
      <div className="flex-shrink-0">
        <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md  text-white">
          <Image src={`/svg/${image}`} width={50} height={50} />
        </div>
      </div>
      <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
        {title}
      </h3>
      {desc && (
        <p className="text-md text-gray-500 dark:text-gray-300 py-4">{desc}</p>
      )}
    </div>
  );
};
