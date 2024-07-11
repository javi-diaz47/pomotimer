import { useState } from "react";
import { MenuIcon } from "../icons/MenuIcon";
import { XIcon } from "../icons/XIcon";
import { twMerge } from "tailwind-merge";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    const newOpen = !isOpen;
    setIsOpen(newOpen);
  };

  return (
    <header className="flex justify-between px-4 max-w-2xl bg-white py-2 shadow-neutral-200 shadow-lg">
      <p className="font-extrabold">
        Pomo<span className="text-red-400">Timer</span>
      </p>
      <button
        onClick={toggleNavbar}
        className="relative size-12 rounded-xl grid place-items-center z-10"
      >
        <MenuIcon
          className={twMerge(isOpen && "sr-only", "size-10 absolute")}
        />
        <XIcon className={twMerge(!isOpen && "sr-only", "size-10 absolute text-white")} />
      </button>
      <nav
        className={twMerge(
          isOpen && "-right-0",
          !isOpen && "-right-full",
          "fixed top-0 w-full h-full bg-primary transition-all ease-in-out",
        )}
      >
        <ul className="text-white font-bold w-full h-full flex flex-col justify-center items-center gap-12">
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
    </header>
  );
}
