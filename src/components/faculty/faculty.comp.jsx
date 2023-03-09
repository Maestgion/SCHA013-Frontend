import { useState } from "react";
import { AiFillHome, AiFillTrophy } from "react-icons/ai";
import { BsBellFill, BsLaptopFill, BsSearch } from "react-icons/bs";
import { CgMenuGridR, CgProfile, CgSpinner } from "react-icons/cg";
import cn from "classnames";

function FacultyComp() {
  const [data, setData] = useState({
    ongoing: [
      {
        title: "Noteworthy technology acquisitions 2021",
        description:
          "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        link: "#",
      },
      {
        title: "Noteworthy technology acquisitions 2021",
        description:
          "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        link: "#",
      },
    ],
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
  const [selectedIndex, setSelectedIndex] = useState(0);

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
      <nav className="bg-[#FC8019] rounded-3xl px-2 py-6 flex flex-col gap-20 fill-white text-white items-center h-full">
        <div id="logo">
          <a href="/">
            <svg
              className="h-7 w-auto fill-white"
              viewBox="0 0 149 76"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M34 64.5V1h11v22c1.167-.333 4.2-1.3 7-2.5 3.5-1.5 8.5-2 13.5 1.5S73 34 73 43.5s4 11 9.5 11c4.4 0 6.5-4.667 7-7V1h11l1 23.5c1-1 4-3.2 8-4 5-1 9-.5 14.5 2.5s11.5 11 11 19-3 13-11 20-21.5 1-23.5 0 1-5 2-7.5 2-3.5 4.5-1 4 1.5 7 1.5 6-2.5 8-5.5 1-10 0-13-4.5-6-8-6-5.5 0-9.5 3.5-2.5 9.5-3 13.5S99 57 95 60.5s-9 4-15.5 4S70 62 66.5 59 62 47.5 62 43.5s0-8.5-1.5-11-4-2-8.5-2c-3.6 0-6.167 4-7 6v28H34z" />
              <path d="M12.234 50.925c-.868.093-1.544.484-2.028 1.173-.484.683-.726 1.571-.726 2.665 0 .769.116 1.428.348 1.979.232.55.547.97.945 1.262.398.292.851.441 1.362.448.424 0 .792-.096 1.104-.289.311-.198.576-.467.795-.805.212-.338.391-.713.537-1.124.146-.41.268-.825.368-1.242l.477-1.91c.18-.769.421-1.508.726-2.217a7.814 7.814 0 011.154-1.919 5.117 5.117 0 011.68-1.352c.656-.332 1.425-.497 2.307-.497 1.193 0 2.243.304 3.152.914.901.61 1.607 1.492 2.118 2.645.503 1.147.755 2.536.755 4.166 0 1.585-.245 2.96-.736 4.127-.49 1.16-1.206 2.068-2.147 2.724-.942.65-2.088 1.001-3.44 1.054v-3.629c.709-.053 1.299-.272 1.77-.656.47-.385.821-.885 1.053-1.502.232-.623.348-1.319.348-2.088 0-.802-.12-1.505-.358-2.108-.245-.61-.583-1.087-1.014-1.431a2.45 2.45 0 00-1.531-.528c-.53.007-.968.163-1.313.468-.351.305-.643.732-.875 1.282-.238.544-.45 1.18-.636 1.91l-.597 2.316c-.43 1.677-1.083 3.003-1.958 3.978-.882.967-2.052 1.451-3.51 1.451-1.2 0-2.25-.325-3.152-.974-.902-.656-1.601-1.548-2.098-2.675-.504-1.127-.756-2.403-.756-3.828 0-1.445.252-2.711.756-3.798.497-1.094 1.19-1.952 2.078-2.575.881-.624 1.896-.945 3.042-.965v3.55zM27 43.808H6.636v-7.636c0-1.565.272-2.877.816-3.938.543-1.067 1.306-1.873 2.287-2.416.974-.55 2.11-.826 3.41-.826 1.306 0 2.44.279 3.4.836.955.55 1.694 1.362 2.218 2.436.517 1.074.776 2.393.776 3.957v5.44H16.48v-4.943c0-.914-.126-1.663-.378-2.247-.258-.583-.633-1.014-1.123-1.292-.497-.285-1.107-.428-1.83-.428-.722 0-1.339.143-1.85.428-.516.285-.907.719-1.173 1.302-.271.584-.407 1.336-.407 2.257v3.381H27v3.689zm-9.227-10.52L27 28.247v4.116l-9.227 4.952v-4.027zM6.636 25.597v-4.514l14.756-6.046V14.8L6.636 8.753V4.24H27v3.54H13.01v.189l13.93 5.627v2.645l-13.96 5.628v.19H27v3.539H6.636zm135.336 38.778a3.658 3.658 0 01-2.66-1.09c-.738-.728-1.102-1.614-1.09-2.66-.012-1.023.352-1.898 1.09-2.625a3.658 3.658 0 012.66-1.09c1 0 1.869.363 2.608 1.09.75.727 1.13 1.602 1.142 2.625a3.644 3.644 0 01-.546 1.892 3.912 3.912 0 01-1.364 1.364c-.556.33-1.17.494-1.84.494z" />
            </svg>
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
      <section className="flex px-8 py-4 w-full">
        <div className="flex w-full justify-center gap-6">
          <div className="space-y-6 w-[65%]">
            <h1 className="text-2xl font-medium">
              Good {greeting}, Renuka Devi!
            </h1>

            <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
              <ul class="flex flex-wrap -mb-px">
                {["New", "Ongoing", "Previous"].map((tab, index) => {
                  return (
                    <button
                      class={cn(
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
              </ul>
            </div>
            {selectedIndex == 0 && (
              <div className="space-y-8 flex flex-col">
                <div>
                  <label
                    htmlFor="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900">
                    Title
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:ring-1 focus:border-orange-500 block w-full p-2.5 outline-none"
                    placeholder="Title"
                    required
                  />
                </div>
                <div>
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900">
                    Problem Statement
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:ring-1 focus:border-orange-500 outline-none"
                    placeholder="Write your problem statement"></textarea>
                </div>
                <div>
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900">
                    Solution
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:ring-1 focus:border-orange-500 outline-none"
                    placeholder="Propose your solution"></textarea>
                </div>
                <button
                  type="submit"
                  class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-orange-500 rounded-lg focus:ring-1 focus:ring-slate-900 dark:focus:ring-orange-600 hover:bg-orange-600 ml-auto">
                  Publish post
                </button>
              </div>
            )}
            {selectedIndex == 1 && (
              <div className="grid grid-cols-2 gap-6">
                {data.ongoing.map((ongoing) => {
                  return (
                    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          {ongoing?.title}
                        </h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700">
                        {ongoing?.description}
                      </p>
                      <a
                        href={ongoing?.link}
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300">
                        Read more
                        <svg
                          aria-hidden="true"
                          class="w-4 h-4 ml-2 -mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </a>
                    </div>
                  );
                })}
              </div>
            )}
            {selectedIndex == 2 && (
              <div className="flex flex-col gap-6">
                {data.previous.map((previous) => {
                  return (
                    <div class="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl hover:bg-gray-100 h-52">
                      <div class="w-full rounded-t-lg h-96 md:h-auto md:w-2/5 md:rounded-none md:rounded-l-lg p-4 justify-between flex flex-col">
                        <p class="mb-3 font-normal text-gray-700">
                          {previous?.feedback}
                        </p>
                        <p class="mb-3 font-normal text-gray-700">
                          {previous?.timeStamp}
                        </p>
                      </div>
                      <div class="flex flex-col justify-between p-4 leading-normal">
                        <div>
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 h-16 overflow-hidden overflow-ellipsis">
                            {previous?.title}
                          </h5>
                          <p class="mb-3 font-normal text-gray-700">
                            {previous?.description}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <a
                            href={previous?.link}
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300">
                            Read more
                            <svg
                              aria-hidden="true"
                              class="w-4 h-4 ml-2 -mr-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-6">
          <BsSearch size={24} />
          <BsBellFill size={24} />
          <CgProfile size={24} />
        </div>
      </section>
    </div>
  );
}

export default FacultyComp;
