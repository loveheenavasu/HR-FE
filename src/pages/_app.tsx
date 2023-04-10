import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import ChakraTheme from "@chakra-ui/theme";
import store from "../redux/store";
import { Provider } from "react-redux";
import SidebarWithHeader from "@/components/Layout";
import type { ReactElement, ReactNode } from "react";

import type { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <Provider store={store}>
      <ChakraProvider theme={ChakraTheme}>
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </Provider>
  );
}
