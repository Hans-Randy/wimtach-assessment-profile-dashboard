import range_of_motion_restoration from "../assets/range_of_motion_restoration.png";

const PatientEducation = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900">Patient Education</h2>
      <hr className="my-4 border-gray-200" />
      <p className="text-gray-900 mb-6">Coming soon</p>
      <div className="flex justify-center">
        <img
          src={range_of_motion_restoration}
          alt="Range of Motion Restoration"
          width="318px"
          height="153px"
        />
      </div>
    </div>
  );
};

export default PatientEducation;
