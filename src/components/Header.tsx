import { MenuIcon } from "../icons/MenuIcon";
import { XIcon } from "../icons/XIcon";

export function Header() {
  return (
    <header className="flex justify-between px-4 max-w-sm">
      <p className="font-extrabold">
        Pomo<span className="text-red-400">Timer</span>
      </p>
      <button className="">
        <MenuIcon className="size-10" />
        <XIcon className="size-10"/>
      </button>
      <nav className="fixed top-0 -right-full w-full h-full bg-primary transition-all ease-in-out">
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
