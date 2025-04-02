import React from "react";

function ToggleSwitch({ id, checked, onChange, labelId }) {
  return (
    <label
      htmlFor={id}
      className="relative inline-flex items-center cursor-pointer"
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
        aria-labelledby={labelId}
      />
      <div
        className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700
                   peer-checked:after:translate-x-full peer-checked:after:border-white
                   after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600
                   peer-checked:bg-indigo-600"
      ></div>
    </label>
  );
}

export default ToggleSwitch;
