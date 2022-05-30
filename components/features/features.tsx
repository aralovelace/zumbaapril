import { Listing } from "../listing";
import Image from "next/image";
export const Features = () => {
  return (
    <div className="relative bg-white dark:bg-gray-800 p-4">
      <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div className="lg:col-start-2 md:pl-20">
          <h4 className="text-2xl leading-8 font-extrabold text-pink-800 dark:text-white tracking-tight sm:leading-9">
            Certifications & Qualitifcations
          </h4>
          <ul className="mt-10">
            <Listing
              title="ZUMBA® BASIC 1"
              desc="Zumba Certified since February 2021 and currently a member of Zumba Instructor Network"
              img="basic-1.svg"
            />
            <Listing
              title="ZUMBA® CUE LIKE A PRO"
              desc="Learned how to lead a class like a pro with the most valuable training for improving such as cueing, body movement and student interaction"
              img="cue-like-a-pro-badge.svg"
            />
            <Listing
              title="ZUMBA® GLUTES"
              desc="Learned safe and effective techniques for improving the glutes and how to integrate glute specific moves into our choreography."
              img="elearning-glutes.svg"
            />

            <Listing
              title="TAKE THE LEAD"
              desc="A workshop for building Confidence and Connections gives you the skills to leave a lasting impression on students from the front row to the back of the class"
              img="take-the-lead-badge.png"
            />

            <Listing
              title="DBS Check"
              desc="with Certification"
              img="dbs-check.png"
            />

            <Listing
              title="Public Liability Insurance"
              desc="Have active insurance as a Fitness Instructor"
              img="insurance.png"
            />
          </ul>
        </div>
        <div className="mt-0  relative lg:mt-0 lg:col-start-1 mx-auto">
          <Image
            src="/images/zumba_april.png"
            alt="April Smith Zumba"
            width={500}
            height={600}
            className="relative mx-auto shadow-lg rounded w-auto"
          />
          <span className="text-xs block mt-1 text-gray-600">
            Photo with ZES Steve Boedt and ZIN Cristian Cauteruccio
          </span>
        </div>
      </div>
    </div>
  );
};
