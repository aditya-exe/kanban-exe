import { BoardState, useZustandStore } from "@/store/zustand";
import { type Board } from "@/types";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { AiFillCaretDown, AiOutlineCheck } from "react-icons/ai";
import AddBoard from "../add-board";

// const people = [
//   { name: "Wade Cooper" },
//   { name: "Arlene Mccoy" },
//   { name: "Devon Webb" },
//   { name: "Tom Cook" },
//   { name: "Tanya Fox" },
//   { name: "Hellen Schmidt" },
// ];

const BoardSelector = () => {
  const untitledBoard: Board = {
    boardName: "Untitled Board",
    boardColumns: [],
  };
  const { boards, setSelectedBoard } = useZustandStore();
  // const [selected, setSelected] = useState(boards[0] || untitledBoard);


  return (
    <div className=" flex flex-grow flex-col">
      {/* TODO add real boards */}
      <span className="text-sm tracking-widest ml-6 mb-4 text-teal-200">
        ALL BOARDS ({boards.length})
      </span>

      <Listbox
        as="div"
        // value={selected}
        // onChange={(e) => selectBoard(e)}
        className={"ml-2"}
      >
        <div className="relative mt-1 =">
          <Listbox.Button className="relative w-[80%] cursor-pointer py-2 pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 border-2 border-teal-600 rounded hover:bg-teal-500 hover:transition-all">
            <span className="block truncate text-teal-200">
              {/* {selected?.boardName} */}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <AiFillCaretDown className="text-teal-500" />
            </span>
          </Listbox.Button>
          {boards.length > 0 && (
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-[80%] overflow-auto rounded-md bg-teal-500 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {boards.map((board, boardIdx) => (
                  <Listbox.Option
                    key={boardIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-100 text-teal-900" : "text-gray-900"
                      }`
                    }
                    value={board}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {board.boardName}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-teal-600">
                            <AiOutlineCheck />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          )}
        </div>
      </Listbox>

      <AddBoard />
    </div>
  );
};

export default BoardSelector;