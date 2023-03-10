import { useState } from "react";
import {
  BsArrowRight,
  BsBellFill,
  BsFilePost,
  BsLaptopFill,
  BsPlus,
  BsSearch,
} from "react-icons/bs";
import { CgAdd, CgProfile, CgSpinner } from "react-icons/cg";
import Links from "../student/Links";
import { Club, Student } from "../utils/comman-components";
import { useNavigate } from "react-router-dom";
function FacultyComp() {
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
      <section className="flex-1 px-8 py-4 space-y-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-medium">
            Good {greeting}, Renuka Devi!
          </h1>
          <div className="flex items-center gap-6">
            <button onClick={() => navigate("/post")}>
              <BsPlus size={40} />
            </button>
            <BsSearch size={24} />
            <BsBellFill size={24} />
            <CgProfile size={24} />
          </div>
        </div>
        <div className="flex h-[90%] gap-20 py-6">
          <div className="space-y-16">
            <div className="flex gap-20">
              <div className="h-max p-6 bg-white border border-gray-200 rounded-lg shadow space-y-4 min-w-[24rem]">
                <a href="#" className="flex justify-between">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Inhouse Projects
                  </h5>
                  <BsLaptopFill size={32} />
                </a>
                <button
                  className="inline-flex items-center px-4 py-2 text-sm font-semibold text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 mr-4 "
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/facproj");
                  }}>
                  Accepted{" "}
                  <span className="text-green-600 ml-2 font-extrabold">5</span>
                </button>
                <button className="inline-flex items-center px-4 py-2 text-sm font-semibold text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">
                  Rejected
                </button>
              </div>
              <div className="h-max p-6 bg-white border border-gray-200 rounded-lg shadow space-y-4 min-w-[24rem]">
                <a href="#" className="flex justify-between">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Research Papers
                  </h5>
                  <BsLaptopFill size={32} />
                </a>
                <button
                  className="inline-flex items-center px-4 py-2 text-sm font-semibold text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 mr-4"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/facppr");
                  }}>
                  Accepted{" "}
                  <span className="text-green-600 ml-2 font-extrabold">5</span>
                </button>
                <button className="inline-flex items-center px-4 py-2 text-sm font-semibold text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">
                  Rejected
                </button>
              </div>
            </div>
            <div className="flex gap-20">
              <div className="h-max p-6 bg-white border border-gray-200 rounded-lg shadow space-y-4 min-w-[24rem]">
                <div className="flex items-center justify-between">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Students
                  </h5>
                  <button
                    className="flex items-center gap-1"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/facstud");
                    }}>
                    View all <BsArrowRight />
                  </button>
                </div>
                {new Array(4).fill(0).map((_, i) => {
                  return (
                    <Student key={i}>
                      <button className="inline-flex items-center px-4 py-2 text-sm font-semibold text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ml-4">
                        View
                      </button>
                    </Student>
                  );
                })}
              </div>
              <div className="h-max p-6 bg-white border border-gray-200 rounded-lg shadow space-y-4 min-w-[24rem]">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 flex flex-col justify-between">
                  Clubs
                </h5>
                {new Array(4).fill(0).map((_, i) => {
                  return <Club key={i} />;
                })}
              </div>
            </div>
          </div>
          <div className="w-96 flex flex-col items-end gap-6 overflow-scroll scrollbar-hidden">
            {data.links.map((link, index) => {
              return <Links link={link} key={index} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FacultyComp;
