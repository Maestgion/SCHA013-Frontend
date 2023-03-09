import { useState } from "react";
import { AiFillHome, AiFillTrophy } from "react-icons/ai";
import { BsBellFill, BsLaptopFill, BsSearch } from "react-icons/bs";
import { CgMenuGridR, CgProfile, CgSpinner } from "react-icons/cg";
import ProposalPopover from "../popover/proposal.popover";
import StudentPopover from "../popover/student.popover";

const reader = new FileReader();

function ProposalsComp() {
  const [data, setData] = useState({
    post: [
      {
        imageUrl: "https://mozofest.srmkzilla.net/assets/mozofest-icon.svg",
        facultyName: "Renuka Devi",
        proposalTitle:
          "The urgent requirement of cleaning the unclean college premises",
        proposalDescription:
          "When I was at Google I worked with a lot of designers, and i’ve been very impressed by humbleteam.",
        proposalRequirements: `Open for all 3rd year students,
        Web Developer - MERN
        AI/ML - NLP
        App Developer - Flutter`,
      },
      {
        imageUrl: "https://mozofest.srmkzilla.net/assets/mozofest-icon.svg",
        facultyName: "Renuka Devi",
        proposalTitle:
          "The urgent requirement of cleaning the unclean college premises",
        proposalDescription:
          "When I was at Google I worked with a lot of designers, and i’ve been very impressed by humbleteam.",
        proposalRequirements: `Open for all 3rd year students,
        Web Developer - MERN
        AI/ML - NLP
        App Developer - Flutter`,
      },
      {
        imageUrl: "https://mozofest.srmkzilla.net/assets/mozofest-icon.svg",
        facultyName: "Renuka Devi",
        proposalTitle:
          "The urgent requirement of cleaning the unclean college premises",
        proposalDescription:
          "When I was at Google I worked with a lot of designers, and i’ve been very impressed by humbleteam.",
        proposalRequirements: `Open for all 3rd year students,
        Web Developer - MERN
        AI/ML - NLP
        App Developer - Flutter`,
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
      <ProposalPopover shown={shown} setShown={setShown} data={{}} />
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
        <div className="space-y-20 flex flex-col w-[80%] h-[90%]">
          <div className="flex-1 overflow-scroll scrollbar-hidden">
            <div className="grid grid-cols-2 gap-x-10 gap-y-20">
              {data.post.map((post, i) => {
                return (
                  <div key={i} className="space-y-4 w-96">
                    <div className="flex gap-2 items-center">
                      <img
                        src={post?.imageUrl}
                        alt={post?.facultyName}
                        className="h-6"
                      />
                      <p className="text-lg font-medium">{post?.facultyName}</p>
                    </div>
                    <div className="flex h-full items-center bg-white border border-gray-200 rounded-2xl shadow-lg hover:bg-gray-100">
                      <div className="h-full w-12 bg-orange-500 rounded-l-lg"></div>
                      <div className="p-4 space-y-4">
                        <p className="text-xl font-medium">
                          {post?.proposalTitle}
                        </p>
                        <p className="text-gray-500">
                          {post?.proposalDescription}
                        </p>
                        <p className="text-black font-medium">
                          {post?.proposalRequirements}
                        </p>
                        <button
                          onClick={() => setShown(true)}
                          type="button"
                          className="text-white bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5">
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProposalsComp;
