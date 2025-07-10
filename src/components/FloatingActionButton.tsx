import floating_action from "../assets/floating_action.png";

const FloatingActionButton = () => {
  return (
    <button className="fixed bottom-8 right-8 bg-[#845EC0] p-4 rounded-lg shadow-lg hover:bg-[#704da8] transition-colors">
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
