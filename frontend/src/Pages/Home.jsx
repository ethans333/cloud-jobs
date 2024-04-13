import sparkles from "../assets/sparkles.svg";
import NavBar from "../Components/Navbar";
import aws from "../assets/aws.svg";
import microsoft from "../assets/microsoft.svg";

export default function () {
  return (
    <div className="px-10 pt-7">
      <input
        type="text"
        className="border rounded-lg p-2 px-5 w-full shadow-sm mb-5"
        placeholder="Search here"
      />
      <div className="banner bg-hero-bg w-full shadow-xl rounded-3xl overflow-hidden bg-right bg-cover">
        <div className="backdrop-filter backdrop-blur-sm bg-gradient-to-r from-white to-opacity-0 text-center w-full bg-stretch py-16 lg:py-32"></div>
      </div>
      <div className="text-3xl font-bold my-7">Find Cloud Jobs</div>
      <div className="grid grid-cols-3 gap-x-5 gap-y-5">
        <JobContainer1 />
        <JobContainer2 />
        <JobContainer1 />
        <JobContainer1 />
        <JobContainer1 />
        <JobContainer2 />
      </div>
    </div>
  );

  function JobContainer1() {
    return (
      <div className="banner bg-hero-bg w-full shadow-xl rounded-3xl overflow-hidden bg-right bg-cover w-full">
        <div className="backdrop-filter backdrop-blur-sm w-full bg-stretch h-32 lg:h-64 p-5">
          <img src={aws} className="w-10 h-10" />
          <div className="mt-3 text-white drop-shadow-lg">
            Aute et anim do eu anim eu excepteur ut eu culpa magna ad. Ex
            officia cupidatat adipisicing labore ad et dolor dolor dolore fugiat
            in.
          </div>
          <div className="ml-auto mt-10 w-16 h-5 bg-white rounded"></div>
        </div>
      </div>
    );
  }

  function JobContainer2() {
    return (
      <div className="banner bg-circle-bg w-full shadow-xl rounded-3xl overflow-hidden bg-right bg-cover w-full">
        <div className="backdrop-filter backdrop-blur-sm w-full bg-stretch h-32 lg:h-64 p-5">
          <img src={microsoft} className="w-10 h-10 p-1" />
          <div className="mt-3 text-white drop-shadow-lg">
            Non dolor nulla incididunt id exercitation dolore. Voluptate velit
            laborum veniam sit commodo. Enim occaecat amet eiusmod non fugiat.
          </div>
          <div className="ml-auto mt-10 w-16 h-5 bg-white rounded"></div>
        </div>
      </div>
    );
  }
}
