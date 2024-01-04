import { type PropsWithChildren } from "react";
import { type MenuItem } from "~/types/navigationTypes";

interface SubItemProps {
  subMenuItem: MenuItem;
  onMouseEnter?: () => void;
}

export default function SubMenuItem({
  subMenuItem,
  onMouseEnter,
  children,
}: PropsWithChildren<SubItemProps>) {
  return (
    <div className={"flex flex-col border-2"} onMouseEnter={onMouseEnter}>
      <a href={subMenuItem.href}>{subMenuItem.label}</a>
      {children}
    </div>
  );
}
