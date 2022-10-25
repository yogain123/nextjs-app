import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Header from "./components/layout/Header";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
