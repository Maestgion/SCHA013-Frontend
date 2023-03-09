import { useState } from "react";
import { AiFillHome, AiFillTrophy } from "react-icons/ai";
import {
  BsArrowRight,
  BsBellFill,
  BsCheck2,
  BsFileText,
  BsLaptopFill,
  BsSearch,
} from "react-icons/bs";
import { CgMenuGridR, CgProfile, CgSpinner } from "react-icons/cg";
import StudentPopover from "../popover/student.popover";
import { Previous, Student } from "../utils/comman-components";
import cn from "classnames";
import { RxCross2 } from "react-icons/rx";

function ClubStudentsComp() {
  const [data, setData] = useState({
    previous: [
      {
        title:
          "Sentry's Postman collection will allow you to get familiar and work with the...",
        description:
          "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        link: "#",
        feedback: "No uniqueness in the given idea. Think something new.",
        timeStamp: 1678204526107,
      },
      {
        title:
          "Sentry's Postman collection will allow you to get familiar and work with the...",
        description:
          "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        link: "#",
        feedback: "No uniqueness in the given idea. Think something new.",
        timeStamp: 1678204526107,
      },
    ],
  });
  const [loading, setLoading] = useState(true);
  const [shown, setShown] = useState(false);
  const [popupData, setPopupData] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tempArr = new Array(2).fill();

  const greeting = new Date().getHours() > 12 ? "evening" : "morning";

  new Promise((resolve) => {
    setTimeout(() => {
      setLoading(false);
      resolve();
    }, 1500);
  });

  if (loading) {
    return (
      <div className="h-full w-full grid place-items-center">
        <CgSpinner className="spinner" size={24} />
      </div>
    );
  }

  return (
    <div className="px-5 py-3 flex gap-4 h-full justify-center">
      <StudentPopover shown={shown} setShown={setShown} data={{}} />
      <nav className="bg-orange-500 rounded-3xl px-2 py-6 flex flex-col gap-20 fill-white text-white items-center h-full mr-auto">
        <div id="logo">
          <a href="/">
            <img
              className="h-7 w-auto filter-[#fff]"
              src="/assets/srmhub.svg"
              alt=""
            />
          </a>
        </div>
        <div id="links" className="space-y-8">
          <div>
            <a href="">
              <AiFillHome size={32} />
            </a>
          </div>
          <div>
            <a href="">
              <AiFillTrophy size={32} />
            </a>
          </div>
          <div>
            <a href="">
              <BsLaptopFill size={32} />
            </a>
          </div>
          <div>
            <a href="">
              <CgMenuGridR size={32} />
            </a>
          </div>
        </div>
      </nav>
      <section className="flex flex-col justify-between px-8 py-2 space-y-6 mr-auto w-[80%]">
        <div className="flex justify-between">
          <h1 className="text-2xl font-medium">Good {greeting}, Anishka!</h1>
          <div className="flex gap-6">
            <BsSearch size={24} />
            <BsBellFill size={24} />
            <CgProfile size={24} />
          </div>
        </div>
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 flex justify-evenly">
          {["Report", "Requests", "Projects"].map((tab, index) => {
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
        {selectedIndex == 0 && (
          <div className="flex h-[80%] justify-center w-full gap-20">
            <div className="h-full bg-white border border-gray-200 rounded-lg shadow space-y-4 min-w-[24rem] overflow-scroll px-4 pb-4">
              <div className="flex items-center justify-between sticky top-0 bg-white pt-4 pb-2 border-b">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Students
                </h5>
                <button className="flex items-center gap-1">
                  View all <BsArrowRight />
                </button>
              </div>
              {new Array(20).fill(0).map((_, i) => {
                return (
                  <Student className="w-96" key={i}>
                    <button>
                      <BsFileText size={24} />
                    </button>
                    <button
                      onClick={() => {
                        setPopupData(); // set popup data
                        setShown(true);
                      }}
                      className="inline-flex items-center px-4 py-2 text-sm font-semibold text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ml-4">
                      View
                    </button>
                  </Student>
                );
              })}
            </div>
            <div className="space-y-10 h-full flex flex-col">
              <div className="h-max bg-white border border-gray-200 rounded-lg shadow space-y-4 min-w-[24rem] p-4">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-500">
                    <tbody>
                      <tr className="bg-white">
                        <th
                          scope="row"
                          className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                          Classroom:
                        </th>
                        <td className="px-6 py-2">CSE D1 (TP714)</td>
                      </tr>
                      <tr className="bg-white">
                        <th
                          scope="row"
                          className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                          Department:
                        </th>
                        <td className="px-6 py-2">CTECH</td>
                      </tr>
                      <tr className="bg-white">
                        <th
                          scope="row"
                          className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                          No. of students:
                        </th>
                        <td className="px-6 py-2">62</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="h-full bg-white border border-gray-200 rounded-lg shadow space-y-4 min-w-[24rem] overflow-scroll px-4 pb-4">
                <div className="flex items-center justify-between sticky top-0 bg-white pt-4 pb-2 border-b">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Events
                  </h5>
                  <button className="flex items-center gap-1">
                    View all <BsArrowRight />
                  </button>
                </div>
                {new Array(20).fill(0).map((_, i) => {
                  return (
                    <Student
                      key={i}
                      className="w-96"
                      details={
                        <p className="px-14 flex flex-wrap w-[22rem] h-[34px] text-gray-500 leading-4 overflow-hidden">
                          Found a 2 rupee coin in front of UB Building and
                          handed it to Bhagwanji
                        </p>
                      }>
                      <button className="inline-flex items-center px-4 py-2 text-sm font-semibold text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ml-4">
                        View
                      </button>
                    </Student>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {selectedIndex == 1 && (
          <div className="flex h-[80%] w-full gap-40">
            <div className="flex justify-evenly w-full">
              <div className="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow">
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
                  Received requests
                </h5>
                {tempArr.length > 0 ? (
                  <div className="space-y-6 h-[94%] pb-4 overflow-scroll">
                    {tempArr.map((_, i) => {
                      return (
                        <Student key={i} className="w-96">
                          <button className="mr-2">
                            <BsFileText size={24} />
                          </button>
                          <button className="mr-2">
                            <BsCheck2
                              size={28}
                              color="green"
                              strokeWidth={0.5}
                            />
                          </button>
                          <button className="mr-2">
                            <RxCross2 size={28} color="red" />
                          </button>
                        </Student>
                      );
                    })}
                  </div>
                ) : (
                  <div className="h-full w-96 flex justify-center items-center">
                    No requests
                  </div>
                )}
              </div>
              <div className="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow">
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
                  Request status
                </h5>
                {tempArr.length > 0 ? (
                  <div className="space-y-6 h-[94%] pb-4 overflow-scroll">
                    {tempArr.map((_, i) => {
                      return (
                        <Student
                          key={i}
                          className="w-96"
                          details={
                            <div className="pl-14 pr-4">
                              <div className="flex justify-between mb-1">
                                <span className="text-base font-medium">
                                  Campus Director
                                </span>
                                <span className="text-sm font-medium">45%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                  className="bg-orange-500 h-2.5 rounded-full"
                                  style={{ width: "45%" }}></div>
                              </div>
                            </div>
                          }
                        />
                      );
                    })}
                  </div>
                ) : (
                  <div className="h-full w-96 flex justify-center items-center">
                    No pending request status
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {selectedIndex == 2 && (
          <div className="flex h-[80%] justify-center w-full gap-40">
            <div className="flex flex-col gap-6">
              {data.previous.map((previous, i) => (
                <Previous key={i} previous={previous} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default ClubStudentsComp;
