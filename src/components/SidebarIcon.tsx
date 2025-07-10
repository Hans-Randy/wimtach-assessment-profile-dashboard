const SidebarIcon = ({
  icon,
  label,
  width,
  height,
}: {
  icon: string;
  label: string;
  width: string;
  height: string;
}) => (
  <div
    className="p-3 text-white hover:bg-[#704da8] rounded-lg cursor-pointer"
    aria-label={label}
  >
    <img src={icon} alt={label} width={width} height={height} />
  </div>
);

export default SidebarIcon;
