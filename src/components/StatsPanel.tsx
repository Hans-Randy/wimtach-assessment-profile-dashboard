// Generic empty ring icon for inactive days
const MotionPhotosOnIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="14" cy="14" r="11" stroke="#CED4DA" strokeWidth="2" />
  </svg>
);

// Ring with check for selected day
const TaskAltIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="14" cy="14" r="11" stroke="#2196F3" strokeWidth="2" />
    <path
      d="M9.5 14L12 16.5L18 10.5"
      stroke="#2196F3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DollarIcon = () => (
  <svg
    width="18"
    height="30"
    viewBox="0 0 18 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.21107 29.25V25.8458C5.59162 25.5292 4.19371 24.9222 3.01732 24.025C1.84093 23.1278 0.977734 21.8611 0.427734 20.225L3.8194 19.0375C4.27773 20.3042 4.9576 21.2674 5.85898 21.9271C6.76037 22.5868 7.9444 22.9167 9.41107 22.9167C10.6638 22.9167 11.7257 22.6726 12.5965 22.1844C13.4673 21.6962 13.9027 20.9375 13.9027 19.9083C13.9027 18.9847 13.5666 18.2524 12.8944 17.7115C12.2222 17.1705 10.6638 16.5569 8.2194 15.8708C5.59162 15.1583 3.78885 14.3073 2.81107 13.3177C1.83329 12.3281 1.3444 11.1208 1.3444 9.69583C1.3444 7.98056 1.98607 6.64792 3.2694 5.69792C4.55273 4.74792 5.86662 4.20694 7.21107 4.075V0.75H10.8777V4.075C12.4055 4.28611 13.6659 4.76771 14.659 5.51979C15.652 6.27188 16.3777 7.18889 16.8361 8.27083L13.4444 9.5375C13.0777 8.69306 12.5583 8.05972 11.8861 7.6375C11.2138 7.21528 10.2972 7.00417 9.13607 7.00417C7.79162 7.00417 6.76801 7.26146 6.06523 7.77604C5.36246 8.29063 5.01107 8.93056 5.01107 9.69583C5.01107 10.5667 5.4694 11.2528 6.38607 11.7542C7.30273 12.2556 8.89162 12.7833 11.1527 13.3375C13.2611 13.8653 14.8576 14.7031 15.9423 15.851C17.027 16.999 17.5694 18.325 17.5694 19.8292C17.5694 21.7028 16.9277 23.1278 15.6444 24.1042C14.3611 25.0806 12.7722 25.6875 10.8777 25.925V29.25H7.21107Z"
      fill="white"
    />
  </svg>
);

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
                <svg
                  width="15"
                  height="17"
                  viewBox="0 0 15 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.5 10C0.5 8.80133 0.734 7.7045 1.202 6.7095C1.66983 5.71467 2.2275 4.8275 2.875 4.048C3.5225 3.2685 4.186 2.60408 4.8655 2.05475C5.545 1.50542 6.08983 1.08333 6.5 0.788498V2.3C6.5 3.22433 6.81092 3.95541 7.43275 4.49325C8.05458 5.03108 8.752 5.3 9.525 5.3C9.84683 5.3 10.1529 5.24808 10.4432 5.14425C10.7336 5.04042 11.0127 4.88717 11.2807 4.6845L11.7115 4.34625C12.5653 4.99491 13.2436 5.81183 13.7462 6.797C14.2487 7.78233 14.5 8.85 14.5 10C14.5 11.5308 14.0648 12.8876 13.1943 14.0702C12.3238 15.2529 11.209 16.0788 9.85 16.548C10.2103 16.2378 10.4921 15.8677 10.6953 15.4375C10.8984 15.0073 11 14.5448 11 14.05C11 13.6013 10.9135 13.1677 10.7405 12.749C10.5673 12.3305 10.3179 11.9584 9.99225 11.6327L7.5 9.19625L5.03275 11.6327C4.70325 11.9622 4.44875 12.3321 4.26925 12.7422C4.08975 13.1526 4 13.5885 4 14.05C4 14.5448 4.10158 15.0073 4.30475 15.4375C4.50792 15.8677 4.78967 16.2378 5.15 16.548C3.791 16.0788 2.67625 15.2529 1.80575 14.0702C0.93525 12.8876 0.5 11.5308 0.5 10ZM7.5 10.5922L9.27875 12.3405C9.51092 12.5725 9.68917 12.8314 9.8135 13.1172C9.93783 13.4032 10 13.7142 10 14.05C10 14.7257 9.75642 15.3029 9.26925 15.7817C8.78208 16.2606 8.19233 16.5 7.5 16.5C6.80767 16.5 6.21792 16.2606 5.73075 15.7817C5.24358 15.3029 5 14.7257 5 14.05C5 13.7308 5.059 13.4273 5.177 13.1395C5.29483 12.8517 5.47625 12.5853 5.72125 12.3405L7.5 10.5922Z"
                    fill="#EEA63A"
                  />
                </svg>
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

      {/* Billing Button */}
      <button className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors font-medium flex items-center justify-center space-x-2">
        <DollarIcon />
        <span>View Billing Details</span>
      </button>
    </div>
  );
};

export default StatsPanel;
