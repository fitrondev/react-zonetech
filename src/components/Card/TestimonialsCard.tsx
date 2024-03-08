// components
import Card from "./Card";

// images
import Star from "../../assets/images/star.svg";

type TestimonialCardProps = {
  currentIndex: number;
  CorouselData: Array<{
    id: number;
    name: string;
    comment: string;
    image?: string;
  }>;
};

const TestimonialsCard = ({
  currentIndex,
  CorouselData,
}: TestimonialCardProps): React.ReactNode => {
  return (
    <>
      {CorouselData.slice(currentIndex, currentIndex + 1).map((item) => (
        <Card
          key={item.id}
          className="bg-white w-[280px] h-[190px] sm:w-[500px] sm:h-[290px] 2xl:w-[650px] 2xl:h-[260px] absolute left-4 -top-20 sm:left-7 lg:left-10 sm:-top-[130px] py-4 sm:py-10 pl-2 sm:pl-6 pr-4 sm:pr-10 space-y-5 sm:space-y-10 rounded-xl shadow-md border-l-[10px] sm:border-l-[19px] border-yellow z-50"
        >
          <div className="border-l border-dashed border-gray-600 pl-2 sm:pl-4">
            <p className="text-[14px] leading-5 sm:text-[18px] sm:leading-8">
              “ {item.comment} “
            </p>
          </div>

          <div className="flex justify-between">
            <div className="text-[14px] sm:text-[18px]">
              <h4 className="text-black">{item.name}</h4>
              <p>Customer</p>
            </div>

            <div className="space-y-1">
              <div className="flex justify-end">
                {[1, 2, 3, 4, 5].map((star) => (
                  <img
                    key={star}
                    src={Star}
                    alt=""
                    className="h-4 w-4 sm:h-6 sm:w-6"
                  />
                ))}
              </div>
              <p className="text-[14px] sm:text-[18px]">12 reviews at Yelp</p>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};
export default TestimonialsCard;
