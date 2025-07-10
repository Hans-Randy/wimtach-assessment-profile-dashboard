import floating_action from "../assets/floating_action.png";

const FloatingActionButton = () => {
  return (
    <button className="absolute w-[72px] h-[72px] bottom-0 right-0 bg-[#845EC0] rounded-lg shadow-lg hover:bg-[#704da8] transition-colors flex items-center justify-center">
      <img
        src={floating_action}
        alt="Floating Action Icon"
        width="29"
        height="39"
      />
    </button>
  );
};

export default FloatingActionButton;
