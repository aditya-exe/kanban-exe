import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import ThemeSwitch from "../theme-switch";
import HideSidebarSignOut from "../hide-sidebar-sign-out";
import BoardSelector from "../board-selector";

const Sidebar = () => {

  return (
    <Transition
      show={true}
      as={Fragment}
      enter="transition ease-out duration-500"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-500"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <div className="relative w-[340px] h-screen gap-y-3 flex flex-col bg-teal-700 shadow-lg">
        <div className="h-28 flex items-center p-4">
          <span className="text-4xl select-none text-teal-100 font-extrabold">
            Kanban
          </span>
        </div>
        <BoardSelector />
        <ThemeSwitch />
        <HideSidebarSignOut />
      </div>
    </Transition>
  );
};

export default Sidebar;
