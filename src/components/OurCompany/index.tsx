//images
import OurCompanyImage from "../../assets/images/OurCompany.png";

const OurCompany = () => {
  return (
    <section
      className="pt-14 bg-gradient-to-r from-transparent to-orange-50"
      id="3"
    >
      <div className="container flex flex-col-reverse lg:flex-row gap-12 lg:gap-[89px]">
        <div className="flex-1">
          <img src={OurCompanyImage} alt="" />
        </div>

        <div className="flex-1 flex flex-col justify-center gap-8">
          <h1 className="text-[30px] md:text-[36px] font-bold text-blueDark">
            Culture of <span className="text-yellow">Our Company</span>
          </h1>

          <p className="text-[14px] leading-5 md:text-[18px] md:leading-7">
            Culture of our company is the foundation of our success. We believe
            in a culture of collaboration, innovation, and continuous learning.
            We are committed to providing a work environment that encourages
            creativity, teamwork, and personal growth.
          </p>

          <p className="text-[14px] leading-5 md:text-[18px] md:leading-7">
            We are passionate about our work and are dedicated to delivering the
            best results for our clients. Our culture is what sets us apart from
            other digital marketing agencies. We are proud of our team and the
            work we do. Our culture is what makes us unique and drives our
            success.
          </p>
        </div>
      </div>
    </section>
  );
};
export default OurCompany;
