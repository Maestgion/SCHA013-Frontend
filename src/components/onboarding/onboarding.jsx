function Onboarding() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a
        href="#"
        className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
        CLUB
      </a>
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-4xl xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
          <form className="grid grid-cols-2 gap-12" action="#">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900">
                Name
              </label>
              <input
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
                htmlFor="year"
                className="block mb-2 text-sm font-medium text-gray-900">
                Est. Year
              </label>
              <input
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
                Email
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
                htmlFor="mentor"
                className="block mb-2 text-sm font-medium text-gray-900">
                Mentor
              </label>
              <input
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
                htmlFor="type"
                className="block mb-2 text-sm font-medium text-gray-900">
                Type
              </label>
              <input
                type="text"
                name="type"
                id="type"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 focus:ring-1 outline-none"
                placeholder="Type"
                required=""
              />
            </div>
            <button
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
