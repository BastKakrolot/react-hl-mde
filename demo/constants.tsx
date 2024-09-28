import React from "react";
import {
  Bold,
  Italic,
  Strikethrough,
  Link,
  Quote,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Image,
  Code,
  CodeXml,
  ListTodo,
  ListOrdered,
  List
} from "lucide-react";
const IconMap: Record<string, JSX.Element> = {
  bold: <Bold />,
  italic: <Italic />,
  strikethrough: <Strikethrough />,
  link: <Link />,
  quote: <Quote />,
  h1: <Heading1 />,
  h2: <Heading2 />,
  h3: <Heading3 />,
  h4: <Heading4 />,
  h5: <Heading5 />,
  h6: <Heading6 />,
  image: <Image />,
  code: <Code />,
  codeBlock: <CodeXml />,
  cl: <ListTodo />,
  ol: <ListOrdered />,
  ul: <List />
};

export { IconMap };
