interface IMenuItem {
  label: string;
  icon: string;
  routerLink: string[];
}

export interface IMenu {
  label: string;
  items: IMenuItem[];
}
