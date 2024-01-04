import { useState } from "react";
import { type MenuItem } from "~/types/navigationTypes";
import SubMenuItem from "./SubMenuItem";

type SubItemsListProps = {
  selectedMenuItem: MenuItem;
};

export default function SubItemsList({ selectedMenuItem }: SubItemsListProps) {
  const [secondCol, setSecondCol] = useState<MenuItem>();
  const [thirdCol, setThirdCol] = useState<MenuItem>();

  return (
    <div id="firstSubmenuCol">
      {selectedMenuItem.subMenu?.map((subMenuItem) => (
        <div
          key={subMenuItem.label}
          className={"flex flex-col border-2"}
          onMouseEnter={() => setSecondCol(subMenuItem)}
        >
          <button className="border-2">{subMenuItem.label}</button>
          {secondCol && secondCol.label === subMenuItem.label && (
            <div id="secondSubmenuCol">
              {secondCol?.subMenu?.map((subMenuItem) => (
                <SubMenuItem
                  key={subMenuItem.label}
                  subMenuItem={subMenuItem}
                  onMouseEnter={() => setThirdCol(subMenuItem)}
                >
                  {thirdCol && thirdCol.label === subMenuItem.label && (
                    <div id="thirdSubmenuCol">
                      {thirdCol?.subMenu?.map((subMenuItem) => (
                        <SubMenuItem
                          key={subMenuItem.label}
                          subMenuItem={subMenuItem}
                        />
                      ))}
                    </div>
                  )}
                </SubMenuItem>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
