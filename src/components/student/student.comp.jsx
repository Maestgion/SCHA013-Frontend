import { useState, useEffect } from "react";
import { AiFillHome, AiFillTrophy } from "react-icons/ai";
import { BsBellFill, BsLaptopFill, BsSearch } from "react-icons/bs";
import { CgMenuGridR, CgProfile, CgSpinner } from "react-icons/cg";
import { API_URI } from "../../constants/api.url";
import axios from "axios";
import { Link } from "react-router-dom";

import Links from "./Links";
import Post from "./Post";
import { useNavigate } from "react-router-dom";
function StudentComp() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    posts: [
      {
        author: "srmkzilla",
        profileUrl: "https://mozofest.srmkzilla.net/assets/mozofest-icon.svg",
        imageUrl: "/assets/mozofest.jpg",
        description:
          "Awww, you didn’t think we’d leave you on read, right? We know how y’all have been missing us all these lonely, eventless nights ;)Well, guess what, we’re back with MOZOFEST ’23! So, you up? 👀🔥Coming at you better than ever, enter the Mozoverse once again and lose yourself in our incredible events and spectacles:1. Shore of Mystery - For the ones who always figure it out before Sherlock2. Rush hour - Tick tick boom, we’re bringin the noise…3. Strikeout - Shoot first, ask questions later4. Quibble - May the dice ever be in your favour5. Ca(t)che the code - Read the code faster than Neo, win your team the roundFollow us and stay tuned in for more registration details and event revelations. Crack your fingers, roll your neck, and get ready to make some core memories! Link in bio 🔗#mozo #mozofest #mozilla #srm #events #technical #nontechnical #students",
      },
      {
        author: "srmkzilla",
        profileUrl: "https://mozofest.srmkzilla.net/assets/mozofest-icon.svg",
        imageUrl: "/assets/mozofest.jpg",
        description:
          "Awww, you didn’t think we’d leave you on read, right? We know how y’all have been missing us all these lonely, eventless nights ;)Well, guess what, we’re back with MOZOFEST ’23! So, you up? 👀🔥Coming at you better than ever, enter the Mozoverse once again and lose yourself in our incredible events and spectacles:1. Shore of Mystery - For the ones who always figure it out before Sherlock2. Rush hour - Tick tick boom, we’re bringin the noise…3. Strikeout - Shoot first, ask questions later4. Quibble - May the dice ever be in your favour5. Ca(t)che the code - Read the code faster than Neo, win your team the roundFollow us and stay tuned in for more registration details and event revelations. Crack your fingers, roll your neck, and get ready to make some core memories! Link in bio 🔗#mozo #mozofest #mozilla #srm #events #technical #nontechnical #students",
      },
      {
        author: "srmkzilla",
        profileUrl: "https://mozofest.srmkzilla.net/assets/mozofest-icon.svg",
        imageUrl: "/assets/mozofest.jpg",
        description:
          "Awww, you didn’t think we’d leave you on read, right? We know how y’all have been missing us all these lonely, eventless nights ;)Well, guess what, we’re back with MOZOFEST ’23! So, you up? 👀🔥Coming at you better than ever, enter the Mozoverse once again and lose yourself in our incredible events and spectacles:1. Shore of Mystery - For the ones who always figure it out before Sherlock2. Rush hour - Tick tick boom, we’re bringin the noise…3. Strikeout - Shoot first, ask questions later4. Quibble - May the dice ever be in your favour5. Ca(t)che the code - Read the code faster than Neo, win your team the roundFollow us and stay tuned in for more registration details and event revelations. Crack your fingers, roll your neck, and get ready to make some core memories! Link in bio 🔗#mozo #mozofest #mozilla #srm #events #technical #nontechnical #students",
      },
    ],
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

  useEffect(() => {
    axios.get(`${API_URI}/posts`).then((res) => {
      console.log(res.data);
    });
  }, []);
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
      <nav className="bg-orange-500 rounded-3xl px-2 py-6 flex flex-col gap-20 fill-white text-white items-center h-full">
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
            <Link to={"/stdachiev"}>
              <AiFillTrophy size={32} />
            </Link>
          </div>
          <div>
            <a href="" onClick={(e) => { e.preventDefault(); navigate("/stdproj") }}>

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
      <section className="flex-1 px-8 py-4 space-y-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-medium">Good {greeting}, Anishka!</h1>
          <div className="flex gap-6">
            <BsSearch size={24} />
            <BsBellFill size={24} />
            <CgProfile size={24} />
          </div>
        </div>
        <div className="flex justify-between h-[90%] gap-10">
          <div className="flex-1 overflow-scroll scrollbar-hidden space-y-10">
            {data.posts.map((post, index) => {
              return <Post post={post} key={index} />;
            })}
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

export default StudentComp;
