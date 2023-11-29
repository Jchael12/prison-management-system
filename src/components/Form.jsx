import bgImage from "../assets/bg.png";
import Logo from "../assets/Logo.png";
import { BiSearchAlt } from "react-icons/bi";
import municipalities from "../areas/municipalities";
import barangays from "../areas/barangays";
import image1 from "../assets/Group 1.png";
import image2 from "../assets/Group 2.png";
import image3 from "../assets/Group 3.png";

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const Form = ({ searchQuery, handleInputChange, handleSearch }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //simulate initial loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const onSearchClick = () => {
    handleSearch();
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    handleInputChange({ target: { name, value } });
  };

  // Function to format birthdate input as mm/dd/yyyy
  const formatBirthdate = (value) => {
    // Remove non-digit characters from input value
    const cleanedValue = value.replace(/\D/g, "");

    // Apply the format mm/dd/yyyy
    let formattedValue = "";
    for (let i = 0; i < cleanedValue.length; i++) {
      if (i === 2 || i === 4) {
        formattedValue += "/";
      }
      formattedValue += cleanedValue[i];
    }

    return formattedValue;
  };

  // Handle input change for birthdate
  const handleBirthdateChange = (e) => {
    const { name, value } = e.target;
    const formattedValue = formatBirthdate(value);
    handleInputChange({ target: { name, value: formattedValue } });
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
                background: "linear-gradient(to top, #f9fafb , #164e63)",
                mixBlendMode: "multiply",
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
            <div className="flex z-30 mt-10">
              <div className="form-control w-full max-w-md md:ml-20 ml-5 mt-10 z-10 relative">
                <div>
                  <label className="label flex">
                    <span className="label-text text-xl text-white font-semibold">
                      Prison Number
                    </span>
                  </label>
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
                <div className="lg:mt-10 flex flex-col mt-5 md:flex-col lg:flex-row lg:space-x-10">
                  <div className="w-full">
                    <label className="label">
                      <span className="label-text text-xl text-white font-semibold">
                        Last Name
                      </span>
                    </label>
                    <input
                      autoComplete="off"
                      type="text"
                      name="last_name"
                      placeholder="Enter Last Name"
                      className="input input-bordered input-primary lg:w-full w-2/2 max-w-xs p-2 border-2 border-zinc-300 rounded-md"
                      value={searchQuery.last_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full mt-5 lg:mt-0">
                    <label className="label">
                      <span className="label-text text-xl text-white font-semibold">
                        First Name
                      </span>
                    </label>
                    <input
                      autoComplete="off"
                      type="text"
                      name="first_name"
                      placeholder="Enter First Name"
                      className="input input-bordered input-primary lg:w-full w-2/2 max-w-xs p-2 border-2 border-zinc-300 rounded-md"
                      value={searchQuery.first_name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="mt-10 md:flex absolute md:static right-20 top-5">
                  <h2 className="text-xl text-white mb-3 font-semibold">
                    Gender
                  </h2>
                  <div className="form-control w-24 md:ml-10">
                    <label className="label cursor-pointer">
                      <span className="label-text text-white">Male</span>
                      <input
                        autoComplete="off"
                        type="radio"
                        name="gender"
                        value="Male"
                        className="radio checked:bg-blue-500 border-white"
                        checked={searchQuery.gender === "Male"}
                        onChange={handleInputChange}
                      />
                    </label>
                  </div>
                  <div className="form-control w-24 md:ml-10">
                    <label className="label cursor-pointer">
                      <span className="label-text text-white">Female</span>
                      <input
                        autoComplete="off"
                        type="radio"
                        name="gender"
                        value="Female"
                        className="radio checked:bg-red-500 border-white"
                        checked={searchQuery.gender === "Female"}
                        onChange={handleInputChange}
                      />
                    </label>
                  </div>
                </div>

                {/* birthdate section */}
                <div className="w-full mt-5 max-w-xs z-50 relative">
                  <label className="label flex flex-col items-start">
                    <span className="label-text text-xl text-white font-semibold">
                      Data of Birth
                    </span>
                    <span className="label-text text-md text-white italic">
                      (MM/DD/YYYY)
                    </span>
                  </label>
                  <input
                    autoComplete="off"
                    type="text"
                    name="birthdate"
                    placeholder="mm/dd/yyyy"
                    className="input input-bordered input-primary lg:w-full w-[200px] max-w-xs p-2 border-2 border-zinc-300 rounded-md"
                    value={searchQuery.birthdate}
                    onChange={handleBirthdateChange}
                  />
                </div>
                <p className="text-white mt-8 italic">
                  For more information you may be onbtained by requesting to
                  doc.PDL@example.com
                </p>
              </div>

              {/* dropdowns  */}

              <div className="form-control w-52 max-w-md absolute md:static top-[290px] right-4 lg:ml-24 ml-2 md:ml-18 md:mt-24 mt-36">
                <h2 className="text-white font-bold text-xl md:mb-4">
                  Address
                </h2>
                <div className="flex flex-col lg:flex-row md:w-2/2 lg:w-full lg:space-x-10">
                  <div className="w-full mt-5">
                    <label className="label flex">
                      <span className="label-text text-white font-semibold">
                        Municipality
                      </span>
                    </label>
                    <select
                      className="block md:w-full w-52 lg:w-56 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                      value={searchQuery.municipality}
                      onChange={handleDropdownChange}
                      name="municipality"
                    >
                      <option value="">Select Municipality</option>
                      {municipalities.map((municipality, index) => (
                        <option key={index} value={municipality}>
                          {municipality}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* municipality dropdown */}
                  <div className="w-full mt-5">
                    <label className="label flex">
                      <span className="label-text text-white font-semibold">
                        Province
                      </span>
                    </label>
                    <select
                      className="block md:w-full w-52 lg:w-56 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                      value={searchQuery.province}
                      onChange={handleDropdownChange}
                      name="province"
                    >
                      <option value="">Cavite</option>
                    </select>
                  </div>
                </div>
                {/* barangay dropdown */}
                <div className="lg:mt-6 mt-5">
                  <label className="label flex">
                    <span className="label-text text-white font-semibold">
                      Barangay
                    </span>
                  </label>
                  <select className="block w-[213px] bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option value="">Select Barangay</option>
                    {barangays.map((barangay, index) => (
                      <option key={index} value={barangay}>
                        {barangay}
                      </option>
                    ))}
                  </select>
                </div>
                {/* end of dropdowns */}

                <button
                  className="md:static absolute bottom-[-150px] left-[-120px] btn btn-primary w-52 lg:w-full md:w-2/2 mt-10 md:mt-24 md:ml-5 lg:ml-72"
                  onClick={onSearchClick}
                >
                  <BiSearchAlt size={24} />
                  <span>Search</span>
                </button>
              </div>
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
    middle_name: PropTypes.string,
    gender: PropTypes.string,
    birthdate: PropTypes.string,
    municipality: PropTypes.string,
    province: PropTypes.string,
    barangay: PropTypes.string,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default Form;
