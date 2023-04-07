import { useZustandStore } from "@/store/zustand";
import { signOut, useSession } from "next-auth/react";
import { ImEyeBlocked, ImExit } from "react-icons/im";

const HideSidebarSignOut = () => {
  const { sidebarOpen, setSidebarOpen } = useZustandStore();
  const { data: session } = useSession();

  function handleClose(e: React.MouseEvent<HTMLDivElement>): void {
    e.preventDefault();
    setSidebarOpen(sidebarOpen);
  }

  function handleSignout(e: React.MouseEvent<HTMLDivElement>): void {
    e.preventDefault();
    signOut().catch((err) => console.log(err));
  }

  return (
    <div className="mb-2 flex flex-col gap-y-2">
      <div
        onClick={(e) => handleClose(e)}
        className="flex h-fit w-[300px] cursor-pointer items-center gap-x-4 rounded-r-3xl bg-teal-400 p-2 text-2xl text-teal-100 hover:bg-teal-500"
      >
        <ImEyeBlocked />
        <span className="text-base">Hide sidebar</span>
      </div>
      <div
        onClick={(e) => handleSignout(e)}
        className="flex h-fit w-[300px] cursor-pointer items-center gap-x-2 overflow-ellipsis rounded-r-3xl bg-teal-400 p-2 text-teal-100 hover:bg-teal-500"
      >
        <ImExit className="text-2xl" />
        <span className="text-lg">Sign out</span>
        <span className="text-md">{session?.user.name}</span>
      </div>
    </div>
  );
};

export default HideSidebarSignOut;
