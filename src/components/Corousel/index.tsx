// icons
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

type CorouselProps = {
  prev: () => void;
  next: () => void;
  currentIndex: number;
  Images: Array<{
    id: number;
    name: string;
    image: string;
  }>;
};

const Corousel: React.FC<CorouselProps> = ({
  prev,
  next,
  currentIndex,
  Images,
}) => {
  return (
    <div className="relative w-full h-[350px] sm:w-[400px] sm:h-[500px] 2xl:w-[500px] 2xl:h-[500px] flex items-center justify-center">
      <button
        className="absolute -left-10 sm:-left-5 w-9 h-9 rounded-full bg-white flex items-center justify-center border-2 border-blueDark z-50"
        onClick={prev}
      >
        <FaAngleLeft className="w-4 h-4 text-blueDark" />
      </button>

      <div className="relative flex overflow-hidden w-full h-full rounded-xl">
        {Images.slice(currentIndex, currentIndex + 1).map((item) => (
          <div className="relative" key={item.id}>
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-20" />
          </div>
        ))}
      </div>

      <button
        className="absolute -right-10 sm:-right-5 w-9 h-9 rounded-full bg-white flex items-center justify-center border-2 border-blueDark z-50"
        onClick={next}
      >
        <FaAngleRight className="w-4 h-4 text-blueDark" />
      </button>
    </div>
  );
};
export default Corousel;
