// images
import contactImg from "../../assets/images/ConImg.png";

const Email = () => {
  return (
    <section className="pt-20 pb-5">
      <div className="container space-y-10 sm:space-y-14 lg:space-y-20">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[30px] md:text-[36px] font-bold text-blueDark text-center">
            Contacts <span className="text-yellow">us</span>
          </h1>
          <p className="lg:w-[837px] text-[14px] leading-5 md:text-[18px] md:leading-7 text-center">
            We are always ready to help you.
          </p>
        </div>

        <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row">
          <div className="hidden lg:block flex-1">
            <img src={contactImg} alt="" />
          </div>

          <div className="flex-1 flex flex-col gap-4 lg:gap-0 md:justify-between">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-500 py-4 px-4 rounded-md"
            />
            <input
              type="email"
              placeholder="Email Adress"
              className="border border-gray-500 py-4 px-4 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-500 py-4 px-4 rounded-md w-full"
            />
            <textarea
              placeholder="Message"
              className="border border-gray-500 py-4 px-4 rounded-md w-ful h-[200px] resize-none"
            ></textarea>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Email;
