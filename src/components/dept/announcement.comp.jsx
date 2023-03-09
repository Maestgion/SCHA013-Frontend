import { useState } from "react";
import { AiFillHome, AiFillTrophy } from "react-icons/ai";
import { BsBellFill, BsLaptopFill, BsSearch } from "react-icons/bs";
import { CgMenuGridR, CgProfile, CgSpinner } from "react-icons/cg";
import StudentPopover from "../popover/student.popover";

const reader = new FileReader();

function AnnouncementComp() {
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
  const [file, setFile] = useState("");

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
      <section className="flex flex-col px-8 py-2 items-center space-y-6 mr-auto w-[80%]">
        <div className="flex justify-between w-full mb-4">
          <h1 className="text-2xl font-medium">Good {greeting}, Anishka!</h1>
          <div className="flex gap-6">
            <BsSearch size={24} />
            <BsBellFill size={24} />
            <CgProfile size={24} />
          </div>
        </div>
        <div className="space-y-8 flex flex-col w-[80%]">
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
              required
            />
          </div>
          <div>
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">To</h3>
            <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id="vue-checkbox-list"
                    type="checkbox"
                    value="faculties"
                    class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <label
                    for="vue-checkbox-list"
                    class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Faculties
                  </label>
                </div>
              </li>
              <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id="react-checkbox-list"
                    type="checkbox"
                    value="students"
                    class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <label
                    for="react-checkbox-list"
                    class="w-full py-3 ml-2 text-sm font-medium text-gray-900">
                    Students
                  </label>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900">
              Announcement
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:ring-1 focus:border-orange-500 outline-none"
              placeholder="Announcement"></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-orange-500 rounded-lg focus:ring-4 focus:ring-orange-300 hover:bg-orange-500 ml-auto shadow">
            Submit
          </button>
        </div>
      </section>
    </div>
  );
}

export default AnnouncementComp;
