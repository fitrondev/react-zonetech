import { TeamsData } from "../../constants/TeamsData";

// components
import TeamsCard from "../Card/TeamsCard";

// react-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// icons
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function NextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} w-14 h-14 !flex top-[102%] right-[38%] !items-center !justify-center rounded-full z-50`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FaAngleRight className="w-7 h-7" />
    </div>
  );
}

function PrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} w-14 h-14 !flex top-[102%] left-[38%] !items-center !justify-center rounded-full z-50`}
      style={{ ...style }}
      onClick={onClick}
    >
      <div>
        <FaAngleLeft className="w-7 h-7" />
      </div>
    </div>
  );
}

const CorouselTeams = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {TeamsData.map((item) => (
          <div key={item.id} className="!flex !justify-center !items-center">
            <TeamsCard item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default CorouselTeams;
