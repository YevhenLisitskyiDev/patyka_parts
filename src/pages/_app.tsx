import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ukUA } from "@clerk/localizations";
import Header from "~/components/Header";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider localization={ukUA} {...pageProps}>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Component {...pageProps} />
      </main>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
