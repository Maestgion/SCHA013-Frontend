import Cookies from "js-cookie";
import { useState } from "react";
import { AiFillHome, AiFillTrophy } from "react-icons/ai";
import { BsBellFill, BsLaptopFill, BsSearch } from "react-icons/bs";
import { CgMenuGridR, CgProfile, CgSpinner } from "react-icons/cg";
import StudentPopover from "../popover/student.popover";
import { API_URI } from "../../constants/api.url";
import axios from "axios";
const reader = new FileReader();

function NewAchievementComp() {
  const [competitionName, setCompetitionName] = useState("");
  const [position, setPosition] = useState("");
  const [proofLink, setProofLink] = useState("");

  const [loading, setLoading] = useState(true);
  const [shown, setShown] = useState(false);
  const [popupData, setPopupData] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [file, setFile] = useState("");

  const greeting = new Date().getHours() > 12 ? "evening" : "morning";

  const handleAchievement = (e) => {
    const id = Cookies.get("uid")
    const data = {
      competitionName,
      position,
      proofLink,
      date: new Date().toLocaleDateString(),
    }
    axios.post(`${API_URI}/achievements/${id}`, data).then((res) => {
      console.log(res.data);

    });
  };
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
              Competition Name
            </label>
            <input
              value={competitionName}
              onChange={(e) => setCompetitionName(e.target.value)}
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:ring-1 focus:border-orange-500 block w-full p-2.5 outline-none"
              placeholder=" Competition Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900">
              Position
            </label>
            <input
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:ring-1 focus:border-orange-500 outline-none"
              placeholder="position"></input>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900">
              Proof Link
            </label>
            <input
              value={proofLink}
              onChange={(e) => setProofLink(e.target.value)}

              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:ring-1 focus:border-orange-500 outline-none"
              placeholder="enter drive link of certificate"></input>
          </div>
          {/* <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900">
              Achievement
            </label>

            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                  </svg>
                  {file.length > 0 ? (
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">File selected</span>
                    </p>
                  ) : (
                    <>
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </>
                  )}
                </div>
                <input
                  onChange={(e) => {
                    reader.readAsDataURL(e.currentTarget.files[0]);
                    reader.onload = function () {
                      console.log(reader.result);
                      setFile(reader.result);
                    };
                  }}
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                />
              </label>
            </div>
          </div> */}
          <button
            onClick={(e) => { e.preventDefault(); handleAchievement(); }}
            type="submit"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-orange-500 rounded-lg focus:ring-4 focus:ring-orange-300 hover:bg-orange-600 ml-auto shadow">
            Submit
          </button>
        </div>
      </section>
    </div>
  );
}

export default NewAchievementComp;
