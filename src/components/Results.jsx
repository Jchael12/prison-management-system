import Logo from "../assets/Logo.png";
import image1 from "../assets/Group 1.png";
import image2 from "../assets/Group 2.png";
import image3 from "../assets/Group 3.png";
import PropTypes from "prop-types";
import inmateImage from "../assets/misa.jpg";
import inmateData from "./Data.js";

const Results = ({ searchResults, handleBackToSearch, resetForm }) => {
  const resultStyle = {
    biometrics: `mr-[135px] font-semibold`,
    numberDetail: `mr-[75px] font-semibold`,
    nameDetail: `mr-[145px] font-semibold`,
    genderDetail: `mr-[135px] font-semibold`,
    birthDetail: `mr-[120px] font-semibold`,
    municipalDetail: `mr-[100px] font-semibold`,
    provinceDetail: `mr-[128px] font-semibold`,
    barangayDetail: `mr-[123px] font-semibold`,
    maritalDetail: `mr-[90px] font-semibold`,
    ageDetail: `mr-[160px] font-semibold`,
  };

  const handleBackClick = () => {
    resetForm(); // Reset form state
    handleBackToSearch(); // Switch back to search view
  };

  return (
    <div>
      <header className="w-full md:h-48 h-32 bg-sky-950 z-30">
        <div className="flex space-x-24 absolute overflow-hidden">
          <img src={image1} alt="Group 1" />
          <img src={image2} alt="Group 2" />
          <img src={image3} alt="Group 3" />
        </div>
        <div className="w-96 md:mt-24 mt-10 md:ml-28 ml-5 absolute top-0">
          <h2 className="text-lg text-zinc-400">PERSONS DEPRIVED OF LIBERTY</h2>
          <h1 className="text-4xl text-white font-semibold">Inmate Search</h1>
        </div>
        <img
          src={Logo}
          className="absolute md:top-[-25px] md:right-0 w-64 md:w-96 right-0 top-[-15px]"
          alt="Logo"
        />
      </header>
      <div className="w-96 h-full ml-14 mt-20">
        <button
          className="absolute top-52 left-10 flex items-center"
          onClick={handleBackClick}
        >
          <span className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M13.707 16.293a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 1 1 1.414 1.414L8.414 10l5.293 5.293a1 1 0 0 1 0 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span>Back to Search</span>
        </button>
        {searchResults.length > 0 ? (
          searchResults.map((result, index) => {
            const inmate = inmateData.find(
              (inmate) => inmate.prison_number === result.prison_number,
            );
            return (
              <ul key={index} className="flex flex-col gap-4 w-full">
                <li>
                  <span className={resultStyle.numberDetail}>
                    Prison Number:
                  </span>
                  {result.prison_number}
                </li>
                <li>
                  <span className={resultStyle.nameDetail}>Name:</span>
                  {result.last_name +
                    "," +
                    " " +
                    result.first_name +
                    " " +
                    result.middle_name}
                </li>
                <li>
                  <span className={resultStyle.ageDetail}>Age:</span>
                  {result.age}
                </li>
                <li>
                  <span className={resultStyle.biometrics}>Height:</span>
                  {result.height}
                </li>
                <li>
                  <span className={resultStyle.biometrics}>Weight:</span>
                  {result.weight}
                </li>
                <li>
                  <span className={resultStyle.birthDetail}>Birthdate:</span>
                  {result.birthday}
                </li>
                <li>
                  <span className={resultStyle.genderDetail}>Gender:</span>
                  {result.gender}
                </li>
                <li>
                  <span className={resultStyle.provinceDetail}>Province:</span>
                  {result.province}
                </li>
                <li>
                  <span className={resultStyle.municipalDetail}>
                    Municipality:
                  </span>
                  {result.municipality}
                </li>
                <li>
                  <span className={resultStyle.barangayDetail}>Barangay:</span>
                  {result.barangay}
                </li>
                <li>
                  <span className={resultStyle.maritalDetail}>
                    Marital Status:
                  </span>
                  {result.marital_status}
                </li>
                <div className="w-52 h-52 bg-sky-900 absolute top-60 right-1/4 flex flex-col justify-center items-center">
                  <img
                    src={inmate ? inmate.imagePath : inmateImage.imagePath}
                    alt="Inmate"
                    className="w-full h-full object-cover"
                  />
                  <h2 className="text-gray-500 absolute top-56 right-5">
                    <span>PRI # </span>
                    {result.prison_number}
                  </h2>
                  <h1 className="absolute top-64 text-2xl font-bold">
                    {/* {fullNameWithInitial} */}
                    {result.last_name +
                      "," +
                      " " +
                      result.first_name +
                      " " +
                      result.middle_name.charAt(0) +
                      "."}
                  </h1>
                  <h1 className="absolute top-72 text-md font-bold">
                    Current Status:{" "}
                    <span className="text-red-600 font-semibold uppercase">
                      {result.status}
                    </span>
                  </h1>
                </div>
              </ul>
            );
          })
        ) : (
          <h1 className="absolute left-32 text-xl">
            We found <span className="font-semibold">0 matches</span> that
            inmate name.
          </h1>
        )}
      </div>
    </div>
  );
};

Results.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      prisonNumber: PropTypes.string.isRequired,
      // Define other expected properties and their types here
    }),
  ).isRequired,
  handleBackToSearch: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
};

export default Results;
