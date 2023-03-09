import cn from "classnames";
import { useState } from "react";
import { BsCheck2, BsFileText, BsX } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { Student } from "../utils/comman-components";

function DetailsPopover({ shown, setShown, data }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div
      className={cn(
        shown ? null : "hidden",
        "h-full w-full absolute top-0 left-0 z-50 flex justify-center items-center backdrop-saturate-100 backdrop-blur-[6px] bg-black bg-opacity-30"
      )}>
      <div className="h-[80%] bg-white rounded-lg shadow-2xl w-max px-20 py-6 flex flex-col overflow-scroll items-center relative">
        <div className="flex justify-between ml-auto sticky top-0">
          <p className=""></p>
          <button
            onClick={() => setShown(false)}
            className="flex items-center font-bold">
            <BsX size={30} strokeWidth={0.3} />
          </button>
        </div>
        <div className="space-y-8 flex flex-col w-[36rem]">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900">
              Title
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:ring-1 focus:border-orange-500 block w-full p-2.5 outline-none"
              placeholder="Title"
              disabled
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900">
              Problem Statement
            </label>
            <textarea
              id="message"
              rows="5"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:ring-1 focus:border-orange-500 outline-none"
              placeholder="Write your problem statement"
              disabled></textarea>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900">
              Requirements
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:ring-1 focus:border-orange-500 outline-none"
              placeholder="Requirements"></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-orange-500 rounded-lg focus:ring-4 focus:ring-orange-300 hover:bg-orange-600 ml-auto shadow">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsPopover;
