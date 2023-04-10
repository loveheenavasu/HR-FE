import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import ChakraTheme from "@chakra-ui/theme";
import store from "../redux/store";
import { Provider } from "react-redux";
import SidebarWithHeader from "@/components/Layout";

type componentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType;
  };
};

export default function App({ Component, pageProps }: componentWithPageLayout) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={ChakraTheme}>
        {Component.PageLayout ? (
          // In react 18 they removed children as a default prop on the FC type.
          //  @ts-ignore
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </ChakraProvider>
    </Provider>
  );
}
