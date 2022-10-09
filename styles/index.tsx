import { styled, css } from "@/styles/stitches.config";
import LinkComponent from "@/components/link";

export const Button = styled("button", {
  backgroundColor: "$grayA2",
  color: "$grayA9",
  borderRadius: "9999px",
  fontSize: "$1",
  padding: "10px 15px",
  cursor: "pointer",
  border: "0",
  "&:hover": {
    backgroundColor: "$grayA3",
    color: "$grayA10",
  },
});

export const Link = styled("a", {
  color: "$gray7",
  textUnderlinePosition: "under",
  "&:visited, &:link": {
    color: "$gray12",
  },
  "&:active, &:hover": {
    color: "$gray11",
  },
});

export const List = styled("ul", {
  variants: {
    type: {
      footer: {
        display: "flex",
        listStyle: "decimal-leading-zero",
        justifyContent: "flex-end",
        alignItems: "end",
        flexDirection: "column",
        "& > li": {
          flexBasis: "2em",
        },
        "@md": {
          flexDirection: "row",
          "& > li": {
            marginLeft: "$4",
          },
        },
      },
      content: {
        display: "flex",
        listStyle: "decimal-leading-zero",
        alignItems: "start",
        flexDirection: "column",
        "& > li": {
          flexBasis: "2em",
        },
        "@md": {
          "& > li": {
            marginLeft: "$4",
          },
        },
      },
    },
  },
});

export const ItemList = styled("li", {
  fontSize: "$0",
  variants: {
    title: {
      heading: {},
      subheading: {
        fontSize: "$3",
      },
    },
  },
});

export const p = css({
  variants: {
    variant: {
      title: {
        margin: "$3 0 $2",
        fontWeight: "$6",
        fontSize: "$2",
        lineHeight: "$1",
        color: "$gray12",
      },
      subtitle: {
        margin: "$2 0",
        fontWeight: "$5",
        fontSize: "$3",
        color: "$gray11",
      },
      content: {
        margin: "$1 0",
        fontSize: "$1",
      },
    },
  },
});

export const span = css({
  variants: {
    spacing: {
      x: {
        margin: "0 $0",
      },
    },
  },
});

export const footer = css({
  margin: "$5 auto $5",
});

// MDX Styles
export const mdx = {
  P: styled("p", {
    margin: "$1 0",
    fontSize: "$1",
  }),
  H2: styled("h2", {
    margin: "$2 0",
    fontWeight: "$5",
    fontSize: "$3",
    color: "$gray11",
  }),
  H3: styled("h2", {
    margin: "$1 0",
    fontWeight: "$5",
    fontSize: "$4",
    color: "$gray11",
  }),
  A: LinkComponent,
  UL: styled("ul", {
    listStyle: "hangul-consonant",
    "& > li": {
      marginBottom: "$1",
      lineHeight: "$0",
    },
  }),
};
