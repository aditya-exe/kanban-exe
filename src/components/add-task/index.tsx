import { Transition, Dialog } from "@headlessui/react";
import { Fragment, MouseEvent, useState } from "react";
import { RxCross1 } from "react-icons/rx";

const AddTask = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const initialSubtasks = [
    {
      // id: 1,
      type: "text",
      value: "Todo",
      className: "border-2 p-2 rounded w-full focus:outline-teal-300",
    },
    {
      // id: 2,
      type: "text",
      value: "Doing",
      className: "border-2 p-2 rounded w-full focus:outline-teal-300",
    },
  ];
  const [subtasks, setSubtasks] = useState(initialSubtasks);

  function openModal(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setAddModalOpen(true);
  }

  function closeModal() {
    setAddModalOpen(false);
    setSubtasks(initialSubtasks);
  }

  function addSubtask(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setSubtasks((s) => {
      return [
        ...s,
        {
          // id: id++,
          type: "text",
          value: "",
          className: "border-2 p-2 rounded w-full focus:outline",
        },
      ];
    });
  }

  function deleteSubtask(e: MouseEvent<HTMLDivElement>, id: number): void {
    e.preventDefault();
    setSubtasks([
      ...subtasks.slice(0, id),
      ...subtasks.slice(id + 1, subtasks.length),
    ]);
  }

  return (
    <>
      <button
        className="rounded-full p-4 text-teal-100 bg-teal-900 disabled:cursor-not-allowed"
        // disabled
        onClick={(e) => openModal(e)}
      >
        + Add New Task
      </button>

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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-teal-100/90 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add New Task
                  </Dialog.Title>

                  <div className="mt-4">
                    <form>
                      <label className="mb-4 flex flex-col gap-y-2">
                        <p className="text-sm">Title</p>
                        <input
                          type="text"
                          placeholder="e.g.Take coffee break"
                          className="border-2 p-2 rounded w-full focus:outline-teal-300"
                        />
                      </label>
                      <label className="mb-4 flex flex-col gap-y-2">
                        <p className="text-sm">Description</p>
                        <textarea
                          rows={6}
                          className="border-2 p-2 rounded w-full focus:outline-teal-300"
                          placeholder="e.g. It's always good to take a break. The 15 minute break will recharge the batteries a little"
                        />
                      </label>
                      <label className="gap-y-2 flex flex-col">
                        <p className="text-sm">Subtasks</p>
                        {subtasks.map((item, i) => {
                          return (
                            <div key={i} className="flex gap-x-2 items-center">
                              <input
                                key={i}
                                type={item.type}
                                className={"border-2 p-2 rounded w-full focus:outline-teal-300"}
                                value={item.value}
                              />
                              <div
                                className="p-2 cursor-pointer hover:text-red-600"
                                onClick={(e) => deleteSubtask(e, i)}
                              >
                                <RxCross1 />
                              </div>
                            </div>
                          );
                        })}
                      </label>
                      <button
                        onClick={(e) => addSubtask(e)}
                        className="rounded-full w-full bg-teal-400 p-2 mt-2 border-2 hover:border-teal-700"
                      >
                        Add New Subtask
                      </button>
                      <label>
                        <p className="mt-2 text-sm">Status</p>
                      </label>
                    </form>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="rounded-full w-full p-2 bg-teal-400 border-2 hover:border-teal-700"
                      onClick={closeModal}
                    >
                      Create Task
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

export default AddTask;
