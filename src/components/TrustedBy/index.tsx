// images
import { companies } from "../../constants/Companies";

const TrustedBy = () => {
  return (
    <section className="py-16">
      <div className="container space-y-6 lg:space-y-[48px]">
        <div>
          <h3 className="text-center text-base sm:text-[22px] text-blueDark">
            Trusted by <span className="text-yellow">100+ Companies</span>{" "}
            Worldwide
          </h3>
        </div>

        <div className="flex items-center flex-wrap sm:flex-wrap md:flex-nowrap justify-center gap-12 lg:gap-14">
          {companies.map((item) => (
            <img
              key={item.id}
              src={item.image}
              alt="company"
              className={`w-[84px] h-[32px] lg:w-[160px] lg:h-[50px] object-contain ${
                item.id === 4 && "pt-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default TrustedBy;
