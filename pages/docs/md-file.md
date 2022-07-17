# Markdown Example

This is a Markdown File. Should be rendered in the same way as mdx.

Yet

1. all layout components (header sidebar, navbar and footer) and style are not rendered.
2. showing some extra content. Equivalent as follows (only formatted):

At the beginning of the file:

```js
import withLayout from "nextra-theme-docs";
import { withSSG } from "nextra/ssg";
import layoutConfig from "/Users/pablo/LocalDocs/repo/PabloLION/test-nextra/theme.config.js";
```

At the end of the file:

```js
export default function NextraPage(props) {
  return withSSG(
    withLayout(
      {
        filename: "md-file.md",
        route: "/docs/md-file",
        meta: {},
        pageMap: [
          { name: "an-mdx", route: "/an-mdx" },
          {
            name: "docs",
            children: [
              { name: "doc-content", route: "/docs/doc-content" },
              { name: "index", route: "/docs" },
              { name: "md-file", route: "/docs/md-file" },
              { name: "mdx-file", route: "/docs/mdx-file" },
            ],
            route: "/docs",
          },
          {
            name: "non-doc-page",
            children: [
              {
                name: "but-with-mdx-file",
                route: "/non-doc-page/but-with-mdx-file",
              },
            ],
            route: "/non-doc-page",
          },
        ],
      },
      layoutConfig
    )
  )(props);
}
```
