import fs from "fs";
import { cwd } from "process";
import path from "path";
import readingTime from "reading-time";
import { bundleMDX } from "mdx-bundler";
import rehypeHighlight from "rehype-highlight";
import rehypeMetaAttribute from "@/lib/rehype-meta-attribute";
import remarkSlug from "remark-slug";

import type { Frontmatter } from "@/types/frontmatter";

export const dataDirectory = path.join(cwd(), "data");
export const blogDirectory = path.join(dataDirectory, "blog");

export async function getPostDataMDX(id) {
  const source = fs.readFileSync(path.join(blogDirectory, `${id}.mdx`), "utf8");

  let { frontmatter, code } = await bundleMDX({
    source,
    mdxOptions(options, _frontmatter) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkSlug];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeHighlight,
        rehypeMetaAttribute,
      ];

      return options;
    },
  });

  return {
    frontmatter: {
      wordCount: code.split(/s+/g).length,
      readingTime: readingTime(code),
      ...(frontmatter as Frontmatter),
    },
    code,
    id,
  };
}

export function getAllPostIds() {
  const filenames = fs.readdirSync(blogDirectory) as string[];

  return filenames.map((filename) => {
    const pathname = filename.replace(/\.mdx$/, "");
    return {
      params: {
        id: pathname,
        path: `/blog/${pathname}`,
      },
    };
  });
}
