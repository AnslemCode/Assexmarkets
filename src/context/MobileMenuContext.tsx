"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface MenuContextProps {
  menuOpened: boolean;
  setMenuOpened: Dispatch<SetStateAction<boolean>>;
  toggleMenu: () => void;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export function MenuContextProvider({ children }: { children: ReactNode }) {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const toggleMenu = () => setMenuOpened((prev) => !prev);

  return (
    <MenuContext.Provider value={{ menuOpened, setMenuOpened, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenuContext() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuContextProvider");
  }
  return context;
}
