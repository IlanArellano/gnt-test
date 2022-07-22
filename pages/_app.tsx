import "../styles/globals.css";
import type { AppProps } from "next/app";
import {} from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
  faUpDown,
  faTimesRectangle,
  faBridgeLock,
  faDownLong,
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

library.add(faUpDown, faDownLong, faBridgeLock, faTimesRectangle);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
