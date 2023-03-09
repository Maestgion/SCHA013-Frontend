import { useState } from "react";
import { BsBellFill, BsLaptopFill, BsSearch } from "react-icons/bs";
import { GrAnnounce } from "react-icons/gr";
import { TbReport } from "react-icons/tb";
import { CgProfile, CgSpinner } from "react-icons/cg";
import { Club, Student } from "../utils/comman-components";
import { useNavigate } from "react-router-dom";
function ClubDashComp() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    links: [
      {
        title: "16 hours free training program on CRT",
        description:
          "Department of Networking and Communications in collaboration with our MoU partner ExcelR Solution, happy to announce 16 hours free training program on Campus Recruitment Training (CRT) -Interview success with verbal ability and logical reasoning",
      },
      {
        title: "16 hours free training program on CRT",
        description:
          "Department of Networking and Communications in collaboration with our MoU partner ExcelR Solution, happy to announce 16 hours free training program on Campus Recruitment Training (CRT) -Interview success with verbal ability and logical reasoning",
      },
      {
        title: "16 hours free training program on CRT",
        description:
          "Department of Networking and Communications in collaboration with our MoU partner ExcelR Solution, happy to announce 16 hours free training program on Campus Recruitment Training (CRT) -Interview success with verbal ability and logical reasoning",
      },
      {
        title: "16 hours free training program on CRT",
        description:
          "Department of Networking and Communications in collaboration with our MoU partner ExcelR Solution, happy to announce 16 hours free training program on Campus Recruitment Training (CRT) -Interview success with verbal ability and logical reasoning",
      },
    ],
  });
  const [loading, setLoading] = useState(true);

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
    <div className="px-5 py-3 flex gap-4 h-full">
      <section className="flex-1 px-8 py-4 space-y-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-medium">Good {greeting}, Anishka!</h1>
          <div className="flex gap-6">
            <GrAnnounce size={24} />
            <BsSearch size={24} />
            <BsBellFill size={24} />
            <CgProfile size={24} />
          </div>
        </div>
        <div className="flex h-[80%] gap-16 py-6">
          <div className="space-y-12">
            <div className="flex gap-20">
              <div className="h-max p-6 bg-white border border-gray-200 rounded-lg shadow-lg space-y-4 min-w-[24rem]">
                <button href="#" className="flex w-full justify-between">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-500">
                    Report
                  </h5>
                  <TbReport
                    className="fill-orange-500"
                    strokeWidth={1}
                    size={32}
                  />
                </button>
              </div>
              <div className="h-max p-6 bg-white border border-gray-200 rounded-lg shadow-lg space-y-4 min-w-[24rem]">
                <button href="#" className="flex w-full justify-between">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-500">
                    Event Requests
                  </h5>
                  <BsLaptopFill className="fill-orange-500" size={32} />
                </button>
              </div>
            </div>
            <div className="flex gap-20 h-[90%]">
              <div className="h-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg space-y-4 min-w-[24rem]">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-500 flex justify-between border-b">
                  Events
                  <span className="text-orange-500">1057</span>
                </h5>
                <div className="h-[90%] overflow-scroll">
                  {new Array(10).fill(0).map((_, i) => {
                    return (
                      <Student key={i}>
                        <button className="inline-flex items-center px-4 py-2 text-sm font-semibold text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ml-4">
                          View
                        </button>
                      </Student>
                    );
                  })}
                </div>
              </div>
              <div className="h-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg space-y-4 min-w-[24rem]">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-500 flex justify-between border-b">
                  Permission Status
                  <span className="text-orange-500">257</span>
                </h5>
                <div className="h-[90%] overflow-scroll space-y-4">
                  {new Array(4).fill(0).map((_, i) => {
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
              </div>
            </div>
          </div>
          <div className="h-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg space-y-4 min-w-[24rem]">
            <h5 className="mb-6 text-2xl font-bold tracking-tight text-orange-500 flex justify-between border-b">
              Clubs
              <span className="text-orange-500">157</span>
            </h5>
            {new Array(4).fill(0).map((_, i) => {
              return <Club key={i} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClubDashComp;
