import cn from "classnames";
import { useState } from "react";
import { BsCheck2, BsFileText, BsX } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { Student } from "../utils/comman-components";

function ProposalPopover({ shown, setShown, data }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div
      className={cn(
        shown ? null : "hidden",
        "h-full w-full absolute top-0 left-0 z-50 flex justify-center items-center backdrop-saturate-100 backdrop-blur-[6px] bg-black bg-opacity-30"
      )}>
      <div className="h-[80%] bg-white rounded-lg shadow-2xl w-max px-16 py-10 flex flex-col overflow-scroll items-center justify-center relative">
        <div className="flex justify-between ml-auto mb-auto sticky top-0">
          <p className=""></p>
          <button
            onClick={() => setShown(false)}
            className="flex items-center font-bold">
            <BsX size={30} strokeWidth={0.3} />
          </button>
        </div>
        <div className="space-y-12 flex flex-col mb-auto w-[36rem]">
          <div>
            <label
              htmlFor="position"
              className="block mb-2 text-sm font-medium text-gray-900">
              Your Position
            </label>
            <input
              type="text"
              id="position"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
              placeholder="position"
              required
            />
          </div>
          <div>
            <label
              htmlFor="resume"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your resume link
            </label>
            <input
              type="url"
              id="resume"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              htmlFor="testimonials"
              className="block mb-2 text-sm font-medium text-gray-900">
              Your Testimonials link
            </label>
            <input
              type="url"
              id="testimonials"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex ml-auto">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProposalPopover;
