import CorouselTeams from "./CorouselTeams";

const OurTeam = () => {
  return (
    <section className="pt-16">
      <div className="container space-y-10 sm:space-y-14 lg:space-y-20">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[30px] md:text-[36px] font-bold text-blueDark text-center">
            Our Master <span className="text-yellow">Brains</span>
          </h1>
          <p className="lg:w-[837px] text-[14px] leading-5 md:text-[18px] md:leading-7 text-center">
            Our team is our biggest asset. We have a team of highly skilled
            professionals. Their work and are always ready to take up new
            challenges.
          </p>
        </div>

        <CorouselTeams />
      </div>
    </section>
  );
};
export default OurTeam;
