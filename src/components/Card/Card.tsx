type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`relative bg-white ${className}`}>{children}</div>;
};
export default Card;
