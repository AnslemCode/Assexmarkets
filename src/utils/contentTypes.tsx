interface NavigationLink {
  id: number;
  href: string;
  text: string;
  dropdown: boolean;
  dropdownLinks?: NavigationLink[];
}

export type { NavigationLink };
