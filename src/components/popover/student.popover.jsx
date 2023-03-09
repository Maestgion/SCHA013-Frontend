import cn from "classnames";
import { BsX } from "react-icons/bs";

function StudentPopover({ shown, setShown, data }) {
  return (
    <div
      className={cn(
        shown ? null : "hidden",
        "h-full w-full absolute top-0 left-0 z-50 flex justify-center items-center backdrop-saturate-100 backdrop-blur-[6px] bg-black bg-opacity-30"
      )}>
      <div className="h-[80%] bg-white border border-gray-200 rounded-lg shadow-2xl space-y-4 w-max overflow-scroll px-20 py-10 flex flex-col items-center relative">
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex justify-between mb-8">
              <p className=""></p>
              <button
                onClick={() => setShown(false)}
                className="flex items-center font-bold">
                <BsX size={30} strokeWidth={0.3} />
              </button>
            </div>
            <div className="flex justify-between w-full">
              <p className="font-medium">Name:</p>
              <p>Jatin Kumar</p>
            </div>
            <div className="flex justify-between w-full">
              <p className="font-medium">Reg. No:</p>
              <p>RA2011003010240</p>
            </div>
            <div className="flex justify-between w-full">
              <p className="font-medium">Email:</p>
              <p>ak8627@srmist.edu.in</p>
            </div>
            <div className="flex justify-between w-full">
              <p className="font-medium">Phone:</p>
              <p>9360208576</p>
            </div>
          </div>
          <div>
            <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900">
              Certificates
            </h5>
            <div className="flex gap-4">
              <img
                className="h-auto max-w-[10rem] rounded-lg"
                src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                alt="image description"
              />
              <img
                className="h-auto max-w-[10rem] rounded-lg"
                src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                alt="image description"
              />
              <img
                className="h-auto max-w-[10rem] rounded-lg"
                src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                alt="image description"
              />
              <img
                className="h-auto max-w-[10rem] rounded-lg"
                src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                alt="image description"
              />
            </div>
          </div>
          <div>
            <h5 className="mb-4 text-xl font-medium tracking-tight text-gray-900">
              Skills
            </h5>
            <div className="grid grid-cols-3 gap-2 grid-flow-row">
              {new Array(6).fill(0).map((_, i) => {
                return (
                  <div key={i} className="flex gap-6 items-center">
                    <p>React.js</p>
                    <div className="flex items-center">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>First star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>Second star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>Third star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>Fourth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-300 dark:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>Fifth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h5 className="mb-4 text-xl font-medium tracking-tight text-gray-900">
              Achievements
            </h5>
            <div className="grid grid-cols-2 gap-4">
              {new Array(6).fill(0).map((_, i) => {
                return (
                  <div
                    key={i}
                    className="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <p className="mb-3 font-normal text-gray-500">
                      Go to this step by step guideline process on how to
                      certify for your weekly benefits:
                    </p>
                    <div className="inline-flex items-center text-gray-600 hover:underline">
                      9 days ago
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentPopover;
