import cn from "classnames";
import { useState } from "react";
import { BsCheck2, BsFileText, BsX } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { Student } from "../utils/comman-components";

function TeamsPopover({ shown, setShown, data }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div
      className={cn(
        shown ? null : "hidden",
        "h-full w-full absolute top-0 left-0 z-50 flex justify-center items-center backdrop-saturate-100 backdrop-blur-[6px] bg-black bg-opacity-30"
      )}>
      <div className="h-[80%] bg-white rounded-lg shadow-2xl space-y-4 w-max px-10 py-6 flex flex-col items-center relative">
        <div className="h-full rounded-lg min-w-[24rem] overflow-scroll px-4 pb-4">
          <div className="flex items-center gap-4 sticky top-0 bg-white text-sm font-medium text-center text-gray-500 border-b border-gray-200 justify-evenly">
            <div className="w-full">
              <div className="flex justify-between">
                <p className=""></p>
                <button
                  onClick={() => setShown(false)}
                  className="flex items-center font-bold">
                  <BsX size={30} strokeWidth={0.3} />
                </button>
              </div>
              <div className="flex justify-evenly">
                {["Team", "New"].map((tab, index) => {
                  return (
                    <button
                      key={index}
                      className={cn(
                        "inline-block p-4 rounded-t-lg active mr-2 border-b-2",
                        selectedIndex === index
                          ? "text-orange-600 border-orange-600"
                          : "border-transparent hover:text-gray-600 hover:border-gray-300"
                      )}
                      onClick={() => setSelectedIndex(index)}>
                      {tab}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {selectedIndex == 0 && (
              <>
                {new Array(20).fill(0).map((_, i) => {
                  return (
                    <Student className="w-96" key={i}>
                      <button>
                        <BsFileText size={24} />
                      </button>
                    </Student>
                  );
                })}
              </>
            )}
            {selectedIndex == 1 && (
              <>
                {new Array(20).fill(0).map((_, i) => {
                  return (
                    <Student className="w-96" key={i}>
                      <button className="mr-2">
                        <BsFileText size={24} />
                      </button>
                      <button className="mr-2">
                        <BsCheck2 size={28} color="green" strokeWidth={0.5} />
                      </button>
                      <button className="mr-2">
                        <RxCross2 size={28} color="red" />
                      </button>
                    </Student>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamsPopover;
