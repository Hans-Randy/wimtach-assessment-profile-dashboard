import Sidebar from "../components/Sidebar";
import PatientHeader from "../components/PatientHeader";
import HEPSummaryCard from "../components/HEPSummaryCard";
import StatsPanel from "../components/StatsPanel";
import PatientEducation from "../components/PatientEducation";
import FloatingActionButton from "../components/FloatingActionButton";

const PatientProfile = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <PatientHeader />
        <div className="flex space-x-6">
          {/* Left Column */}
          <div className="w-[750px] flex-1 flex flex-col space-y-6">
            <HEPSummaryCard />
            <PatientEducation />
          </div>

          {/* Right Column (Stats Panel) */}
          <div className="w-[407px] flex-shrink-0">
            <StatsPanel />
          </div>
        </div>
      </main>
      <FloatingActionButton />
    </div>
  );
};

export default PatientProfile;
