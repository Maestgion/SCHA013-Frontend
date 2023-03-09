import { BsArrow90DegRight, BsArrowRight } from "react-icons/bs";

function Links({ link }) {
  return (
    <div className="max-w-sm bg-[#FC8019] text-white space-y-2 px-4 py-3 rounded-lg h-max">
      <h1 className="font-bold">{link.title}</h1>
      <p className="text-sm">{link.description}</p>
      <button>
        <BsArrowRight />
      </button>
    </div>
  );
}

export default Links;
