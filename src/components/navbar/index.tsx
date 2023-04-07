import { useZustandStore } from "@/store/zustand";
import AddTask from "../add-task";
import EditBoardMenu from "../edit-board-menu";

const Navbar = () => {
  const { sidebarOpen, selectedBoard } = useZustandStore();

  return (
    <div className="absolute flex h-28 w-full items-center justify-between bg-teal-500 p-4 shadow-md">
      <div className="flex items-center gap-x-8">
        <div>
          <span className="select-none text-4xl font-extrabold text-teal-100">
            Kanban
          </span>
        </div>
        <div
          className={`${
            sidebarOpen
              ? "translate-x-[200px] transition-all ease-in-out"
              : "-translate-x-0 transition-all ease-in-out"
          }`}
        >
          <span className={`text-4xl font-semibold text-teal-100`}>
            {selectedBoard?.boardName || "untitled"}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <AddTask />
        <EditBoardMenu />
      </div>
    </div>
  );
};

export default Navbar;
