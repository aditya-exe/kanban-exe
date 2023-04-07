import { useZustandStore } from "@/store/zustand";
import { Transition, Dialog } from "@headlessui/react";
import { Fragment, useState } from "react";
import { RxCross1 } from "react-icons/rx";

const EditBoard = ({
  editModalOpen,
  closeModal,
}: {
  editModalOpen: boolean;
  closeModal: () => void;
}) => {
  // const { selectedBoard } = useZustandStore();
  const [boardNameInput, setBoardNameInput] = useState("");
  

  return (
    <>
      <Transition appear show={editModalOpen} as={Fragment}>
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
                    Edit Board
                  </Dialog.Title>

                  <div className="mt-4">
                    <form>
                      <label className="mb-4 flex flex-col gap-y-2">
                        <p className="text-sm">Board Name</p>
                        <input
                          type="text"
                          onChange={(e) => {
                            e.preventDefault();
                            setBoardNameInput(e.target.value);
                          }}
                          className="border-2 p-2 rounded w-full focus:outline-teal-300"
                        />
                      </label>
                    </form>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="rounded-full w-full p-2 bg-teal-400 border-2 hover:border-teal-700"
                      // onClick={closeModal}
                    >
                      Save Changes
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

export default EditBoard;
