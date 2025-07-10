const Icon = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div
    className="p-3 text-white hover:bg-[#704da8] rounded-lg cursor-pointer"
    aria-label={label}
  >
    {icon}
  </div>
);

export default Icon;
