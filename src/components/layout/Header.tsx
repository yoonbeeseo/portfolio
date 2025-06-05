import { useApp } from "../../useApp";

const Header = () => {
  const { refs, menus } = useApp();
  return (
    <div className="max-w-300 mx-auto w-full flex-row ">
      <button
        className="h-15 px-2 text-2xl font-light hover:text-primary"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Dexter Yoon
      </button>
      <ul>
        {menus.map((item, i) => (
          <li key={item}>
            <button
              onClick={() =>
                refs[i].current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
