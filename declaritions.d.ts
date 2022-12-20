declare module '*.svg' {
  import type { SvgProps } from "./src/types";
  const content: React.FC<SvgProps>;
  export default content;
}