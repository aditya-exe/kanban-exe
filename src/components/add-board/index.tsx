import { api } from "@/utils/api";
import { Transition, Dialog } from "@headlessui/react";
import { Fragment, type MouseEvent, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const AddBoard = () => {
  const { mutate: createBoard } = api.boards.createBoard.useMutation();
  const [addModalOpen, setAddModalOpen] = useState(false);
  const initialColumns = [
    {
      // id: 1,
      type: "text",
      value: "Todo",
      className: "border-2 p-2 rounded w-full",
    },
    {
      // id: 2,
      type: "text",
      value: "Doing",
      className: "border-2 p-2 rounded w-full",
    },
  ];
  const [columns, setColumns] = useState(initialColumns);

  function openModal(e: MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    setAddModalOpen(true);
  }

  function closeModal() {
    setAddModalOpen(false);
    setColumns(initialColumns);
  }

  function addInput(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setColumns((s) => {
      return [
        ...s,
        {
          // id: id++,
          type: "text",
          value: "",
          className: "border-2 p-2 rounded w-full",
        },
      ];
    });
  }

  function deleteInput(
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    id: number
  ): void {
    e.preventDefault();
    setColumns([
      ...columns.slice(0, id),
      ...columns.slice(id + 1, columns.length),
    ]);
  }

  async function handleCreate(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    createBoard({
      
    })
  }

  return (
    <>
      <div
        onClick={(e) => openModal(e)}
        className="mt-5 flex h-fit w-[300px] cursor-pointer items-center gap-x-4 rounded-r-3xl bg-teal-400 p-2 text-2xl text-teal-100 hover:bg-teal-500"
      >
        <IoMdAdd />
        <span className="text-base">Add board</span>
      </div>

      <Transition appear show={addModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add New Board
                  </Dialog.Title>

                  <div className="mt-4">
                    <form>
                      <label className="mb-4 flex flex-col gap-y-2">
                        <p className="text-sm">Board Name</p>
                        <input
                          type="text"
                          placeholder="e.g. Web Design"
                          className="w-full rounded border-2 p-2"
                        />
                      </label>

                      <label className="flex flex-col gap-y-2">
                        <p className="text-sm">Board Columns</p>
                        {columns.map((item, i) => {
                          return (
                            <div key={i} className="flex items-center gap-x-2">
                              <input
                                key={i}
                                type={item.type}
                                className={item.className}
                                value={item.value}
                              />
                              <div
                                className="cursor-pointer p-2 hover:text-red-600"
                                onClick={(e) => deleteInput(e, i)}
                              >
                                <RxCross1 />
                              </div>
                            </div>
                          );
                        })}
                      </label>
                      <button
                        onClick={(e) => addInput(e)}
                        className="mt-2 w-full rounded-full bg-teal-100 p-2"
                      >
                        Add New Column
                      </button>
                    </form>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="w-full rounded-full bg-teal-500 p-2"
                      onClick={(e) => handleCreate(e)}
                    >
                      Create New Board
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddBoard;
