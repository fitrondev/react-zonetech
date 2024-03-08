// images
import HeroImg from "../../assets/images/Hero.png";
import Star from "../../assets/images/star.svg";
import Profile1 from "../../assets/images/p1.jpg";
import Profile2 from "../../assets/images/p2.jpg";
import Profile3 from "../../assets/images/p3.jpg";
import Ellipse1 from "../../assets/images/Ellipse1.svg";
import Ellipse2 from "../../assets/images/Ellipse2.svg";

const Hero = () => {
  return (
    <section className="relative pt-4 pb-8 lg:pt-[33px] overflow-hidden">
      <div className="hidden lg:block absolute -left-[375px] 2xl:-left-[280px] top-[80px] -z-10">
        <img src={Ellipse1} alt="" />
      </div>

      <div className="hidden lg:block absolute -right-[300px] -top-5 -z-10">
        <img src={Ellipse2} alt="" />
      </div>

      <div className="container flex flex-col lg:flex-row gap-[30px] lg:gap-[100px]">
        <div className="flex flex-col justify-center gap-3 lg:gap-[22px]">
          <h1 className="text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-montserrat font-bold text-blueDark">
            Create your Success <span className="text-yellow">Bussiness</span>
          </h1>

          <p className="text-[14px] md:text-base sm:w-[550px] lg:w-full">
            Welcome to Zonetech Digital Agency! We are here to help you achieve
            success in your digital endeavors.
          </p>

          <div className="py-3 lg:py-[22px]">
            <button className="btn">Explore</button>
          </div>

          <div className="hidden sm:flex items-center gap-20">
            <div className="inline-flex relative">
              <img
                src={Profile2}
                alt=""
                className="w-16 h-16 rounded-full object-cover"
              />

              <img
                src={Profile1}
                alt=""
                className="w-16 h-16 rounded-full object-cover absolute left-8"
              />

              <img
                src={Profile3}
                alt=""
                className="w-16 h-16 rounded-full object-cover absolute left-16"
              />
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-semibold text-textBlack">
                Customer Reviews
              </h3>
              <div className="inline-flex gap-1">
                <img src={Star} alt="" className="h-5 w-5" />
                <p className="text-[14px] text-[#000000] font-semibold">
                  4.8{" "}
                  <span className="text-[10px] text-[#9C9C9C]">
                    (5k reviews)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full">
          <img src={HeroImg} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
