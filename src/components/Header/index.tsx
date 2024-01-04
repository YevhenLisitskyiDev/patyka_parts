import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { useState } from "react";
import { navConfig } from "~/configs/navConfig";
import { type MenuItem } from "~/types/navigationTypes";
import SubItemsList from "./SubItemsList";

export default function Header() {
  const user = useUser();
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem>();
  const headerBgColor = selectedMenuItem ? "bg-transparent" : "bg-black";
  const headerTextColor = selectedMenuItem ? "text-black" : "text-white";

  const onMenuItemClick = (label: string) => {
    if (selectedMenuItem?.label === label) {
      setSelectedMenuItem(undefined);
    } else {
      const menuItem = navConfig.find((navItem) => navItem.label === label);
      setSelectedMenuItem(menuItem);
    }
  };

  return (
    <>
      <header
        className={`absolute flex w-full justify-between ${headerBgColor} ${headerTextColor} z-10 px-10 py-5`}
      >
        <div>logo</div>
        <div className="flex ">
          <nav className="flex">
            {navConfig.map((navItem) =>
              navItem.subMenu ? (
                <button
                  key={navItem.label}
                  className="px-5 py-2"
                  onClick={() => onMenuItemClick(navItem.label)}
                >
                  {navItem.label}
                </button>
              ) : (
                <a
                  key={navItem.label}
                  className="px-5 py-2"
                  href={navItem.href}
                >
                  {navItem.label}
                </a>
              ),
            )}
          </nav>
          <UserButton afterSignOutUrl="/" />
          {!user.isSignedIn && <SignInButton />}
        </div>
      </header>

      {!!selectedMenuItem && (
        <div className="absolute flex h-full w-full items-start justify-between bg-red-400 px-10 pt-32">
          <SubItemsList selectedMenuItem={selectedMenuItem} />
          <button onClick={() => setSelectedMenuItem(undefined)}>close</button>
        </div>
      )}
    </>
  );
}
