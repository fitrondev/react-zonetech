import ServicesCard from "../Card/ServicesCard";

// images
import Shopify from "../../assets/images/Shopify.svg";
import Rocket from "../../assets/images/Rocket.svg";

const OurServices = () => {
  return (
    <section
      className="pt-16 bg-gradient-to-r from-transparent to-orange-50"
      id="2"
    >
      <div className="container space-y-14 sm:space-y-28 lg:space-y-36">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[30px] md:text-[36px] font-bold text-blueDark">
            Our <span className="text-yellow">Services</span>
          </h1>
          <p className="lg:w-[837px] text-[14px] leading-5 md:text-[18px] md:leading-7 text-center">
            We have a wide range of services to offer. We are here to help you.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 sm:gap-16 md:gap-[100px]">
          <ServicesCard
            image={Shopify}
            backgorund="bg-blueDark"
            title="Shopify Development"
            desc="We help you build and customize your online store using the Shopify. We optimizing your store for better performance and conversion rates."
          />
          <ServicesCard
            image={Rocket}
            backgorund="bg-yellow"
            title="Digital Marketing"
            desc="We help you to grow your business with our digital marketing services. We help you to reach your target audience and increase your sales."
          />
        </div>
      </div>
    </section>
  );
};
export default OurServices;
