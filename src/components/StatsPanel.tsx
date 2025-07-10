import task_alt from "../assets/task_alt.png";
import motion_photo_on from "../assets/motion_photo_on.png";
import attach_money from "../assets/attach_money.png";
import streak from "../assets/local_fire_department.png";

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
                <img src={streak} alt="Streak Icon" width="15" height="17" />
              </div>
            </div>
          </div>

          {/* Days of Week */}
          <div className="flex justify-between mb-6 text-xs text-gray-500">
            {days.map((day) => (
              <div key={day} className="text-center">
                <div className="mb-1">
                  {day === "Sat" ? (
                    <img
                      src={task_alt}
                      alt="Task alt Icon"
                      width="28"
                      height="28"
                    />
                  ) : (
                    <img
                      src={motion_photo_on}
                      alt="Motion Photo on Icon"
                      width="28"
                      height="28"
                    />
                  )}
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
        <img src={attach_money} alt="Dollar Icon" width="18" height="30" />
        <span>View Billing Details</span>
      </button>
    </div>
  );
};

export default StatsPanel;
