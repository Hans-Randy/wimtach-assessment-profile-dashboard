import { FloatingActionIcon } from "./Icons";

const FloatingActionButton = () => {
  return (
    <button className="fixed bottom-8 right-8 bg-[#845EC0] p-4 rounded-lg shadow-lg hover:bg-[#704da8] transition-colors">
      <FloatingActionIcon />
    </button>
  );
};

export default FloatingActionButton;
