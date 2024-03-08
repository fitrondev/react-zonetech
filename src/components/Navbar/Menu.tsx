// constants
import { NavMenu } from "../../constants/NavMenu";

const Menu = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-10 text-textBlack">
        {NavMenu.map((item) => (
          <li
            key={item.id}
            className="text-[20px] cursor-pointer hover:text-yellow hover:border-b hover:border-yellow transition-all duration-100 ease-in-out"
          >
            <a href={`#${item.id}`}>{item.title}</a>
            <div className="" />
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Menu;
