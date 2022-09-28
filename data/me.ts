import type { Author } from "@/types/author";

const me: Author = {
  name: "Carlos López",
  username: "clouby",
  avatar: {
    src: "/images/profile.jpeg",
    width: 150,
    height: 150,
    priority: true,
  },
  role: "Developer",
};

export default me;
