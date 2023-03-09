import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { useNavigate } from "react-router";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import Nav from "../nav/nav";
import Onboarding from "../onboarding/clubOnboarding";
import { API_URI } from "../../constants/api.url";
import { toast } from "react-hot-toast";

function LoginComp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [designation, setDesignation] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { setUser } = bindActionCreators(actionCreators, dispatch);
  const handleLogin = () => {
    const data = {
      email,
      password,
      userType: designation,
    };
    // console.log("data---", data);
    // setUser(data);
    axios
      .post(`${API_URI}/users/login`, data)
      .then((res) => {
        console.log("data---", res.data);
        setUser(res.data.others);
        Cookies.set("uid", res.data.uid);
        Cookies.set("status", res.data.isComplete);
        Cookies.set("user", res.data.others.userType);
        toast.success(`Login Successful`);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        toast.error(`Login Failed`);
      });
  };

  return (
    <>
      <Nav signup />

      <section className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          <img
            className="w-20 mr-2"
            src="/assets/srmhub.orange.svg"
            alt="logo"
          />
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  email={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 focus:ring-1 outline-none"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="designation"
                  className="block mb-2 text-sm font-medium text-gray-900">
                  Designation
                </label>
                <select
                  onChange={(e) => setDesignation(e.target.value)}
                  id="designation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                  <option value="club">Club</option>
                  <option value="hod">HOD</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:ring-1 focus:border-orange-600 block w-full p-2.5 outline-none"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-orange-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin();
                  // setOnboaring(true);
                }}
                className="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500">
                Don’t have an account yet?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-orange-600 hover:underline">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginComp;
