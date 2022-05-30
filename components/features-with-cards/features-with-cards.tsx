import { Cards } from "../cards";

export const FeaturesWithCards = () => {
  return (
    <div className="relative bg-white dark:bg-gray-800 p-4">
      <h4 className="text-2xl leading-8 font-extrabold text-pink-800 dark:text-white tracking-tight sm:leading-9 text-center">
        Zumba® World Rhythms E-learnings Completed
      </h4>
      <div className="sm:flex flex-wrap justify-center items-center text-center gap-8 mb-24">
        <Cards
          title="Zumba® World Rhythms: Africa E-Learning"
          image="elearning-africa.svg"
        />
        <Cards
          title="Zumba® World Rhythms: Brazil E-Learning"
          image="elearning-brazil.svg"
          addClass="mt-16 md:mt-20 lg:mt-24"
        />
        <Cards
          title="Zumba® World Rhythms: Caribbean E-Learning"
          image="elearning-caribbean.svg"
        />
      </div>
      <h4 className="text-2xl leading-8 font-extrabold text-pink-800 dark:text-white tracking-tight sm:leading-9 text-center">
        ZIN™ ACADEMY & CONVENTIONS ATTENDED
      </h4>
      <div className="sm:flex flex-wrap justify-center items-center text-center gap-8 mb-24">
        <Cards
          title="ZIN™ ACADEMY UK 2022"
          image="Badge---Academies-2022.png"
          desc="Held in Manchester, a fun-filled day of learning, moving, networking and learning new Rhythms such as Bhangra, Puerto Rican Flow, HIT THE STREETZ and Get Down Jam Session with Zumba Jammers Mauricio Camargo and Rony Gratereaut."
          addClass=""
        />
        <Cards
          title="ZIN™ VIRTUAL CONVENTION 2021"
          image="zincon-virtual-2021.svg"
          desc="Virtual ZIN convention with hours of zumba dancing."
          addClass="lg:-mt-16"
        />
      </div>
    </div>
  );
};
