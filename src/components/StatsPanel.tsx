import {
  MotionPhotosOnIcon,
  TaskAltIcon,
  DollarIcon,
  StreakIcon,
} from "./Icons";

const StatsPanel = () => {
  const days = ["Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Today"];

  return (
    <div className="space-y-6">
      {/* Stats Card */}
      <div className="bg-white rounded-lg shadow-sm flex overflow-hidden">
        {/* Left Content */}
        <div className="p-6 flex-1">
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Stats</h3>
              <span className="text-sm text-gray-500">for Period 3</span>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-500">Streaks</span>
              <div className="flex items-center justify-end space-x-1">
                <span className="text-2xl font-bold text-gray-800">1</span>
                <StreakIcon />
              </div>
            </div>
          </div>

          {/* Days of Week */}
          <div className="flex justify-between mb-6 text-xs text-gray-500">
            {days.map((day) => (
              <div key={day} className="text-center">
                <div className="mb-1">
                  {day === "Sat" ? <TaskAltIcon /> : <MotionPhotosOnIcon />}
                </div>
                <span>{day}</span>
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="flex text-center pt-4">
            <div className="flex-1 pr-4 border-r border-gray-300">
              <p className="text-sm text-gray-500">Weeks Enrolled</p>
              <p className="text-2xl font-bold text-gray-800">9</p>
            </div>
            <div className="flex-1 pl-4">
              <p className="text-sm text-gray-500">Compliance</p>
              <p className="text-2xl font-bold text-gray-800">16/30</p>
            </div>
          </div>
        </div>

        {/* Right "View Stats" Button */}
        <button className="bg-yellow-500 text-white font-bold flex items-center justify-center px-6 hover:bg-yellow-600 transition-colors">
          View Stats
        </button>
      </div>
      <button className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors font-medium flex items-center justify-center space-x-2">
        <DollarIcon />
        <span>View Billing Details</span>
      </button>
    </div>
  );
};

export default StatsPanel;
