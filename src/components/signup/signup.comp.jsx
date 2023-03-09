import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../nav/nav";
import Onboarding from "../onboarding/onboarding";

function SignupComp() {
  const [email, setEmail] = useState(null);
  const [department, setDepartment] = useState(null);
  const [password, setPassword] = useState("");
  const [onboarding, setOnboaring] = useState(false);

  return (
    <>
      <Nav />
      {!onboarding && (
        <section className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create your account
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
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 focus:ring-1 outline-none"
                    placeholder="name@company.com"
                    required=""
                  />
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
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:ring-1 focus:border-orange-600 block w-full p-2.5 outline-none"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="designation"
                    className="block mb-2 text-sm font-medium text-gray-900">
                    Designation
                  </label>
                  <input
                    type="text"
                    name="designation"
                    id="designation"
                    placeholder="Faculty"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:ring-1 focus:border-orange-600 block w-full p-2.5 outline-none"
                    required=""
                  />
                </div>
                <button
                  type="submit"
                  onClick={() => {
                    setOnboaring(true);
                  }}
                  className="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Sign Up
                </button>
                <p className="text-sm font-light text-gray-500">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-orange-600 hover:underline">
                    Log In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      )}
      {onboarding && <Onboarding />}
    </>
  );
}

export default SignupComp;
