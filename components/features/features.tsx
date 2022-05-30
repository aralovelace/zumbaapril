import { Listing } from "../listing";
import Image from "next/image";
export const Features = () => {
  return (
    <div className="relative bg-white dark:bg-gray-800 p-4">
      <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div className="lg:col-start-2 md:pl-20">
          <h4 className="text-2xl leading-8 font-extrabold text-pink-800 dark:text-white tracking-tight sm:leading-9">
            Certifications
          </h4>
          <ul className="mt-10">
            <Listing
              title="ZUMBA® BASIC 1"
              desc="Zumba Certified since February 2021 and still currently a member of Zumba Instructor Network"
              img="basic-1.svg"
            />
            <Listing
              title="ZUMBA® CUE LIKE A PRO"
              desc="Learned how to lead a class like a pro with the most valuable training for improving such as cueing, body movement and student interaction"
              img="cue-like-a-pro-badge.svg"
            />
          </ul>
        </div>
        <div className="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1 h-full">
          <Image
            src="/images/zumba_april.png"
            alt="April Smith Zumba"
            layout="fill"
            className="relative mx-auto shadow-lg rounded w-auto"
          />
          <span className="text-xs text-center block mt-1 text-gray-400">
            Photo with ZES Steve Boedt and ZIN Cristian Cauteruccio
          </span>
        </div>
      </div>
    </div>
  );
};
