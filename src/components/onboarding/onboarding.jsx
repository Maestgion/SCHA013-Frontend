import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URI } from "../../constants/api.url";

import toast from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state';

import { useNavigate, Link } from "react-router-dom";

import Cookies from 'js-cookie'
function Onboarding() {
  const user = useSelector(s => s.user)

  const [clubName, setClubName] = useState(null)
  const [mentorTitle, setMentorTitle] = useState(null)
  const [mentorName, setMentorName] = useState(null)
  const [clubType, setClubType] = useState(null)
  const [startingYear, setStartingYear] = useState(null)
  const [dept, setDept] = useState(null)
  const [deptHod, setdeptHod] = useState(null)
  const [leadName, setLeadName] = useState(null)
  const [leadPhoneNo, setLeadPhoneNo] = useState(null)
  const [leadRegNo, setLeadRegNo] = useState(null)
  const [clubEmail, setClubEmail] = useState(null)


  useEffect(() => {
    if (user)
      setClubEmail(user.email)
  }, [user])

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { setUser } = bindActionCreators(actionCreators, dispatch);
  const handleSubmit = () => {
    const data = {
      clubName,
      mentorTitle,
      mentorName,
      clubType,
      startingYear,
      dept,
      deptHod,
      leadName,
      leadPhoneNo,
      leadRegNo,
      clubEmail,
    }
    console.log(data)
    toast.custom((t) => (
      <span className='logoutToast'>
        The changes are not reversible, are you sure?
        <div className='toastbtns'>

          <button className='classes.toastbtn'
            onClick={() => {
              toast.dismiss(t.id)
              const id = Cookies.get('uid')
              axios.post(`${API_URI}/users/club/profile/${id}`, data)
                .then(res => {
                  console.log("data", res.data)
                  setUser(res.data)
                  Cookies.set('uid', res.data.uid)
                  toast.success("Account details saved!")
                  navigate('/')
                }).catch(err => {
                  console.log(err)
                })
            }}>
            OK
          </button>
          <button onClick={() => toast.dismiss(t.id)}>
            Dismiss
          </button>
        </div>
      </span >
    ));
  }
  return (
    <section className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a
        href="#"
        className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
        CLUB
      </a>
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-4xl xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
          <form className="grid grid-cols-3 gap-12" action="#">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900">
                ClubName
              </label>
              <input
                value={clubName}
                onChange={(e) => setClubName(e.target.value)}
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
                Club Type
              </label>
              <input
                value={clubType}
                onChange={(e) => setClubType(e.target.value)}
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
                Est. Year
              </label>
              <input
                value={startingYear}
                onChange={(e) => setStartingYear(e.target.value)}
                type="date"
                name="year"
                id="year"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 focus:ring-1 outline-none"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900">
                Club Email
              </label>
              <input
                value={clubEmail}
                onChange={(e) => setClubEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 focus:ring-1 outline-none"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="mentor"
                className="block mb-2 text-sm font-medium text-gray-900">
                Mentor title
              </label>
              <input
                value={mentorTitle}
                onChange={(e) => setMentorTitle(e.target.value)}
                type="text"
                name="mentor"
                id="mentor"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 focus:ring-1 outline-none"
                placeholder="Mrs/Mis/Mr"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="mentor"
                className="block mb-2 text-sm font-medium text-gray-900">
                Mentor Name
              </label>
              <input
                value={mentorName}
                onChange={(e) => setMentorName(e.target.value)}
                type="text"
                name="mentor"
                id="mentor"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 focus:ring-1 outline-none"
                placeholder="Mentor"
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
                value={dept}
                onChange={(e) => setDept(e.target.value)}
                type="text"
                name="department"
                id="department"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 focus:ring-1 outline-none"
                placeholder="Department"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="department"
                className="block mb-2 text-sm font-medium text-gray-900">
                Department Hod
              </label>
              <input
                value={deptHod}
                onChange={(e) => setdeptHod(e.target.value)}
                type="text"
                name="department"
                id="department"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 focus:ring-1 outline-none"
                placeholder="Department Hod"
                required=""
              />
            </div>

            <div>
              <label
                htmlFor="type"
                className="block mb-2 text-sm font-medium text-gray-900">
                Lead name
              </label>
              <input
                value={leadName}
                onChange={(e) => setLeadName(e.target.value)}
                type="text"
                name="type"
                id="type"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 focus:ring-1 outline-none"
                placeholder="John"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="type"
                className="block mb-2 text-sm font-medium text-gray-900">
                Lead RegNo.
              </label>
              <input
                value={leadRegNo}
                onChange={(e) => setLeadRegNo(e.target.value)}
                type="text"
                name="type"
                id="type"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 focus:ring-1 outline-none"
                placeholder="RA....."
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="type"
                className="block mb-2 text-sm font-medium text-gray-900">
                Lead PhoneNo.
              </label>
              <input
                value={leadPhoneNo}
                onChange={(e) => setLeadPhoneNo(e.target.value)}
                type="text"
                name="type"
                id="type"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 focus:ring-1 outline-none"
                placeholder="+91123456789"
                required=""
              />
            </div>
            <button
              onClick={
                (e) => {
                  e.preventDefault();
                  handleSubmit();
                }
              }
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

export default Onboarding;
