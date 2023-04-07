import { type MouseEvent } from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { ImEye } from "react-icons/im";
import { useZustandStore } from "@/store/zustand";
import { signIn, useSession } from "next-auth/react";
import LoadingSpinner from "@/components/loading-spinner";
import { useDarkMode } from "usehooks-ts";

const Home = () => {
  const { data: session, status } = useSession();
  const { sidebarOpen, setSidebarOpen, setBoards, boards } = useZustandStore();

  function handleOpenSidebar(e: MouseEvent<HTMLDivElement>): void {
    e.preventDefault();
    setSidebarOpen(sidebarOpen);
  }

  if (status === "loading") {
    return <LoadingSpinner size={80} />;
  }

  return (
    <main className="h-screen w-screen justify-center bg-teal-100">
      {session ? (
        <div className="relative h-full">
          <Navbar />
          {sidebarOpen ? (
            <Sidebar />
          ) : (
            <div
              onClick={(e) => handleOpenSidebar(e)}
              className="absolute bottom-16 flex w-fit cursor-pointer items-center rounded-r-3xl bg-teal-700 p-4 text-2xl text-teal-100 hover:bg-teal-500"
            >
              <ImEye />
            </div>
          )}
        </div>
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-y-7">
          <h1 className="text-6xl font-bold tracking-tighter text-teal-500">
            KANBAN
          </h1>
          <button
            onClick={() => {
              (async () => {
                await signIn("discord");
              })().catch((err) => console.log(err));
            }}
            className="cursor-pointer rounded border-2 bg-teal-500 p-3 text-white shadow-md"
          >
            Login with Discord
          </button>
        </div>
      )}
    </main>
  );
};

export default Home;
