
// import type { AppProps } from 'next/app'
import { Authenticato, Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { AppPropsWithLayout } from "../types";
import { MainLayout } from "../layouts/MainLayout";
import awsExports from "../src/aws-exports";

import '../styles/globals.css'
import "antd/dist/antd.dark.css";
import "@aws-amplify/ui-react/style.css";

Amplify.configure({ ...awsExports, ssr: true });

const components = {
  Header() {
    return <div style = {{ padding: "24px 0" }}>Login Header Sample</div>;
  },
};


export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? MainLayout;
  return (
    <Authenticator.Provider>
      {getLayout(
        <Authenticator hideSignUp components = { components }>
          <Component { ...pageProps } />
        </Authenticator>
      )}
    </Authenticator.Provider>
  // <Component {...pageProps} />
  );
}
