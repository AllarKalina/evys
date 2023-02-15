export type MenuItem = {
  id: number;
  title: string;
  href: string;
  subItems?: {
    id: number;
    title: string;
    href: string;
  }[];
};
