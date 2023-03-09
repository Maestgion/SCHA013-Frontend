import cn from "classnames";
import { useState } from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { CgComment } from "react-icons/cg";
import DetailsPopover from "../popover/details.popover";
import StudentPopover from "../popover/student.popover";
import TeamsPopover from "../popover/teams.popover";

export function Student({ student, children, className, details }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="space-y-2">
      <StudentPopover shown={shown} setShown={setShown} />
      <div className={cn("flex justify-between items-center gap-6", className)}>
        <div className="flex gap-4">
          <div
            id="image"
            className="h-10 w-10 rounded-full bg-orange-500"></div>
          <div>
            <div className="leading-5 min-w-[9rem]">
              <p>Anishka Kesaria</p>
              <p>RA2011003010240</p>
            </div>
          </div>
        </div>
        <div className="inline-flex items-center">{children}</div>
      </div>
      {details}
    </div>
  );
}

export function Club({ club }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="flex flex-col items-end">
      <div className="flex w-full justify-between">
        <div className="flex gap-4 justify-between items-center">
          <div
            id="image"
            className="h-10 w-10 rounded-full bg-orange-500"></div>
          <p className="min-w-[9rem]">Coding Ninjas</p>
        </div>
        <button
          className={cn("inline-flex ml-4", shown ? "rotate-180" : null)}
          onClick={() => setShown((prev) => !prev)}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg">
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path>
            </g>
          </svg>
        </button>
      </div>
      <div className={cn(shown ? null : "hidden", "mt-2")}>
        <button className="inline-flex items-center px-4 py-2 text-sm font-semibold text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ml-4">
          Report
        </button>
        <button className="inline-flex items-center px-4 py-2 text-sm font-semibold text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ml-4">
          Project
        </button>
        <button className="inline-flex items-center px-4 py-2 text-sm font-semibold text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ml-4">
          Req Status
        </button>
      </div>
    </div>
  );
}

export function Ongoing({ ongoing }) {
  const [teamShown, setTeamShown] = useState(false);
  const [detailShown, setDetailShown] = useState(false);
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col">
      <TeamsPopover shown={teamShown} setShown={setTeamShown} />
      <DetailsPopover shown={detailShown} setShown={setDetailShown} />
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {ongoing?.title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700">{ongoing?.description}</p>
      <div className="flex gap-4 ml-auto">
        <button
          onClick={() => setTeamShown(true)}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300">
          <AiOutlineTeam size={20} />
        </button>
        <button
          onClick={() => setDetailShown(true)}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300">
          <CgComment size={20} />
        </button>
      </div>
    </div>
  );
}

export function Previous({ previous }) {
  const [teamShown, setTeamShown] = useState(false);
  const [detailShown, setDetailShown] = useState(false);
  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl hover:bg-gray-100 h-52">
      <TeamsPopover shown={teamShown} setShown={setTeamShown} />
      <DetailsPopover shown={detailShown} setShown={setDetailShown} />
      <div className="w-full rounded-t-lg h-96 md:h-auto md:w-2/5 md:rounded-none md:rounded-l-lg p-4 justify-between flex flex-col">
        <p className="mb-3 font-normal text-gray-700">{previous?.feedback}</p>
        <p className="mb-3 font-normal text-gray-700">{previous?.timeStamp}</p>
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 h-16 overflow-hidden overflow-ellipsis">
            {previous?.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700">
            {previous?.description}
          </p>
        </div>
        <div className="flex justify-between">
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300">
            More
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </button>
          <div className="flex gap-4">
            <button
              onClick={() => setTeamShown(true)}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300">
              <AiOutlineTeam size={20} />
            </button>
            <button
              onClick={() => setDetailShown(true)}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300">
              <CgComment size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
