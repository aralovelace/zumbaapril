export const Header = () => {
  return (
    <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row relative py-16">
        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
          <span className="w-20 h-2 bg-pink-800 dark:bg-white mb-12"></span>
          <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-pink-800">
            APRIL SMITH
          </h1>
          <p className="text-base sm:text-lg text-gray-700 dark:text-white font-medium my-2">
            A Full-time Web Engineer and{" "}
            <span className="font-bold block text-xl">
              CERTIFIED ZUMBA® INSTRUCTOR
            </span>
            in Colchester, Essex
          </p>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white">
            I love Dancing! I have been dancing Zumba for over 5 years now, and
            decided to share my passion and happiness by becoming a Zumba
            Instructor.
          </p>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white mt-2">
            I started teaching Zumba online during the Pandemic and am now
            teaching in a gym as a cover teacher.
          </p>
          <div className="flex mt-8">
            <a
              href="https://www.instagram.com/aralovelace/"
              target="_blank"
              className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
              rel="noreferrer"
            >
              Follow me on Instagram
            </a>
            <a
              href="https://www.zumba.com/en-US/profile/april-smith/1939360"
              target="_blank"
              className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
              rel="noreferrer"
            >
              My ZUMBA PAGE
            </a>
          </div>
        </div>
        <div className="w-full lg:w-3/5 relative ml-0 lg:ml-14 mt-12">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WaJofwQnbfM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
