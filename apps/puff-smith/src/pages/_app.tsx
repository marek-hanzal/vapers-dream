import {bootstrap}                      from "@/puff-smith/bootstrap/bootstrap";
import {emotionCache}                   from "@/puff-smith/emotion-cache";
import "@/puff-smith/styles/globals.css";
import {trpc}                           from "@/puff-smith/utils/trpc";
import type {ColorScheme}               from "@mantine/core";
import {
    ColorSchemeProvider,
    MantineProvider
}                                       from "@mantine/core";
import {NotificationsProvider}          from "@mantine/notifications";
import {
    getCookie,
    setCookies
}                                       from "cookies-next";
import type {GetServerSidePropsContext} from "next";
import {appWithTranslation}             from "next-i18next";
import type {AppProps}                  from "next/app";
import Head                             from "next/head";
import {useRouter}                      from "next/router";
import {
    useEffect,
    useState
}                                       from "react";

const PuffSmith = (props: AppProps & { colorScheme: ColorScheme }) => {
    const router = useRouter();
    useEffect(() => {
        (async () => {
            await bootstrap(router.locale || router.defaultLocale || "en");
        })();
    }, [
        router.locale,
        router.defaultLocale,
    ]);
    const {Component, pageProps}        = props;
    const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

    const toggleColorScheme = (value?: ColorScheme) => {
        const nextColorScheme = value || (colorScheme === "dark" ? "light" : "dark");
        setColorScheme(nextColorScheme);
        setCookies("mantine-color-scheme", nextColorScheme, {maxAge: 60 * 60 * 24 * 30});
    };

    return <>
        <Head>
            <title>Puff Smith</title>
            <meta name={"viewport"} content={"minimum-scale=1, initial-scale=1, width=device-width"}/>
            <link rel="shortcut icon" href="/favicon.ico"/>
        </Head>
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider
                theme={{colorScheme}}
                withGlobalStyles
                withNormalizeCSS
                emotionCache={emotionCache}
            >
                <NotificationsProvider>
                    <Component {...pageProps} />
                </NotificationsProvider>
            </MantineProvider>
        </ColorSchemeProvider>
    </>;
};

PuffSmith.getInitialProps = ({ctx}: { ctx: GetServerSidePropsContext }) => ({
    colorScheme: getCookie("mantine-color-scheme", ctx) || "light",
});

export default trpc.withTRPC(appWithTranslation(PuffSmith));
