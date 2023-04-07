import { Switch } from "@headlessui/react";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { useDarkMode } from "usehooks-ts";

const ThemeSwitch = () => {
  const { toggle: setEnabled, isDarkMode: enabled } = useDarkMode();
  
  return (
    <div className="flex w-full justify-center">
      <div className="flex h-fit w-[60%] items-center justify-between gap-x-2 rounded-lg bg-teal-900 p-2">
        <BsSun className="text-2xl text-teal-200" />
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? "bg-purple-700" : "bg-teal-700"
          } relative inline-flex h-[25px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${enabled ? "translate-x-6" : "translate-x-0"}
            pointer-events-none inline-block h-[21px] w-[21px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
        <BsMoonStars className="text-2xl text-teal-200" />
      </div>
    </div>
  );
};

export default ThemeSwitch;
