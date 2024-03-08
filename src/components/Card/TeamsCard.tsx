import Card from "./Card";

type TeamsCardProps = {
  item: {
    id: number;
    name: string;
    images: string;
    position: string;
    comment: string;
  };
};

const TeamsCard: React.FC<TeamsCardProps> = ({ item }) => {
  return (
    <Card className="w-[350px] sm:w-[520px] md:w-[350px] lg:w-[390px] sm:h-[450px] bg-white flex flex-col items-center justify-center rounded-xl shadow-lg border border-gray-300 gap-5 mt-6 mb-10 p-4 z-5">
      <div className="w-36 h-36 rounded-full">
        <img
          src={item.images}
          alt=""
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <div className="text-center">
        <h3 className="text-[18px] font-semibold text-black">{item.name}</h3>
        <p className="text-sm md:text-base">{item.position}</p>
      </div>

      <div>
        <p className="text-center text-[15px] sm:text-[18px]">
          " {item.comment} "
        </p>
      </div>
    </Card>
  );
};
export default TeamsCard;
