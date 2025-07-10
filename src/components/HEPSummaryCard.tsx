const HEPSummaryCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm flex overflow-hidden">
      {/* Left side content */}
      <div className="p-6 flex-1">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            New HEP for Wimtach Client
          </h2>
          <p className="text-sm text-gray-500">
            Edited <span className="text-gray-900">16 hours ago</span>
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center text-center">
          <div className="flex-1 border-r border-gray-200">
            <p className="text-sm text-gray-500 mb-1">Sessions per Day</p>
            <p className="text-3xl font-bold text-gray-900">5</p>
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-500 mb-1">Total Reps</p>
            <p className="text-3xl font-bold text-gray-900">254</p>
          </div>
        </div>
      </div>

      {/* Right side Edit Button */}
      <button className="bg-[#E090DA] text-white px-8 flex items-center justify-center hover:bg-[#d082d2] transition-colors font-medium">
        Edit HEP
      </button>
    </div>
  );
};

export default HEPSummaryCard;
