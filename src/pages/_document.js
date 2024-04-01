// import { ThemeContextProvider } from "@/context/ThemeContext";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <ThemeContextProvider> */}
        <Main />
        <NextScript />
        {/* </ThemeContextProvider> */}
      </body>
    </Html>
  );
}
