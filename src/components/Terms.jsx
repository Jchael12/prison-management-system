import PropTypes from "prop-types";

const TermsAndConditionsModal = ({ onClose }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded-lg z-20">
        {/* Your terms and conditions content */}
        <h2>Terms and Conditions</h2>
        <p>This is the content of your terms and conditions...</p>
        {/* Close button */}
        <button
          onClick={onClose}
          className="mt-4 p-2 bg-gray-300 hover:bg-gray-400 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

TermsAndConditionsModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default TermsAndConditionsModal;
