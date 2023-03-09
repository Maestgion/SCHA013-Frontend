import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URI } from "../../constants/api.url";

import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";

import { useNavigate, Link } from "react-router-dom";

import Cookies from "js-cookie";
function facultyOnboarding() {
  const user = useSelector((s) => s.user);

  const [title, setTitle] = useState(null);
  const [department, setDepartment] = useState(null);
  const [facultyType, setFacultyType] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [section, setSection] = useState(null);
  const [phone, setPhone] = useState(null);

  const [regNo, setRegNo] = useState(null);

  useEffect(() => {
    if (user) setRegNo(user.regNo);
  }, [user]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { setUser } = bindActionCreators(actionCreators, dispatch);
  const handleSubmit = () => {
    const data = {
      title,
      dept: department,
      facType: facultyType,
      firstName,
      lastName,
      section,
      phone,
      regNo,
    };
    console.log(data);
    toast.custom((t) => (
      <span className="logoutToast">
        The changes are not reversible, are you sure?
        <div className="toastbtns">
          <button
            className="classes.toastbtn"
            onClick={() => {
              toast.dismiss(t.id);
              console.log(data)
              const id = Cookies.get("uid");
              axios
                .put(`${API_URI}/users/profile/faculty/${id}`, data)
                .then((res) => {
                  console.log("data", res.data);
                  setUser(res.data.profile);
                  Cookies.set("uid", res.data.profile._id);
                  toast.success("Account details saved!");
                  navigate("/");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}>
            OK
          </button>
          <button onClick={() => toast.dismiss(t.id)}>Dismiss</button>
        </div>
      </span>
    ));
  };
  return (
    <section className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a
        href="#"
        className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
        FACULTY
      </a>
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-4xl xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
          <form className="grid grid-cols-3 gap-12" action="#">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900">
                Title
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 focus:ring-1 outline-none"
                placeholder="John"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900">
                First Name
              </label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 focus:ring-1 outline-none"
                placeholder="Tech/Non-Tech"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="year"
                className="block mb-2 text-sm font-medium text-gray-900">
                Last Name
              </label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                name="year"
                id="year"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 focus:ring-1 outline-none"
                placeholder="Gupta"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="regno"
                className="block mb-2 text-sm font-medium text-gray-900">
                Reg. No
              </label>
              <input
                value={regNo}
                onChange={(e) => setRegNo(e.target.value)}
                type="text"
                name="regno"
                id="regno"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 focus:ring-1 outline-none"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="department"
                className="block mb-2 text-sm font-medium text-gray-900">
                Department
              </label>
              <input
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                type="text"
                name="department"
                id="department"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 focus:ring-1 outline-none"
                placeholder="Mrs/Mis/Mr"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="facultytype"
                className="block mb-2 text-sm font-medium text-gray-900">
                Faculty Type
              </label>
              <input
                value={facultyType}
                onChange={(e) => setFacultyType(e.target.value)}
                type="text"
                name="facultytype"
                id="facultytype"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 focus:ring-1 outline-none"
                placeholder="Mentor"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="section"
                className="block mb-2 text-sm font-medium text-gray-900">
                Section
              </label>
              <input
                value={section}
                onChange={(e) => setSection(e.target.value)}
                type="text"
                name="section"
                id="section"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 focus:ring-1 outline-none"
                placeholder="Department"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900">
                Phone
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                name="phone"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 focus:ring-1 outline-none"
                placeholder="Department Hod"
                required=""
              />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              type="submit"
              className="w-56 text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 col-span-2 text-center justify-self-center">
              Continue
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default facultyOnboarding;
