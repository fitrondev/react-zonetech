import { useState } from "react";
import { CorouselData } from "../../constants/CorouselData";

// components
import TestimonialsCard from "../Card/TestimonialsCard";
import Corousel from "../Corousel";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex === CorouselData.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(CorouselData.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="pt-14 bg-gradient-to-r from-transparent to-orange-50">
      <div className="container space-y-10 sm:space-y-14 lg:space-y-20">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[30px] md:text-[36px] font-bold text-blueDark text-center">
            Case Studies <span className="text-yellow">and Testimonials</span>
          </h1>
          <p className="lg:w-[837px] text-[14px] leading-5 md:text-[18px] md:leading-7 text-center">
            We have worked with a clients from different industries and have
            helped them achieve their goals. Here's what they have to say about.
          </p>
        </div>

        <div className="flex flex-col sm:items-center justify-center lg:flex-row gap-12 lg:gap-[89px] ">
          <div className="flex-1 flex items-center">
            <div className="w-[500px] h-auto space-y-2 md:space-y-8">
              <h3 className="text-[28px] md:text-[36px] sm:text-center lg:text-start text-blueDark font-semibold">
                What They Say ?
              </h3>

              <div className="text-[16px] leading-6 lg:text-[18px] lg:leading-7 sm:text-center lg:text-start space-y-4 md:space-y-10">
                <p>
                  Zone Tech Digital Agency has significantly improved our
                  overall digital marketing strategy. Highly recommended.
                </p>

                <p>
                  The team at Zone Tech Digital Agency is knowledgeable and
                  experienced in digital marketing. A great partner.
                </p>

                <p>
                  Their innovative approach to digital marketing has helped our
                  business grow. We are very satisfied.
                </p>
              </div>
            </div>
          </div>

          {/* 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center */}
          <div className="relative flex-1 h-[660px] px-7">
            <Corousel
              next={next}
              prev={prev}
              currentIndex={currentIndex}
              Images={CorouselData}
            />
            <TestimonialsCard
              currentIndex={currentIndex}
              CorouselData={CorouselData}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
