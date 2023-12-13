import bgImage from "../assets/bg.png";
import Logo from "../assets/Logo.png";
import { BiSearchAlt } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import TermsAndConditionsModal from "./Terms";
import image1 from "../assets/Group 1.png";
import image2 from "../assets/Group 2.png";
import image3 from "../assets/Group 3.png";

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const Form = ({ searchQuery, handleInputChange, handleSearch }) => {
  const [loading, setLoading] = useState(true);
  const [agree, setAgree] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [searchOptions, setSearchOptions] = useState("Name");
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleTerms = () => {
    setShowTerms(!showTerms);
    setShowModal(!showModal);
  };

  const handleAgreement = () => {
    setAgree(!agree);
  };

  useEffect(() => {
    //simulate initial loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const onSearchClick = () => {
    if (!agree) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } else {
      handleSearch();
    }
  };

  // const handleDropdownChange = (e) => {
  //   const { name, value } = e.target;
  //   handleInputChange({ target: { name, value } });
  // };

  // // Function to format birthdate input as mm/dd/yyyy
  // const formatBirthdate = (value) => {
  //   // Remove non-digit characters from input value
  //   const cleanedValue = value.replace(/\D/g, "");
  //
  //   // Apply the format mm/dd/yyyy
  //   let formattedValue = "";
  //   for (let i = 0; i < cleanedValue.length; i++) {
  //     if (i === 2 || i === 4) {
  //       formattedValue += "/";
  //     }
  //     formattedValue += cleanedValue[i];
  //   }
  //
  //   return formattedValue;
  // };

  // Handle input change for birthdate
  // const handleBirthdateChange = (e) => {
  //   const { name, value } = e.target;
  //   const formattedValue = formatBirthdate(value);
  //   handleInputChange({ target: { name, value: formattedValue } });
  // };

  // Handle Search Options
  const handleSearchOptions = (options) => {
    setSearchOptions(options);
    //clear search inputs when switching search options
    handleInputChange({ target: { name: "first_name", value: "" } });
    handleInputChange({ target: { name: "last_name", value: "" } });
    handleInputChange({ target: { name: "prison_number", value: "" } });
  };

  //styles the button of what option wants
  const isSelected = (options) => {
    return searchOptions === options ? "border-b-2 border-yellow-500" : "";
  };

  return (
    <>
      <div>
        {loading ? (
          <div className="flex items-center justify-center w-full h-screen transition duration-500 bg-sky-800">
            <Loader />
          </div>
        ) : (
          <div
            className="flex flex-col min-h-screen md:bg-cover overflow-hidden"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          >
            <div
              className="absolute inset-0 z-10"
              style={{
                background: "linear-gradient(to top, #71717a , #164e63)",
                opacity: "0.7",
                mixBlendMode: "normal",
              }}
            ></div>
            <header className="w-full md:h-48 h-32 bg-sky-950 z-30 ">
              <div className="flex space-x-24 absolute overflow-hidden">
                <img src={image1} />
                <img src={image2} />
                <img src={image3} />
              </div>
              <div className="w-96 md:mt-24 mt-10 md:ml-28 ml-5 absolute top-0">
                <h2 className="md:text-lg text-sm text-zinc-400">
                  PERSONS DEPRIVED OF LIBERTY
                </h2>
                <h1 className="md:text-4xl text-3xl text-white font-semibold">
                  Inmate Search
                </h1>
              </div>
              <img
                src={Logo}
                className="absolute md:top-[-25px] md:right-0 w-64 md:w-96 right-0 top-[-15px] "
              />
            </header>
            <div className="flex items-center justify-center z-30 mt-10">
              <div className="form-control w-1/2 md:ml-20 ml-5 mt-10 z-10 relative bg-stone-100/90 rounded-md">
                <h1 className="text-3xl font-semibold text-center my-3">
                  BJMP-GMA Inmate Search
                </h1>
                <h3 className="text-center mr-4 my-2">Search By:</h3>
                <div className="flex justify-center space-x-44 my-5 font-semibold">
                  <button
                    className={`uppercase focus:outline-none focus:ring-0 ${isSelected(
                      "Name",
                    )}`}
                    onClick={() => handleSearchOptions("Name")}
                  >
                    Name
                  </button>
                  <button
                    className={`uppercase focus:outline-none focus:ring-0 ${isSelected(
                      "Prison Number",
                    )}`}
                    onClick={() => handleSearchOptions("Prison Number")}
                  >
                    Prison Number
                  </button>
                </div>
                <div className="flex items-center justify-center px-5 space-x-14">
                  {searchOptions === "Name" ? (
                    <>
                      <div>
                        <input
                          autoComplete="off"
                          type="text"
                          name="first_name"
                          placeholder="First Name"
                          className="input input-primary lg:w-full w-2/2 max-w-xs p-2 border-2 border-zinc-400 rounded-md"
                          value={searchQuery.first_name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <input
                          autoComplete="off"
                          type="text"
                          name="last_name"
                          placeholder="Last Name"
                          className="input input-primary lg:w-full w-2/2 max-w-xs p-2 border-2 border-zinc-400 rounded-md"
                          value={searchQuery.last_name}
                          onChange={handleInputChange}
                        />
                      </div>
                    </>
                  ) : (
                    <div>
                      <input
                        autoComplete="off"
                        type="text"
                        name="prison_number"
                        placeholder="Enter Prison Number"
                        className="input input-bordered input-primary lg:w-full w-2/2 max-w-xs p-2 border-2 border-zinc-300 rounded-md"
                        value={searchQuery.prison_number}
                        onChange={handleInputChange}
                      />
                    </div>
                  )}
                  <button
                    className="btn btn-primary w-52 lg:w-1/4 md:w-2/2"
                    onClick={onSearchClick}
                  >
                    <BiSearchAlt size={25} />
                    <span className="text-lg">Search</span>
                  </button>
                </div>
                <div className="flex items-center justify-center mt-4">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 md:text-blue-500 text-yellow-300 focus:ring-current"
                    checked={agree}
                    onChange={handleAgreement}
                  />
                  <label htmlFor="agree" className="ml-2">
                    I agree to the{" "}
                    <button
                      onClick={handleTerms}
                      className="md:text-stone-600 text-yellow-300 hover:text-yellow-200 md:hover:text-sky-400 font-bold py-2 rounded"
                    >
                      User Agreements
                    </button>
                  </label>
                </div>
                {showAlert && (
                  <div className="fixed top-0 left-0 right-0 z-50 inline-flex items-center justify-center font-semibold bg-red-200 text-red-800 px-4 py-2">
                    <svg
                      className="fill-current h-6 w-6 text-red-800 mr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                    </svg>
                    Please agree to the user terms and conditions.
                  </div>
                )}
                {showModal && <TermsAndConditionsModal onClose={handleTerms} />}
                <h3 className="text-center my-4">
                  For more information you may be obtained by requesting to
                  doc.PDL@example.com
                </h3>
                {/* {PrisonNumber searching} */}
                {/* Users Agreement checkbox and inline link */}
                {/* end of Users Agreement */}
                {/* end of dropdowns */}
              </div>
            </div>
            <div className="absolute bottom-10 text-center left-[700px] text-white px-5 space-x-5 z-10">
              <h2 className="font-bold text-2xl">Contact Us</h2>
              <span className="inline-flex items-center gap-1">
                <FaLocationDot color="#fbbf24" />
                General Mariano Alvarez, Cavite
              </span>
              <span className="inline-flex items-center gap-1">
                <FaPhoneAlt color="#fbbf24" />
                +639981319207
              </span>
              <span className="inline-flex items-center gap-1">
                <IoIosMail color="#fbbf24" />
                PDL.bjmp@gmail.com
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

Form.propTypes = {
  searchQuery: PropTypes.shape({
    prison_number: PropTypes.string,
    last_name: PropTypes.string,
    first_name: PropTypes.string,
    // middle_name: PropTypes.string,
    // gender: PropTypes.string,
    // birthdate: PropTypes.string,
    // municipality: PropTypes.string,
    // province: PropTypes.string,
    // barangay: PropTypes.string,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default Form;
