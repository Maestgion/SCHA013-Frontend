import { Link } from "react-router-dom";

function Nav({ signup = false }) {
  return (
    <nav className="fixed w-full z-20 top-4 left-0 h-14">
      <div className="container flex flex-wrap items-center justify-between mx-auto border-gray-200 border w-[90%] sm:px-4 py-2.5 rounded-2xl shadow-sm">
        <Link to="/" className="flex items-center">
          <img
            src="/assets/srmhub.orange.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
        </Link>
        <div className="flex gap-4 justify-center items-center">
          {signup && (
            <Link
              to="/signup"
              className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200">
              Sign Up
            </Link>
          )}
          <Link
            to="/login"
            className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-2 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
