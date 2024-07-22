import { useState } from "react";
import { MenuIcon } from "../icons/MenuIcon";
import { XIcon } from "../icons/XIcon";
import { twMerge } from "tailwind-merge";

export function HeaderNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    const newOpen = !isOpen;
    setIsOpen(newOpen);
  };

  return (
    <>
      <button
        onClick={toggleNavbar}
        className="relative size-12 rounded-xl grid place-items-center z-10"
      >
        <MenuIcon
          className={twMerge(isOpen && "sr-only", "size-10 absolute dark:text-text")}
        />
        <XIcon className={twMerge(!isOpen && "sr-only", "size-10 absolute text-text")} />
      </button>
      <nav
        className={twMerge(
          isOpen && "-right-0",
          !isOpen && "-right-full",
          "fixed top-0 w-full h-full bg-primary dark:bg-surface transition-all ease-in-out",
        )}
      >
        <ul className="text-white dark:text-text font-bold w-full h-full flex flex-col justify-center items-center gap-12">
          <li>
            <a href="/" className="line-through">
              Home
            </a>
          </li>
          <li>
            <a href="/statistics">Statistics</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
