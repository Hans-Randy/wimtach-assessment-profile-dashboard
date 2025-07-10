import edit_icon from "../assets/edit.png";

const PatientHeader = () => {
  return (
    <div className="space-y-4">
      <div className="text-sm text-[#4D4482]">Dashboard / Wimtach Client</div>
      <div className="flex items-center justify-between">
        {/* Left Side: Patient Info */}
        <div className="w-[35%] flex items-start space-x-6">
          <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
            WI
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Wimtach Client</h1>
            <p className="text-sm text-gray-500 mt-1">
              Last Active: Mar 20, 2019 23:14
            </p>
            <button className="mt-4 bg-[#845EC0] text-white px-5 py-2 rounded-md hover:bg-[#704da8] transition-colors">
              Discharge Patient
            </button>
          </div>
        </div>
        {/* Right Side: Contact Details */}
        <div className="flex items-center space-x-4">
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="grid grid-cols-2 gap-y-2">
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Phone:
                </label>
                <p className="text-gray-900 font-semibold">(555) 555-5555</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Email:
                </label>
                <p className="text-gray-900 font-semibold">
                  wimtachclient@hotmail.com
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Injury Location:
                </label>
                <p className="text-gray-900 font-semibold">Right</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Diagnosis:
                </label>
                <p className="text-gray-900 font-semibold">
                  Other specified malignant neoplasm of skin, unspecified -
                  C4499
                </p>
              </div>
            </div>
          </div>

          <button className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-400 text-white shadow-md transition-colors hover:bg-slate-500">
            <img src={edit_icon} alt="Edit Icon" width={21} height={21} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientHeader;
