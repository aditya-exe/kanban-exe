import { Menu, Transition } from "@headlessui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Fragment, useState } from "react";
import EditBoard from "../edit-board";

const EditBoardMenu = () => {
  const [editModalOpen, setEditModalOpen] = useState(false);

  function closeModal() {
    setEditModalOpen(false);
  }

  return (
    <div>
      <Menu as="div" className="realtive inline-block text-center">
        <div>
          <Menu.Button className="p-3 text-2xl hover:bg-teal-200 rounded-full">
            <BsThreeDotsVertical className="" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-4 w-[150px] mr-3 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-teal-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => setEditModalOpen(true)}
                  >
                    Edit Board
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-red-500 text-white" : "text-red-600"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Delete Board
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      {editModalOpen && <EditBoard editModalOpen closeModal={closeModal} />}
    </div>
  );
};

export default EditBoardMenu;
