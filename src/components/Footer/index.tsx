import { AboutUs, ContactUs, Location } from "../../constants/FooterData";

// images
import Logo from "../../assets/images/Logo.svg";

// icons
import { FaDribbble, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

type SocialIcon = {
  id: number;
  icon: JSX.Element;
  url: string;
};

const socialIcons: SocialIcon[] = [
  {
    id: 1,
    icon: <FaDribbble className="w-6 h-6" />,
    url: "https://dribbble.com/",
  },
  {
    id: 2,
    icon: <FaInstagram className="w-6 h-6" />,
    url: "https://www.instagram.com/",
  },
  {
    id: 3,
    icon: <FaGithub className="w-6 h-6" />,
    url: "",
  },
  {
    id: 4,
    icon: <FaTwitter className="w-6 h-6" />,
    url: "https://twitter.com/",
  },
];

const Footer = () => {
  return (
    <footer className="pt-16">
      <section className="bg-[#FFF9F6]">
        <div className="container py-5 lg:py-16 flex items-center justify-center lg:items-start lg:justify-between">
          <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-5 items-center justify-center sm:justify-between lg:items-start lg:justify-start">
            <div className="flex flex-col gap-1 items-center justify-center lg:items-start lg:justify-start">
              <img src={Logo} alt="" className="h-full" />
              <p className="hidden lg:block w-full sm:w-[420px] text-[18px] sm:text-center lg:text-start">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>

            <div className="flex gap-2 cursor-pointer">
              {socialIcons.map((icon) => (
                <div
                  key={icon.id}
                  className="w-12 h-12 bg-blueDark text-yellow rounded-full flex items-center justify-center hover:text-textBlack hover:border hover:border-textBlack hover:bg-white transition-all duration-300 ease-in-out"
                >
                  {icon.icon}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <h3 className="text-yellow text-[18px] font-semibold pb-4">
              About Us
            </h3>
            {AboutUs.map((item) => (
              <div key={item.id}>
                <ul className="pb-2">
                  <li>{item.title}</li>
                </ul>
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <h3 className="text-yellow text-[18px] font-semibold pb-4">
              Location
            </h3>
            {Location.map((item) => (
              <div key={item.id} className="w-[200px]">
                <ul className="pb-2">
                  <li>{item.address}</li>
                </ul>
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <h3 className="text-yellow text-[18px] font-semibold pb-4">
              Contact Us
            </h3>
            {ContactUs.map((item) => (
              <div key={item.id}>
                <ul className="pb-2">
                  <li>{item.item}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
