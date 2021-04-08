import React, { useState, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";

type Props = {
  name: string
  items: any[]
}

const Dropdown = ({name, items}: Props ) => {
  const [isOpen, setIsOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  // Allow for outside click
  useEffect(() => {
    function handleOutsideClick(event) {
      if (!container?.current?.contains(event.target)) {
        if (!isOpen) return;
        setIsOpen(false);
      }
    }

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isOpen, container]);

  // Allow to use the `esc` key
  useEffect(() => {
    function handleEscape(event) {
      if (!isOpen) return;

      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keyup", handleEscape);
    return () => document.removeEventListener("keyup", handleEscape);
  }, [isOpen]);

  return (
    <div ref={container} className="relative inline-block text-left" 
      onMouseOver={() => setIsOpen((v) => true)}
      onMouseLeave={() => setIsOpen((v) => false)}
    >
      <div>
        <button
          type="button"
          className="p-3 mr-4 inline-flex items-center justify-center text-black rounded hover:text-gray-700 focus:outline-none focus:text-gray-700 hover:bg-white transition ease-in-out duration-150"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          {name}
        </button>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-75"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        className="absolute w-56 mt-0 origin-top-right rounded-md shadow-lg z-10"
      >
        <div className="bg-white rounded-md shadow-xs">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="https://github.com/tailwindlabs/tailwindui-react"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              role="menuitem"
            >
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/@tailwindui/react"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              role="menuitem"
            >
              NPM
            </a>
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default Dropdown