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
  links: {
    post: {
      name: "posts",
      link: "/blog",
    },
    poetry: {
      name: "poetry",
      link: "https://www.instagram.com/poesia_en_siluetas/",
    },
    github: {
      name: "github",
      link: "https://github.com/clouby/",
    },
    twitter: {
      name: "twitter",
      link: "https://twitter.com/cloubyy/",
    },
    generativeCoding: {
      name: "generative coding",
      link: "https://www.instagram.com/clou.gnrt/",
    },
  },
};

export default me;
