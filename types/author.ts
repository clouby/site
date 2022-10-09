import { Avatar } from "@/types/avatar";
import { Link } from "@/types/link";

export type Author = {
  name: string;
  username: string;
  avatar: Avatar;
  role: string;
  links: Link;
};
